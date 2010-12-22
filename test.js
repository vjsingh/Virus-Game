// all the processing code goes in the function
// which gets passed in a processing instance p
var pCode = function(p) {

    var g, t1, c1, c2;

    p.setup = function() {
        p.size(500, 500);

        g = in_game_state(p, null); 

        // make some test particles
        g.add_object(particle(p, {
            pos: new p.PVector(100, 100),
            vel: new p.PVector(.2, .2)
        }));

        g.add_object(particle(p, {
            pos: new p.PVector(300, 100),
            vel: new p.PVector(-.2, .2)
        }));

        g.add_object(particle(p, {
            pos: new p.PVector(100, 300),
            vel: new p.PVector(.2, -.2)
        }));

        c1 = cell(p, {
            pos: new p.PVector(200, 200),
            state: "active"
        });
        g.add_object(c1);

        c2 = cell(p, {
            pos: new p.PVector(100, 400),
            state: "active"
        });
        g.add_object(c2);

        g.add_object(cell(p, {
            pos: new p.PVector(250, 200),
            state: "infected"
        }));

        g.add_object(cell(p, {
            pos: new p.PVector(150, 200),
            state: "alive"
        }));

        g.add_object(floater(p, {
            pos: new p.PVector(400, 200)
        }));

        g.add_object(wall_cell(p, {
            pos: new p.PVector(400, 100)
        }));

        g.add_object(empty_cell(p, {
            pos: new p.PVector(400, 200)
        }));

        t1 = tkiller(p, {
            pos: new p.PVector(400, 400),
            target: c1
        });
        g.add_object(t1);

        //setTimeout(function() { t1.set_target(c2); }, 9000);
    };

    // draw is called repeatedly
    p.draw = function() {
        p.background(200);

        g.update();
        g.render();

    };
	
	//Mouse and Keyboard input
	p.keyPressed = function() {
		g.key_pressed(p.key);
	};
}


// attaches the processing code to the canvas
// note that we need to do this AFTER the canvas element is created
var canvas = document.getElementById("test_canvas");
var pInstance = new Processing(canvas, pCode);
