'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var challengeSchema = new mongoose.Schema({
    id: {
        type: String
    },
    code: {
        type: Array
    },
    status: {
        type: Boolean,
        default: false
    }
});


var User = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    challenges:  [challengeSchema]
});

module.exports = mongoose.model('User', User);

