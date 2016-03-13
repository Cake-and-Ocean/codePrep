app.controller('HomeController', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $http.get('/challenge').then(function(res){
    $scope.challenges = res.data;
  });

  $scope.goToChallenge = function(index){
    $location.url('challenge/?id=' + $scope.challenges[index]._id);
  };
}]);
