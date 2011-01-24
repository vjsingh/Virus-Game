// Used to alert the user of new information
// draw() returns false if the status update is finished
// spec:
//		text : text to display
//		color : color of text (defaults to black)

var notification = function(p, spec) {

    // object to return
    var obj = {};

    // --- private variables ---
	
	var time_counter = 0; // used to draw the object at various times
	var total_time = 200; // ~6 secs?

    var text_size = 20;
	var box_color = spec.color || p.color(255, 255, 255);
	
    // --- public methods ---

	
	obj.draw = function() {
		var time_percent = time_counter / total_time;
		//var text_size = 25 - 25*(time_percent);
        var text_alpha = 255 - 255*time_percent;

		//var x_pos = (p.width / 2) + (p.width / 2) *time_percent;
		//var y_pos = (p.height / 2) + (p.height / 2) *time_percent;

        // I don't like the moving from the center
        // so I'm trying it stationary
        var x_pos = p.width / 2;
        var y_pos = 70;

        // this needs to come before textWidth
        p.textAlign(p.CENTER, p.CENTER);
		p.textSize(text_size);
        
        var w = p.textWidth(spec.text);

        // draw a box behind it
        p.fill(box_color, text_alpha);
        p.rectMode(p.CORNER)
        p.rect(x_pos-w/2-5, y_pos-p.textAscent(), w+10, p.textAscent()*2);

		p.fill(p.color(0, 0, 0), text_alpha);
        p.text(spec.text, x_pos, y_pos);
		
		if (time_counter > total_time) { // Finished
			return false;
		}
		time_counter++;
		return true;
	}
	
    return obj;
};
