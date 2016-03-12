var express = require('express');
var router = express.Router();
var path = process.cwd();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile(path + '/public/index.html');
});

module.exports = router;


'use strict';

var path = process.cwd();

module.exports = function (app, passport) {

  function isLoggedIn (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }

    res.redirect('/login');

  }

  // ==============================================
  // homepage
  // ==============================================
  app.get('/', function (req, res) {
    res.sendFile(path + '/public/index.html');
  });

  // ==============================================
  // Interview Questions
  // ==============================================
  app.get('/questions', function (req, res) {
    res.sendFile(path + '/public/questions.html');
  });

  // ==============================================
  // Interview Quiz
  // ==============================================
  app.get('/quiz', function (req, res) {
    res.sendFile(path + '/public/quiz.html');
  });

  // ==============================================
  // About Page
  // ==============================================
  app.get('/about', function (req, res) {
    res.sendFile(path + '/public/about.html');
  });

  // ==============================================
  // Blog
  // ==============================================
  app.get('/blog', function (req, res) {
    res.sendFile(path + '/public/blog.html');
  });

  // ==============================================
  // Privacy
  // ==============================================
  app.get('/privacy', function (req, res) {
    res.sendFile(path + '/public/privacy.html');
  })

  // ==============================================
  // Contact
  // ==============================================
  app.get('/contact', function (req, res) {
    res.sendFile(path + '/public/contact.html');
  });


  // ==============================================
  // login
  // ==============================================
  app.get('/login', function (req, res) {
    res.sendFile(path + '/public/login.html', {message: req.flash('loginMessage') });
  });

  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));


  // ==============================================
  // Signup
  // ==============================================
  app.get('/signup', function(req, res) {
    res.sendFile(path + '/public/signup.html', {message: req.flash('signupMessage') });
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  }));

  // ==============================================
  // logout
  // ==============================================
  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/login');
  });


  // ==============================================
  // profile
  // ==============================================
  app.get('/profile', isLoggedIn, function (req, res) {
    res.sendFile(path + '/public/profile.html', {user : req.user} );
  });

  app.get('/api/:id', isLoggedIn, function (req, res) {
    res.json(req.user);
  });

  // ==============================================
  // Authentication Routines
  // ==============================================

  // Local - Email Authentication
  app.get('/login', function(req, res) {
    res.sendFile(path + '/public/login.html', { message: req.flash('loginMessage') });
  });





  // =============================================================================
  // AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
  // =============================================================================

  // Local - Email
  app.get('/connect/local', function(req, res) {
    res.sendFile(path + '/public/connect-local.html', { message: req.flash('loginMessage') });
  });
  app.post('/connect/local', passport.authenticate('local-signup', {
    successRedirect : '/profile',
    failureRedirect : '/connect/local',
    failureFlash : true
  }));



};
