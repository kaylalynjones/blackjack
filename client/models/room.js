(function(){
    'use strict';

    angular.module('blackjack')
        .factory('Room', ['$http', function($http){

            function create(room){
                return $http.post('/room/create', room);
            }

            return {create:create};
        }]);
})();
