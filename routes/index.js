'use strict';

var path = process.cwd();
var Challenge = require('../models/challenges');
var DBHandler = require('../lib/databaseHandler.js');

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
  // seed database with challenges
  // ==============================================
  app.post('/seed', function(req, res) {
    var newChallenge = new Challenge();

    newChallenge.currentIndex = req.body.currentIndex;
    newChallenge.nextIndex = req.body.nextIndex;
    newChallenge.title = req.body.title;
    newChallenge.description = req.body.description;
    newChallenge.examples = req.body.examples;
    newChallenge.tests = req.body.tests;
    newChallenge.solution = req.body.solution;
    newChallenge.defaultValue = req.body.defaultValue;

    newChallenge.save(function (err) {
      if (err) {
        throw err;
      }

      res.json(newChallenge);
    });

  });


  // ==============================================
  // Return all challenges
  // ==============================================
  app.get('/challenge', function(req, res) {
    DBHandler.findAll(function(err, challenges) {
      if (err) {
        return res.status(400).json({ error: err });
      }

      res.json(challenges);
    });
  });


  // ==============================================
  // Return a single challenge
  // ==============================================
  app.get('/challenge/:id', function(req, res) {
    var id = req.params.id;

    DBHandler.findById(id, function(err, challenge) {
      if (err) {
        return res.status(400).json({ error: err });
      }

      res.json(challenge);
    });
  });


  // ==============================================
  // login
  // ==============================================
  //app.get('/login', function (req, res) {
  //  res.sendFile(path + '/public/login.html', {message: req.flash('loginMessage') });
  //});
  //
  //app.post('/login', passport.authenticate('local-login', {
  //  successRedirect : '/profile', // redirect to the secure profile section
  //  failureRedirect : '/login', // redirect back to the signup page if there is an error
  //  failureFlash : true // allow flash messages
  //}));


  // ==============================================
  // Signup
  // ==============================================
  //app.get('/signup', function(req, res) {
  //  res.sendFile(path + '/public/signup.html', {message: req.flash('signupMessage') });
  //});
  //
  //app.post('/signup', passport.authenticate('local-signup', {
  //  successRedirect: '/profile',
  //  failureRedirect: '/login',
  //  failureFlash: true
  //}));


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
  //app.get('/profile', isLoggedIn, function (req, res) {
  //  res.sendFile(path + '/public/profile.html', {user : req.user} );
  //});
  //
  //app.get('/api/:id', isLoggedIn, function (req, res) {
  //  res.json(req.user);
  //});


  // ==============================================
  // Authentication Routines
  // ==============================================
  //app.get('/login', function(req, res) {
  //  res.sendFile(path + '/public/login.html', { message: req.flash('loginMessage') });
  //});


};
