(function(){
    'use strict';

    angular.module('blackjack')
        .controller('RoomsListCtrl', ['$scope', '$state', '$rootScope', function($scope, $state, $rootScope){
            $scope.chat = function(message){
                socket.emit('globalChat', {
                    avatar: $rootScope.rootuser.avatar,
                    body: message
                });
                $scope.message = '';
            };

            socket.on('bGlobalChat', function(message){
                $('#messages').append('<div class="chat" ><img class="chat-avatar", src="'+ message.avatar +'"/>' + message.body + '</div><hr />');
            });

        }]);
})();
