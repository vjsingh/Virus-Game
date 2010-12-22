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

function assert(exp, message) {
	if (!exp) {
		alert("Assert error!: " + message);
	}
}
