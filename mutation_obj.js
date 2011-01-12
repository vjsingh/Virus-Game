// Manages all information about the current state of mutation
// in the game
// Provides a num_status_obj, which is used for rendering

var mutation_obj = function(p) {
	
    // obj to return
    var obj = {};

    // --- private variables ---

	var level = 1;
	var cells_infected = 0;
    var new_mutation = false;
	// Color array for all the mutation levels
	var color_array = [
		p.color(250, 250, 40),
		p.color(100, 250, 110),
		p.color(60, 240, 240),
		p.color(13, 28, 171),
		p.color(167, 17, 161),
		p.color(118, 12, 25)
	];
	
	// Flashing
	var flash_color = null;
	var is_flashing = false;
	
	// Shows the probability of getting a mutation
	var bar_status_obj = num_status_obj(p, {
		pos : new p.PVector(150, 20),
		text : "Mutation:",
		num : 0,
		bar : true,
		max : 50
	});
	
	//Shows the curent mutation level
	var level_status_obj = num_status_obj(p, {
		pos : new p.PVector(350, 20),
		text : "Mutation Level:",
		num : 1,
	});
	
	// --- private methods
	
	// Returns bool saying if a mutation should occur
	// takes into account level, cells_infected, and a random probability
	var mutation_occured = function() {
		//return Math.random() + ( (cells_infected / 50) / (level + 1)) > .95;
        return (Math.random() * (cells_infected / 50)) > .3;
	};
	
	// Flashes the mutation bar red and white
	var flash_bar = function() {
		is_flashing = true;
		
		// Flash red and white every half second
		flash_red();
		setTimeout(flash_white, 500);
		setTimeout(flash_red, 1000);
		setTimeout(flash_white, 1500);
		setTimeout(flash_red, 2000);
		setTimeout(flash_white, 2500);
		// End flashing in 3 seconds
		setInterval(end_flash, 3000);
	}
	
	// updates the flash color
	var flash_red = function() {
		flash_color = [255, 0, 0];
	}
	var flash_white = function() {
		flash_color = [255, 255, 255];
	}
	
	// Draws the bar with the appropriate flashing color
	var draw_flashing_bar = function() {
		bar_status_obj.draw_color(flash_color);
	}
	// Ends the flashing
	var end_flash = function() {
		is_flashing = false;
	}
	
	// Gives us a rainbow gradient	
	// Taken from : http://snipplr.com/view.php?codeview&id=14590
	/**
	 * HSV to RGB color conversion
	 *
	 * H runs from 0 to 360 degrees
	 * S and V run from 0 to 100
	 * 
	 * Ported from the excellent java algorithm by Eugene Vishnevsky at:
	 * http://www.cs.rit.edu/~ncs/color/t_convert.html
	 */
	var hsvToRgb = function(h, s, v) {
		var r, g, b;
		var i;
		var f, p, q, t;
		
		// Make sure our arguments stay in-range
		h = Math.max(0, Math.min(360, h));
		s = Math.max(0, Math.min(100, s));
		v = Math.max(0, Math.min(100, v));
		
		// We accept saturation and value arguments from 0 to 100 because that's
		// how Photoshop represents those values. Internally, however, the
		// saturation and value are calculated from a range of 0 to 1. We make
		// That conversion here.
		s /= 100;
		v /= 100;
		
		if(s == 0) {
			// Achromatic (grey)
			r = g = b = v;
			return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
		}
		
		h /= 60; // sector 0 to 5
		i = Math.floor(h);
		f = h - i; // factorial part of h
		p = v * (1 - s);
		q = v * (1 - s * f);
		t = v * (1 - s * (1 - f));
	
		switch(i) {
			case 0:
				r = v;
				g = t;
				b = p;
				break;
				
			case 1:
				r = q;
				g = v;
				b = p;
				break;
				
			case 2:
				r = p;
				g = v;
				b = t;
				break;
				
			case 3:
				r = p;
				g = q;
				b = v;
				break;
				
			case 4:
				r = t;
				g = p;
				b = v;
				break;
				
			default: // case 5:
				r = v;
				g = p;
				b = q;
		}
		
		return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
	}
	
    // --- public methods --- 

	obj.draw = function() {
		if (is_flashing) {
			draw_flashing_bar();
		}
		else {
			bar_status_obj.draw();
		}
		level_status_obj.draw();
	};
	
    // increments the mutation percentage
	obj.infected_cell = function() {
		cells_infected += 1;
		bar_status_obj.incr(1);
        // if a mutation occurs
        if (mutation_occured()) {
            // set the flag
            new_mutation = true;
			flash_bar();
			level += 1;
	        level_status_obj.incr(1);
        }
	};

    // returns true if a new mutation is ready
    obj.has_new_mutation = function() {
        return new_mutation;
    };

    // resets the counters and the flag
    // to be called after a mutation is enacted in the game
    obj.reset_mutation = function() {
        cells_infected = 0;
        bar_status_obj.set_num(0);
		// reset flag
		new_mutation = false;
    };

	// Returns the current mutation level and color
	obj.get_info = function() {
		// color level goes from 0 to 360
		//var new_color_level = (360 - (360 - level * 30));
		//var hue = new_color_level / 360;
		//var rgb_arr = hsvToRgb(new_color_level, 75, 75);
		return { 
            level: level,
            //color: p.color(rgb_arr[0], rgb_arr[1], rgb_arr[2]),
			// level starts at 1, so have to subtract 1
			color : color_array[(level - 1) % color_array.length], //% color_array.size],
            // get one new particle every 10 levels
            particles: 2+p.floor(level/3)
        };
	};
	
	obj.get_level = function() {
		return level;
	};

	
    return obj;
};
