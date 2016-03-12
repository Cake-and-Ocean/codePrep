app.controller('LoginController', ['$scope', '$state', function($scope, $state) {
  $scope.login = function(){
    $state.go('home');
  };
}]);