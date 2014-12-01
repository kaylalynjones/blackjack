(function(){
    'use strict';

    angular.module('blackjack')
        .controller('RoomsDetailCtrl', ['$scope', '$state', '$rootScope','Room', function($scope, $state, $rootScope, Room){
            $scope.messages = [];

            Room.find($state.params.roomId).then(function(response){
                $scope.room = response.data;
            });

            socket.emit('join', {roomId:$state.params.roomId});

            $scope.chat = function(message){
                socket.emit('roomChat', {
                    roomId: $state.params.roomId,
                    avatar: $rootScope.rootuser.avatar,
                    body: message
                });
            };

            socket.off('roomChat');
            socket.on('roomChat', function(message){
                //$scope.messages.unshift(data);
                //$scope.messages = $scope.messages.slice(0, 100);
                //$scope.message = null;
                //$('#message').focus();
                //$scope.digest();

                $('#messages').append('<div class="chat" ><img class="chat-avatar", ng-src="'+ message.avatar +'"/>' + message.body + '</div><hr />');
                $('#chat').focus();
            });
        }]);
})();

