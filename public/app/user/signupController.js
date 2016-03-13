app.controller('SignupController', ['$scope', '$state', '$http', function($scope, $state, $http) {
  $scope.signup = function(){
    $state.go('home');
  };

  $http.post('/signup', {
    username: 'e.king117@gmail.com',
    password: 'asdf123',
  }).then(function(res){
    console.log(res);
  }, function(err){
    console.log('Error: ', err);
  });

}]);