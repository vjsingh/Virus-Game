// *** cell ***
// --- inherits from game_object
// spec:
//  game_object spec +
//  String state = "alive" or "dead" or "infected" or "active"
//  mutation : Mutation_obj so cell can get current mutation color

var cell = function(p, spec) {
    
    // --- defaults ---

    spec.width = spec.width || 40;
    spec.height = spec.height || 40;

    // obj to return
    var obj = game_object(p, spec);

    obj.get_type = function() {
        return "cell";
    };

    // --- private variables ---

	// images
	var images = random_image_selector();
    var image1 = p.loadImage("images/infectable1.png");
    var image2 = p.loadImage("images/infectable2.png");
    var image3 = p.loadImage("images/infectable3.png");
	images.add(image1);images.add(image2);images.add(image3);
	var cell_image = images.get_image();
	
    // state can be "alive", "infected", "active", or "dead"
    var state = spec.state || "alive";
    var arrow_angle = 0;
    var arrow_dir = 1;
	
	// indicates whether has been hit by an arrow and is being targeted
	//var is_targeted = false;

    // holds an antibody that is attached to the cell, or null
    var anti = null;

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
            // spin the arrow
            rotateArrow();
        }
        else if (state === "dead") {
            // explode!!
        }
    };

    // draw makes a cell with a different color depending on state
    // (circle for now)
    obj.draw = function() {
        var pos = obj.get_pos();
        p.shapeMode(obj.get_mode());

        p.stroke(0);
        p.strokeWeight(1);

        if (state === "alive" || state === "infected") {
            //p.fill(175);
	        //p.ellipse(pos.x, pos.y,
	                //obj.get_width(), obj.get_height());
			if (state === "infected") {
				p.strokeWeight(0);
				//if (is_targeted) {
				//	p.fill(0);
				//}
				//else {
					p.fill(obj.get_color());
				//}
				//p.ellipse(pos.x + obj.get_width() / 8, pos.y - obj.get_height() / 8, 
					//		obj.get_width() / 2, obj.get_height() / 2);
				
				p.fill(obj.get_color());
			}
			else { //alive
				p.fill(p.color(200, 50, 50));
			}
			p.ellipse(pos.x, pos.y, obj.get_width(), obj.get_height());
			p.imageMode(obj.get_mode());
			p.image(cell_image, pos.x, pos.y, obj.get_width(), obj.get_height());
        }
        else if (state === "active") {
            drawArrow();
            // red outline for now
            p.stroke(255, 0, 0);
            p.strokeWeight(3);

            p.fill(obj.get_color());
	        p.ellipse(pos.x, pos.y,
	                obj.get_width(), obj.get_height());
        }
        else if (state === "dead") {
            p.fill(0);
	        p.ellipse(pos.x, pos.y,
	                obj.get_width(), obj.get_height());
        }

    };

    obj.is_dead = function() {
        return state === "dead";
    };

    obj.set_state = function(s) {
        state = s;
    };
	
	obj.set_antibody = function(a) {
        anti = a;
        anti.attach();
	};
	
	obj.has_antibody = function() {
		return (anti !== null);
	};

    obj.get_state = function() {
        return state;
    };

    obj.die = function() {
        if (anti) {
            anti.die();
        }
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
            var ang = arrow_angle;
            // use width cuz it's a circle
            var r = obj.get_width()/2;

            // gen particles at edge of cell for now
            var x = r*p.cos(ang) + pos.x;
            var y = r*p.sin(ang) + pos.y;

            // angle between all the shots
            var range = p.PI/6;
            var incr = range/num_particles;

            var particles = [];

            ang = arrow_angle - range/2;
            while (num_particles > 0) {
                var new_vel = new p.PVector(p.cos(ang), p.sin(ang));
                // mult by speed scalar
                new_vel.mult(3);
                // if we want to add velocity of cell
                new_vel.add(obj.get_vel());
                
                particles.push(particle(p, {
                    pos: new p.PVector(x, y),
                    vel: new_vel,
                    mutation_info: obj.get_mutation_info()
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

    // rotates according to arrow_dir
    // switches direction at certain angles
    var rotateArrow = function() {
        if (arrow_angle > p.PI/2
                || arrow_angle < -p.PI/2) {
            arrow_dir = (2-arrow_dir)-2;
        }
        arrow_angle += p.radians(3)*arrow_dir;
    };

    var drawArrow = function() {
        p.pushMatrix();

        var pos = obj.get_pos();
        var w = obj.get_width();

        // move to center of circle
        p.translate(pos.x, pos.y);
        // rotate first
        p.rotate(arrow_angle);
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
