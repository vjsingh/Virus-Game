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
}

function keys(obj) {
    var k = [];
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            k.push(key);
        }
    }
    return k;
}
