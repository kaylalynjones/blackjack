(function(){
    'use strict';

    angular.module('blackjack')
        .factory('Room', ['$http', function($http){

            function create(room){
                return $http.post('/room/create', room);
            }

            function showAll(){
                return $http.get('/room/index');
            }

            function join(room){
                return $http.post('/rooms/' + room.name, {password: room.password});
            }

            return {create:create, showAll:showAll, join:join};
        }]);
})();
