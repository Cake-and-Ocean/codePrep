app.controller('SignupController', ['$scope', '$location', 'Auth', function($scope, $location, Auth) {
  $scope.signup = function(){
    Auth.signup({email: 'email', password: 'pw'}, function(){
      $location.url('/home');
    });
  };
}]);
