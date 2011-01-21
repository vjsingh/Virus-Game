// ABSTRACT class for game objects that seek other game objects
// Classes that implement must override "my_update" instead of "update"
// --- inherits from object_with_states
// spec:
//  game_object spec +
//  speed = how fast the seeker approaches the target
//	no_target_speed = how fast the object moves when there is no target
//  target = object to move towards

var seeker = function(p, spec) {
    
    // --- defaults ---

    // obj to return
    var obj = object_with_states(p, spec);

    // --- private variables ---

    var speed = spec.speed || 0.2;
	var no_target_speed = spec.no_target_speed || 0.2;
    var alive = true;
    var target = spec.target || null;
    // initialized to random val at bottom
    var target_angle = 0;

    // --- public methods --- 

    // implementing game_object interface
    
    // update makes tkiller chase target cell
    obj.update = function() {
        var pos = obj.get_pos();
        var speed_to_use = speed;

        if (target && target.is_dead()) {
            target = null;
        }

        // if no target
        if (target === null) {
            // meander
            if (parseInt(p.random(150)) === 0) {
                target_angle += p.random(-p.PI/16, p.PI/16);
            }
            // laze
            speed_to_use = no_target_speed;
        }
        else {
            obj.face_target(); 
        }

        // change velocity to point towards target
        var new_vel = new p.PVector(
                p.cos(target_angle), p.sin(target_angle));
        new_vel.mult(speed_to_use);
        obj.set_vel(new_vel);
			
		obj.my_update();
    };
	
	// MUST BE OVERWRITTEN
	obj.my_update = function() {
		console.log("my_update (in seeker) not overwritten!");
	};

	// Indicates that a mutation has occured and this object
	// should float off the screen
	// Makes this object stop and float off screen
	obj.outdated = function() {
		obj.set_state("outdated");
		obj.set_vel(new p.PVector(0,0));
        obj.set_target(null);
	};
	
    obj.is_outdated = function() {
        return obj.get_state() === "outdated";
    };

    // faces tar, or if tar not supplied, the object's
    // target
    obj.face_target = function(tar) {
        var pos = obj.get_pos();
        if (target) {
            var tpos = target.get_pos();
        }
        if (tar) {
            var tpos = tar.get_pos();
        }
        if (tpos) {
            // update target_angle
            target_angle = p.atan2(tpos.y-pos.y, tpos.x-pos.x); // y first!
        }
    };


    obj.set_target = function(new_target) {
		if (obj.get_state() !== "outdated") {
			target = new_target;
		}
    };

    obj.set_target_angle = function(new_target_angle) {
        target_angle = new_target_angle;
    };
	
	obj.get_target = function() {
		return target;
	};

	obj.get_target_angle = function() {
		return target_angle;
	};

    // creates a random angle for init'ing
    obj.random_target_angle = function() {
        return p.random(-p.PI, p.PI); 
            //Math.random() * (p.PI * 2) - p.PI; //random angle
    };
    target_angle = obj.random_target_angle();


    return obj;
}
