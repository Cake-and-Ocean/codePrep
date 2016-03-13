'use strict';

var path = process.cwd();
var Challenge = require('../models/challenges');
var Handler = require('../lib/Handler.js');


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
    Handler.newChallenge(req.body, function(err, result) {
      if (err) {
        return res.status(400).json({ error: err });
      }

      res.json(result);
    });
  });


  // ==============================================
  // Return all challenges
  // ==============================================
  app.get('/challenge', function(req, res) {
    Handler.findAll(function(err, challenges) {
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
    var id = Number(req.params.id);

    Handler.findByChallengeNumber(id, function(err, challenge) {
      if (err) {
        return res.status(400).json({ error: err });
      }

      res.json(challenge);
    });
  });


  // ==============================================
  // Get Users all challenge results
  // ==============================================
  app.get('/userChallenge/:email', function(req, res) {
    var email = req.params.email;

    Handler.findAllUserChallenges(email, function(err, user) {
      if (err) {
        return res.status(400).json({ error: err });
      }

      res.json(user.challenges);
    });
  });


  // ==============================================
  // Get Users all challenge results
  // ==============================================
  app.get('/userChallenge/:email/:id', function(req, res) {
    var id = req.params.id;
    var email = req.params.email;

    Handler.findSingleUserChallenge(email, id, function(err, challenge) {
      if (err) {
        return res.status(400).json({ error: err });
      }

      return res.json(challenge);
    });
  });

  // ==============================================
  // User a Users Challenge
  // ==============================================
  app.post('/userChallenge/:email/:id', function(req, res) {
    var id = req.params.id;
    var email = req.params.id;

    Handler.updateUserChallengeResults(email, id, req.body, function(err, result) {
      if (err) {
        return res.status(400).json({ error: err});
      }

      return res.json(result);
    });
  });


  // ==============================================
  // login
  // // ==============================================
   app.get('/login', function (req, res) {
    res.sendFile(path + '/public/login.html', {message: req.flash('loginMessage') });
   });

  // app.post('/login', passport.authenticate('local-login', {
  //  successRedirect : '/profile', // redirect to the secure profile section
  //  failureRedirect : '/login', // redirect back to the signup page if there is an error
  //  failureFlash : true // allow flash messages
  // }));

  app.post('/login', passport.authenticate('local-login'), function(req, res){
    res.send({email: req.body.email});
  });


  // ==============================================
  // Signup
  // ==============================================
  //app.get('/signup', function(req, res) {
  //  res.sendFile(path + '/public/signup.html', {message: req.flash('signupMessage') });
  //});
  //
  // app.post('/signup', passport.authenticate('local-signup', {
  //   successRedirect: '/profile',
  //   failureRedirect: '/login',
  //   failureFlash: true
  // }));

  app.post('/signup', passport.authenticate('local-signup'), function(req, res){
    res.send({email: req.body.email});
  });


  // ==============================================
  // logout
  // ==============================================
  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
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
