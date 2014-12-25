var address = require('./address');
var arr = require('./array');
var article = require('./article');
var base = require('./base');
var color = require('./color');
var datetime = require('./datetime');
var devel = require('./devel');
var dx = require('./dx');
var form = require('./form');
var names = require('./names');
var network = require('./network');


var random = extend({}, base, dx, arr, address, datetime, form, network, names, article, color, devel);

// to upper case
for (var key in random) {
    if (random.hasOwnProperty(key)) {
        var upper = key.toUpperCase();
        if (upper === key) {
            continue;
        }
        random[upper] = random[key];
    }
}

module.exports = random;


// Helpers
// -------

function extend() {
    var target = arguments[0];
    for (var i = 1, length = arguments.length; i < length; i++) {
        var source = arguments[i];
        for (var method in source) {
            if (source.hasOwnProperty(method)) {
                target[method] = source[method];
            }
        }
    }
    return target;
}