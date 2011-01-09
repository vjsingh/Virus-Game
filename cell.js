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
    //var image1 = p.loadImage("images/infectable1.png");
    //var image2 = p.loadImage("images/infectable2.png");
    //var image3 = p.loadImage("images/infectable3.png");
    var image1 = p.loadImage("images/new/infectable1.png");
    var image2 = p.loadImage("images/new/infectable2.png");
    var image3 = p.loadImage("images/new/infectable3.png");
	images.add(image1);images.add(image2);images.add(image3);
	var cell_image = images.get_image();
	
    // state can be "alive", "infected", "active", or "dead"
    var state = spec.state || "alive";
    // random initial angle
    var arrow_angle = p.random(-p.PI/2, p.PI/2);
    // random dir (1 or -1)
    var arrow_dir = p.random() >= 0.5 ? 1 : -1;
	
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

        p.noStroke();

        if (state === "alive") {
            p.fill(p.color(200, 50, 50));
        }
        else {
            if (state === "infected") {
                p.fill(obj.get_color());
            }
            else if (state === "active") {
                drawArrow();
				
				// Draw a separate circle for the red outline
				// so that we can more accurately fill in the cell
                // red outline for now
                p.stroke(255, 0, 0);
                p.strokeWeight(4);
				p.ellipse(pos.x, pos.y, obj.get_width(), obj.get_height());
				
				p.noStroke();
                p.fill(obj.get_color());
            }
            p.ellipse(pos.x, pos.y, obj.get_width() * 4/5, obj.get_height() * 4/5);
        }

        p.imageMode(obj.get_mode());
        p.image(cell_image, pos.x, pos.y, obj.get_width(), obj.get_height());

        /*
        else if (state === "dead") {
            p.fill(0);
	        p.ellipse(pos.x, pos.y,
	                obj.get_width(), obj.get_height());
        }
        */

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
	obj.fire = function() {
		if (state === "active") {
			// Make sounds
			play_sound("cell_fire");
			
            // TODO: need a slower death
			obj.die();
			
			var pos = obj.get_pos();
            var ang = arrow_angle;
            // use width cuz it's a circle
            var r = obj.get_width()/2;

            // gen particles at edge of cell for now
            var x = r*p.cos(ang) + pos.x;
            var y = r*p.sin(ang) + pos.y;

            var num_particles = get_num_particles();
            // angle between all the shots
            var range = p.PI/6;
            var incr = range/num_particles;

            var particles = [];

            ang = arrow_angle - range/2;
            // special case
            if (num_particles === 1) {
                ang = arrow_angle;
            }
            while (num_particles > 0) {
                var new_vel = new p.PVector(p.cos(ang), p.sin(ang));
                // mult by speed scalar
                new_vel.mult(7);
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
        arrow_angle += p.radians(5)*arrow_dir;
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
        p.strokeWeight(2);
        p.fill(obj.get_color());

        var x1 = w/2;
        // draw facing out to right
        p.beginShape();
        p.vertex(0, -5);
        p.vertex(x1, -5);
        p.vertex(x1, -10);
        p.vertex(x1+15, 0);
        p.vertex(x1, 10);
        p.vertex(x1, 5);
        p.vertex(0, 5);
        p.endShape();

        p.popMatrix();
    };

    var get_num_particles = function() {
        return obj.get_mutation_info().particles;
    };

    return obj;
};
