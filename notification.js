// Used to alert the user of new information
// draw() returns false if the status update is finished
// spec:
//		text : text to display

var notification = function(p, spec) {

    // object to return
    var obj = {};

    // --- private variables ---
	
	var time_counter = 0; // used to draw the object at various times
	var total_time = 300; // ~10 secs
	
    // --- public methods ---

	
	obj.draw = function() {
		var time_percent = time_counter / total_time;
		var text_size = 25 - 25*(time_percent);
		var x_pos = (p.width / 2) + (p.width / 2) *time_percent;
		var y_pos = (p.height / 2) + (p.height / 2) *time_percent;
		
		p.fill(p.color(0, 0, 0));
        p.textAlign(p.CENTER, p.CENTER);
		p.textSize(text_size);
        p.text(spec.text, x_pos, y_pos);
		
		if (time_counter > total_time) { // Finished
			return false;
		}
		time_counter++;
		return true;
	}
	
    return obj;
};
