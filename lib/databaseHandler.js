var Challenge = require('../models/challenges');


function findAll(callback) {
    Challenge.find({}, callback);
};

function findById(id, callback) {
    Challenge.find({_id: id }, callback);
};

//////////////////////////////////////////////////////////////////////////////////////

var self = {
    findById: findById,
    findAll: findAll
};

module.exports = self;