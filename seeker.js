// ABSTRACT class for game objects that seek other game objects
// Classes that implement must override "my_update" instead of "update"
// --- inherits from game_object
// spec:
//  game_object spec +
//  speed = how fast the seeker approaches the target
//	no_target_speed = how fast the object moves when there is no target
//  target = object to move towards

var seeker = function(p, spec) {
    
    // --- defaults ---

    // obj to return
    var obj = game_object(p, spec);

    // --- private variables ---

    var speed = spec.speed || 0.2;
	var no_target_speed = spec.no_target_speed || 0.2;
    var alive = true;
    var target = spec.target || null;
    var target_angle = Math.random() * (p.PI * 2) - p.PI; //random angle

    // --- public methods --- 

    // implementing game_object interface
    
    // update makes tkiller chase target cell
    obj.update = function() {
        var pos = obj.get_pos();
        var tpos;
        var speed_to_use = speed;

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
            tpos = target.get_pos();

            // update target_angle
            target_angle = p.atan2(tpos.y-pos.y,
                    tpos.x-pos.x); // y first!
                
            // SHOULD BE HANDLED BY COLLISIONS
            // when we get there, stop
            /*
            if (pos.dist(tpos) < target.get_width()/2) {
                target = null;
            }
            */
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

    obj.set_target = function(new_target) {
        target = new_target;
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

    return obj;
}
