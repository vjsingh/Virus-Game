// *** game_object ***
// spec:
//  mode = p.CENTER or p.CORNERS (constants from processing)
//     - describes how the coords work, set by p.shapeMode()
//  p.PVector pos = initial position (x,y)
//  float width = width of the entire object
//  float height = height of the entire object
//  float radius = circle collision radius (will be auto-calced)
//  p.PVector vel = initial velocity
//  p.PVector accel = initial acceleration
//  mutation_info = object with level and color props

var game_object = function (p, spec) {


    // object to return
    var obj = {};

    // should be overridden by subtypes
    obj.get_type = function() {
        return "game_object";
    };

    obj.DEFAULT_SCROLL_DIST = -.5;

    // --- private variables ---

    var mode = spec.mode || p.CENTER;
    var pos = spec.pos || new p.PVector(0, 0);
    var width = spec.width || 0;
    var height = spec.height || 0;
    var vel = spec.vel || new p.PVector(0, 0);
    var accel = spec.accel || new p.PVector(0, 0);
    // used for circle collision testing
    var radius = spec.radius // default set at bottom of file
    // used for mutation
    var mutation_info = spec.mutation_info ||
            { level: -1, color: p.color(0, 0, 0) };
			
	var alive = true;
	
    // --- public methods ---

    // all game_objects must implement this interface:
    // void update() - called each frame to move/update objects
    // void draw() - called each frame to display the object
    // void scroll() - moves the object left by a certain amount

    // update moves obj by default
    obj.update = function() { obj.move(); };
    
    // draw does nothing by default
    obj.draw = function() {};
    
    // by default returns the negated alive variable
    obj.is_dead = function() { return !alive; };

	// Generic methods for all game_objects:
    // returns true if the object is completely offscreen
    // i.e. checks pos + dimensions
    obj.is_offscreen = function() {
	    var left_edge = pos.x - width;
	    var right_edge = pos.x + width;
	    var top_edge = pos.y - height;
	    var btm_edge = pos.y + height;
        return (left_edge > p.width
            || right_edge < 0
            || top_edge > p.height
            || btm_edge < 0);
    };
	
	// Returns if the obj is off the right of the screen
	obj.is_off_right = function() {
		var left_edge = pos.x - width;
		return left_edge > p.width;
	};
	

	// Bounces the object off a wall, if it is at one
	obj.bounce = function() {
	    var left_edge = pos.x - width;
	    var right_edge = pos.x + width;
	    var top_edge = pos.y - height;
	    var btm_edge = pos.y + height;
		if (top_edge <= 0 && vel.y < 0) {
			vel.y = -vel.y;
		}
		if (btm_edge >= p.height && vel.y > 0) {
			vel.y = -vel.y;
		}
		if (left_edge <= 0 && vel.x < 0) {
			vel.x = -vel.x;
		}
		if (right_edge >= p.width && vel.x > 0) {
			vel.x = -vel.x;
		}
	};
	
	// reverses the y velocity
	// used for bouncing vertically
	obj.reverse_y = function() {
		var vel = obj.get_vel();
		obj.set_vel(new p.PVector(vel.x, -vel.y));
	};

	// reverses the x velocity
	// used for bouncing horizontally
	obj.reverse_x = function() {
		var vel = obj.get_vel();
		obj.set_vel(new p.PVector(- vel.x, vel.y));
	};
	
    // updates the position according to accel and vel
	// Bounces off walls
    obj.move = function() {
        vel.add(accel);
        pos.add(vel);
    };

    // stops the object in its tracks by zeroing out vel
    obj.stop = function() {
        vel = new p.PVector(0, 0);
    };
	
	// Scrolls the obj a specified distance left or right (positive is right)
	obj.scroll = function(scroll_factor) {
		var scroll_x = obj.get_scroll_dist();
        if (!scroll_x) {
            scroll_x = obj.DEFAULT_SCROLL_DIST;
        }
        pos.add(new p.PVector(scroll_x*scroll_factor, 0));
	};
	
	obj.die = function() {
		alive = false;
	};
	
    // --- setters --- 

    obj.set_accel = function(new_accel) {
        accel = new_accel;
    };

    obj.set_vel = function(new_vel) {
        vel = new_vel;
    };

    // should only be used once, just for circular objects
    obj.set_radius = function(new_radius) {
        radius = new_radius;
    };
	
	// Should only be used for collisions
	obj.set_pos = function(posn) {
		pos = posn;
	};

    obj.set_mutation_info = function(m) {
        mutation_info = m;
    };

    // --- getters --- 
	
	// Override to set different scroll dist
    // or leave as null to use default
	obj.get_scroll_dist = function() {
		return null;
	};

    obj.get_pos = function() {
        return pos;
    };
	
	obj.get_left = function() {
		return pos.x - (width / 2);
	};
	
	obj.get_top = function() {
		return pos.y - (height / 2);
	};

	obj.get_right = function() {
		return pos.x + (width / 2);
	};
	
	obj.get_bottom = function() {
		return pos.y + (height / 2);
	};

    obj.get_width = function() {
        return width;
    };

    obj.get_height = function() {
        return height;
    };

    obj.get_mode = function() {
        return mode;
    };

    obj.get_vel = function() {
        return vel;
    };

    obj.get_accel = function() {
        return accel;
    };
    
    obj.get_radius = function() {
        return radius;
    };

    obj.get_mutation_info = function() {
        return mutation_info;
    };

    obj.get_color = function() {
        return mutation_info.color;
    };

    obj.get_level = function() {
        return mutation_info.level;
    };

    obj.is = function(type) {
        return obj.get_type() === type;
    };

    obj.to_string = function() {
        return obj.get_type()+" ("+pos.x+", "+pos.y+")";
    };

    // draws the collision circle as an overlay
    obj.draw_circle = function() {
        p.fill(255, 50);
        p.noStroke();
        p.shapeMode(p.CENTER);
        p.ellipse(pos.x, pos.y, 2*radius, 2*radius); 
    };

    // uses pythagorean theorem to calc radius of bounding circle
    obj.calc_radius = function() {
        return 0.5*p.sqrt(width*width+height*height);
    };

    // calc radius if not already set
    radius = radius || obj.calc_radius();

    return obj;
}
