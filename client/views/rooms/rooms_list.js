(function(){
    'use strict';

    angular.module('blackjack')
        .controller('RoomsListCtrl', ['$scope', '$state', function($scope, $state){
            $scope.chat = function(message){
                socket.emit('globalChat', message);
            };

            socket.on('bGlobalChat', function(data){
                $('#messages').append('<div>' + data + '</div>');
            });

        }]);
})();
