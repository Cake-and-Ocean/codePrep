'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    email:   String,
    password:       String
});

module.exports = mongoose.model('User', User);