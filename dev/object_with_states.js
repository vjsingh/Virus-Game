// Gives an object the capability to set and get states
// inherits from game_object
// spec:
//		spec.state -- current state, default to 'alive'

var object_with_states = function(p, spec) {
    
	var obj = game_object(p, spec);
	
    var state = spec.state || "alive";
	
    // --- public methods --- 

    obj.set_state = function(s) {
		// If outdated, don't update state
		if (state != "outdated") {
			state = s;
		}
    };

    obj.get_state = function() {
        return state;
    };

    return obj;
}
