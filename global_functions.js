// *** global_functions ***
// Holds functions used in the whole project

function AssertException(message) { this.message = message};
function assert(exp, message) {
	if (!exp) {
		throw new AssertException(message);
	}
}
