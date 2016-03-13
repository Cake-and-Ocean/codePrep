app.controller('LoginController', ['$scope', '$location', 'Auth', function($scope, $location, Auth) {
  $scope.login = function(){
    Auth.login({email: 'email', password: 'pw'}, function(){
      $location.path('/home');
    });
  };
}]);