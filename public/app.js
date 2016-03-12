var app = angular.module('codePrep', []);

app.controller('MainCtrl', ['$scope', function($scope) {
  $scope.name = 'World';
}]);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "partials/state1.html"
    });

});


