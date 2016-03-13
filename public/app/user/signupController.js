app.controller('SignupController', ['$scope', '$state', function($scope, $state) {
  $scope.signup = function(){
    $state.go('home');
  };



}]);