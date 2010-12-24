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

var game_object = function (p, spec) {

    // object to return
    var obj = {};

    // should be overridden by subtypes
    obj.get_type = function() {
        return "game_object";
    };

    // --- private variables ---

    var mode = spec.mode || p.CENTER;
    var pos = spec.pos || new p.PVector(0, 0);
    var width = spec.width || 0;
    var height = spec.height || 0;
    var vel = spec.vel || new p.PVector(0, 0);
    var accel = spec.accel || new p.PVector(0, 0);
    // used for circle collision testing
    var radius = spec.radius // default set at bottom of file

    // --- public methods ---

    // all game_objects must implement this interface:
    // void update() - called each frame to move/update objects
    // void draw() - called each frame to display the object
    // boolean is_dead() - returns true if the object should be
    //                      removed from the game

    // update moves obj by default
    obj.update = function() { obj.move(); };
    
    // draw does nothing by default
    obj.draw = function() {};
    
    // is_dead returns false by default
    obj.is_dead = function() { return false; };

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
    }

    // updates the position according to accel and vel
    obj.move = function() {
        vel.add(accel);
        pos.add(vel);
    };

    // stops the object in its tracks by zeroing out vel
    obj.stop = function() {
        vel = new p.PVector(0, 0);
    };
	
	// Scrolls the obj a specified distance left or right (positive is right)
	obj.scroll = function(scroll_x) {
		//var old_x = pos.x, old_y = pos.y;
		//pos = new p.PVector(old_x + scroll_x, old_y);
        pos.add(new p.PVector(scroll_x, 0));
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
	obj.set_pos = function(p) {
		pos = p;
	}

    // --- getters --- 

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
