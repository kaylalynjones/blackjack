(function(){
    'use strict';

    angular.module('blackjack')
        .controller('RoomsListCtrl', ['$scope', '$state', '$rootScope','Room', function($scope, $state, $rootScope, Room){
            $scope.createRoom = function(){
                Room.create($scope.room).then(
                    function(response){
                        console.log(response);
                        toastr.success('You successfully created a chat room! Now invite some people.');
                    },
                    function(){
                        toastr.error('Error during creation, chat room names must be unique.');
                    }
                );
            };


            $scope.chat = function(message){
                socket.emit('globalChat', {
                    avatar: $rootScope.rootuser.avatar,
                    body: message
                });
                $scope.message = '';
            };

            socket.on('bGlobalChat', function(message){
                $('#messages').append('<div class="chat" ><img class="chat-avatar", src="'+ message.avatar +'"/>' + message.body + '</div><hr />');
                $('#chat').focus();
            });

        }]);
})();
