app.controller('HomeController', ['$scope', '$http', function($scope, $http) {
  $http.get('/challenge').then(function(res){
    $scope.challenges = res.data;
  });
}]);