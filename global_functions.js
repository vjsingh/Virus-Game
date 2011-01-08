// ** Global Constants
//DEFAULT_SCROLL_DIST = -0.8;

// *** global_functions ***
// Holds functions used in the whole project

//Have to catch it so fuck it
/*
function AssertException(message) { this.message = message};
function assert(exp, message) {
	if (!exp) {
		throw new AssertException(message);
	}
}
*/

var assert = function(exp, message) {
	if (!exp) {
		console.error("Assert error!: " + message);
	}
};

//Does something to every element of an arr
var for_each = function(arr, fun) {
	for (var i = 0; i < arr.length; i++) {
		fun(arr[i]);
	}
};

// returns the index of an element in a list,
// otherwise false
var member = function(arr, elt) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i] === elt) {
            return i;
        }
    }
    return false;
};

// removes the first instance of elt from the array
var remove_elt = function(arr, elt) {
    remove_index(arr, arr.indexOf(elt));
};

// removes the element at index i from the array and returns it
var remove_index = function(arr, i) {
    return arr.splice(i, 1)[0];
};

// returns a random element from an array
var random_from = function(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
};

// to be used with objects within objects
// returns a nested property if there is one
// otherwise undefined
var retrieve = function(obj, key1, key2) {
    return obj[key1] ? obj[key1][key2] : undefined;
};

// returns an array of the property names (keys)
// of an object
function keys(obj) {
    var k = [];
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            k.push(key);
        }
    }
    return k;
};
