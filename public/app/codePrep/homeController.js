app.controller('HomeController', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/challenges.json').then(function(res){
    $scope.challenges = res.data;
  });
}]);