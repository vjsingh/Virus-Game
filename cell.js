// *** cell ***
// --- inherits from game_object
// spec:
//  game_object spec +
//  String state = "alive" or "dead" or "infected" or "active"
//  mutation : Mutation_obj so cell can get current mutation color

var cell = function(p, spec) {
    
    // --- defaults ---

    spec.width = spec.width || 30;
    spec.height = spec.height || 30;

    // obj to return
    var obj = game_object(p, spec);

    obj.get_type = function() {
        return "cell";
    };

    // --- private variables ---

    // state can be "alive", "infected", "active", or "dead"
    var state = spec.state || "alive";
    var antibody_angle = 0;
    var antibody_dir = 1;

    // --- public methods --- 

    // implementing game_object interface
    
    // update is different depending on state
    obj.update = function() {
        obj.move();
        if (state === "alive") {
            // just chill
        }
        else if (state === "infected") {
            // still chill
        }
        else if (state === "active") {
            // spin the antibody
            rotateAntibody();
        }
        else if (state === "dead") {
            // explode!!
        }
    };

    // draw makes a cell with a different color depending on state
    // (circle for now)
    obj.draw = function() {
        var pos = obj.get_pos();
        p.shapeMode(obj.mode);

        p.stroke(0);
        p.strokeWeight(1);

        if (state === "alive") {
            p.fill(175);
        }
        else if (state === "infected") {
            p.fill(obj.get_color());
        }
        else if (state === "active") {
            p.fill(obj.get_color());
            drawAntibody();
        }
        else if (state === "dead") {
            p.fill(0);
        }

        p.ellipse(pos.x, pos.y,
                obj.get_width(), obj.get_height());
    };

    obj.is_dead = function() {
        return state === "dead";
    };

    obj.set_state = function(s) {
        state = s;
    };

    obj.get_state = function() {
        return state;
    };

    obj.die = function() {
        obj.set_state("dead");
    };
	
	// explodes this cell if it is active
    // takes number of particles to generate
	// returns that many particles
	obj.fire = function(num_particles) {
		if (state === "active") {
            // TODO: need a slower death
			obj.die();
			
			var pos = obj.get_pos();
            var ang = antibody_angle;
            // use width cuz it's a circle
            var r = obj.get_width()/2;

            // gen particles at edge of cell for now
            var x = r*p.cos(ang) + pos.x;
            var y = r*p.sin(ang) + pos.y;

            // angle between all the shots
            var range = p.PI/6;
            var incr = range/num_particles;

            var particles = [];

            ang = antibody_angle - range/2;
            while (num_particles > 0) {
                var new_vel = new p.PVector(p.cos(ang), p.sin(ang));
                // mult by speed scalar
                new_vel.mult(1);
                // if we want to add velocity of cell
                new_vel.add(obj.get_vel());
                
                particles.push(particle(p, {
                    pos: new p.PVector(x, y),
                    vel: new_vel,
                    color: obj.get_color()
                }));

                num_particles--;
                ang += incr;
            }

            return particles;
        }
        throw "Can't fire on "+state+" cell!";
	};

    // override for circular object
    obj.calc_radius = function() {
        return obj.get_width()/2;
    };
    obj.set_radius(obj.calc_radius());

    // --- private functions ---

    // rotates according to antibody_dir
    // switches direction at certain angles
    var rotateAntibody = function() {
        if (antibody_angle > p.PI/2
                || antibody_angle < -p.PI/2) {
            antibody_dir = (2-antibody_dir)-2;
        }
        antibody_angle += p.radians(1)*antibody_dir;
    };

    // draw the Y-shaped antibody at the edge of the cell
    var drawAntibody = function() {
        p.pushMatrix();

        var pos = obj.get_pos();
        var w = obj.get_width();

        // move to center of circle
        p.translate(pos.x, pos.y);
        // rotate first
        p.rotate(antibody_angle);
        // move out to right edge of circle
        p.translate(w/2, 0);

        // red outline for now
        p.stroke(255, 0, 0);
        p.strokeWeight(3);

        var x1 = w/2;
        p.line(0, 0, x1, 0);
        p.line(x1, 0, x1+w/3, w/3);
        p.line(x1, 0, x1+w/3, -w/3);

        p.popMatrix();
    };

    return obj;
};
