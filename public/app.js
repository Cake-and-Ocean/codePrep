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
      url: '/signup',
      templateUrl: 'app/user/signup.html',
      controller: 'SignupController'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'app/user/login.html',
      controller: 'LoginController'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'app/user/profile.html',
      controller: 'ProfileController'
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


