'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Challenge = new Schema({
    currentIndex: {
        type:       Number,
        unique:     true,
        required:   true
    },
    nextIndex: {
        type:       Number,
        unique:     true,
        required:   true
    },
    title: {
        type:       String,
        required:   true
    },
    description: {
        type:       Array
        required:   true
    },
    examples: {
        type:       Array
    },
    tests: {
        type:       Array
    },
    solution: {
        type:       Array
    },
    defaultValue: {
        type:       Array
        required:   true
    }
});

module.exports = mongoose.model('Challenge', Challenge);