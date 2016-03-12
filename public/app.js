var app = angular.module('codePrep', ['ui.router']);

// app.controller('MainCtrl', ['$scope', function($scope) {
//   $scope.name = 'World';
// }]);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise('/');
  //
  // Now set up the states
  $stateProvider
    .state('landing', {
      url: '/',
      templateUrl: 'app/landing/landing.html',
      controller: 'LandingController'
    })
    .state('signup', {
      url: '/Signup',
      templateUrl: 'app/user/signup.html',
      controller: 'SignupController'
    })
    .state('login', {
      url: '/Login',
      templateUrl: 'app/user/login.html',
      controller: 'LoginController'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'app/codePrep/home.html',
      controller: 'HomeController'
    })
    .state('challenge', {
      url: '/challenge/:id',
      templateUrl: 'app/codePrep/challenge.html',
      controller: 'ChallengeController'
    });

});


