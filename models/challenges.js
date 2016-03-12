'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Challenge = new Schema({
    currentIndex: Number,
    nextIndex:    Number,
    title:        String,
    description:  Array,
    examples:     Array,
    tests:        Array,
    solution:     Array,
    defaultValue: Array
});

module.exports = mongoose.model('Challenge', Challenge);