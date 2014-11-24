(function(){
  'use strict';

  angular.module('blackjack')
    .controller('NavCtrl', ['$scope', '$state', 'User', '$rootScope', function($scope, $state, User, $rootScope){
      $scope.$on('username', function(e, username){
        $scope.username = username;
        $scope.init = true;
      });

      $scope.$on('online', function(){
        $scope.online = true;
        $scope.$digest();
      });

      $scope.logout = function(){
        User.logout().then(function(){
          $rootScope.rootuser = null;
          toastr.success('User successfully logged out.');
          $state.go('home');
        });
      };
    }]);
})();
