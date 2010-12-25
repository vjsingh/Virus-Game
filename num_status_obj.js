// Generic wrapper for a status that includes text and a num
// Provides draw, incr, set_num, and get_num
// spec:
//		pos : center pos of text
//		text : Will display "<text> <num>"
//		num : num to start at

var num_status_obj = function(p, spec) {
	
    // obj to return
    var obj = {};

    // --- private variables ---

	var number = spec.num;
	var txt = spec.text;
	var rect = rectangle(p, { // Really just a text obj
		pos : spec.pos,
		width : 0,
		height : 0,
		text : txt + " " + number //same as get_obj_text
	})
	
	// --- private methods
	
	var get_obj_text = function() {
		return txt + " " + number;
	}
	
	var update = function(n) {
		number = n;
		rect.update_text(get_obj_text());
	}
	
    // --- public methods --- 

	obj.draw = function() {
        rect.draw();
	};
	
	obj.incr = function(n) {
		update(number + n);
	};
	
	// Set and get
	
	obj.set_num = function(n) {
		update(n);
	}
	
	obj.get_num = function(n) {
		return number;
	}
	
    return obj;
};
