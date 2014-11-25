(function(){
    'use strict';

    angular.module('blackjack')
        .controller('RoomsListCtrl', ['$scope', '$state', '$rootScope','Room', function($scope, $state, $rootScope, Room){
            $scope.rooms = [];
            $scope.room = {};
            $scope.createRoom = function(){
                Room.create($scope.room).then(
                    function(response){
                        console.log(response);
                        $scope.rooms.push(response.data);
                        $scope.room = {};
                        $scope.error = false;
                        toastr.success('You successfully created a chat room! Now invite some people.');
                    },
                    function(){
                        $scope.error = true;
                        toastr.error('Error during creation, chat room names must be unique.');
                    }
                );
            };


            Room.showAll().then(function(response){
                $scope.rooms = response.data;
            });

            $scope.chat = function(message){
                socket.emit('globalChat', {
                    avatar: $rootScope.rootuser.avatar,
                    body: message
                });
                $scope.message = '';
            };

            $scope.join = function(room){
                Room.join({name: room.name, password: this.password}).then(function(response){
                    var roomId = response.data.roomId;
                    $state.go('rooms.detail', {roomId: roomId});
                }, function(){
                    toastr.error('Incorrect Password.');
                });
            };

            socket.on('bGlobalChat', function(message){
                $('#messages').append('<div class="chat" ><img class="chat-avatar", ng-src="'+ message.avatar +'"/>' + message.body + '</div><hr />');
                $('#chat').focus();
            });

        }]);
})();
