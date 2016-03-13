var Challenge = require('../models/challenges');
var user = require('../models/users');


function findAll(callback) {
    Challenge.find({}, callback);
};

function findById(id, callback) {
    Challenge.find({_id: id }, callback);
};

function newChallenge(body, callback) {
    var aChallenge = new Challenge();

    aChallenge.currentIndex = body.currentIndex;
    aChallenge.nextIndex = body.nextIndex;
    aChallenge.title = body.title;
    aChallenge.description = body.description;
    aChallenge.examples = body.examples;
    aChallenge.tests = body.tests;
    aChallenge.solution = body.solution;
    aChallenge.defaultValue = body.defaultValue;

    aChallenge.save(callback);
};

function findAllUserChallenges(email, callback) {
    User.find( {email: email}, callback);
};


function findSingleUserChallenge(email, id, callback) {
    User.find( {email: email}, callback);
};


function updateUserChallengeResults(email, id, body, callback) {
    User.find( {email: email})
};

//////////////////////////////////////////////////////////////////////////////////////

var self = {
    findById: findById,
    findAll: findAll,
    newChallenge: newChallenge,
    findAllUserChallenges: findAllUserChallenges,
    findSingleUserChallenge: findSingleUserChallenge,
    updateUserChallengeResults: updateUserChallengeResults
};

module.exports = self;