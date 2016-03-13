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
      views: {
        content: {
          templateUrl: 'app/landing/landing.html',
          controller: 'LandingController'
        }
      },
      onEnter: ['Auth', '$location', function(Auth, $location){
        if (Auth.isAuth()){
          $location.path('/home');
        }
      }]
    })
    .state('signup', {
      url: '/signup',
      views: {
        content: {
          templateUrl: 'app/user/signup.html',
          controller: 'SignupController'
        }
      },
      onEnter: ['Auth', '$location', function(Auth, $location){
        if (Auth.isAuth()){
          $location.path('/home');
        }
      }]
    })
    .state('login', {
      url: '/login',
      views: {
        content: {
          templateUrl: 'app/user/login.html',
          controller: 'LoginController'
        }
      },
      onEnter: ['Auth', '$location', function(Auth, $location){
        if (Auth.isAuth()){
          $location.path('/home');
        }
      }]
    })
    .state('profile', {
      url: '/profile',
      views: {
        nav: {
          templateUrl: 'app/nav/nav.html',
          controller: 'NavController'
        },
        content: {
          templateUrl: 'app/user/profile.html',
          controller: 'ProfileController'
        }
      },
      onEnter: ['Auth', '$location', function(Auth, $location){
        if (!Auth.isAuth()){
          $location.path('/login');
        }
      }]
    })
    .state('home', {
      url: '/home',
      views: {
        nav: {
          templateUrl: 'app/nav/nav.html',
          controller: 'NavController'
        },
        content: {
          templateUrl: 'app/codePrep/home.html',
          controller: 'HomeController'
        }
      },
      onEnter: ['Auth', '$location', function(Auth, $location){
        if (!Auth.isAuth()){
          $location.path('/login');
        }
      }]
    })
    .state('challenge', {
      url: '/challenge/:id',
      views: {
        nav: {
          templateUrl: 'app/nav/nav.html',
          controller: 'NavController'
        },
        content: {
          templateUrl: 'app/codePrep/challenge.html',
          controller: 'ChallengeController'
        }
      },
      onEnter: ['Auth', '$location', function(Auth, $location){
        if (!Auth.isAuth()){
          $location.path('/login');
        }
      }]
    });

});


