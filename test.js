// all the processing code goes in the function
// which gets passed in a processing instance p
var pCode = function(p) {

    var g, t1, c1, c2;

    p.setup = function() {
        p.size(700, 600);

        // deal with console issues
        // TODO move this code
        if (!window.console) { 
            console = { log: function() {} };
        }
        Processing.logger = console;

        var f = new p.loadFont("_sans");
        p.textFont(f, 14);

		g = state_manager(p);
		
		p.frameRate(30);
        //g = in_game_state(p, null); 

        /*
        g.add_object(particle(p, {
            pos: new p.PVector(50, 100),
            vel: new p.PVector(.2, .2)
        }));

        g.add_object(particle(p, {
            pos: new p.PVector(300, 100),
            vel: new p.PVector(-.2, .2)
        }));

        g.add_object(particle(p, {
            pos: new p.PVector(300, 300),
            vel: new p.PVector(.2, -.2)
        }));

        c1 = cell(p, {
            pos: new p.PVector(200, 200),
            state: "alive"
        });
        g.add_object(c1);

        c2 = cell(p, {
            pos: new p.PVector(100, 400),
            state: "alive"
        });
        g.add_object(c2);

        g.add_object(cell(p, {
            pos: new p.PVector(250, 200),
            state: "alive"
        }));

        g.add_object(cell(p, {
            pos: new p.PVector(150, 200),
            state: "alive"
        }));

        g.add_object(floater(p, {
            pos: new p.PVector(400, 250)
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
        */
    };

	update_counter = 0;
    // draw is called repeatedly
    p.draw = function() {
		update_counter += 1;
        if (update_counter === 30) {
		    console.log("frame "+p.millis());
            console.log(p.__frameRate);
            update_counter = 0;
        }
        g.update(); // Also renders
    };
	
	//Mouse and Keyboard input
	p.keyPressed = function() {
		g.key_pressed(p.key);
	};
	p.mousePressed = function() {
		g.mouse_click(p.mouseX, p.mouseY);
	};
}


// attaches the processing code to the canvas
// note that we need to do this AFTER the canvas element is created
var canvas = document.getElementById("test_canvas");
var sketch = new Processing.Sketch(pCode);
sketch.options.isTransparent = true;
var pInstance = new Processing(canvas, sketch);

var back_code = function(p) {
    var tiles = [];
    p.setup = function() {
        p.size(700, 600); 
        p.frameRate(30);
        tiles.push(background(p, {
            pos: new p.PVector(0, 0)
        }));
        tiles.push(background(p, {
            pos: new p.PVector(700, 0)
        }));
    };
    p.draw = function() {
        p.background(200);
        for_each(tiles, function(tile) {
            tile.update();
            tile.scroll(1);
            tile.draw();
        });
    };
};
var back_canvas = document.getElementById("back_canvas");
//var backInstance = new Processing(back_canvas, back_code);
