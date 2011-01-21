// all the processing code goes in the function
// which gets passed in a processing instance p
var p_code = function(p) {

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
    };

	update_counter = 0;
    // draw is called repeatedly
    p.draw = function() {
		update_counter += 1;
        if (update_counter === 30) {
		    //console.log("frame "+p.millis());
            //console.log(p.__frameRate);
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
};


// attaches the processing code to the canvas
// note that we need to do this AFTER the canvas element is created
var canvas = document.getElementById("test_canvas");
var sketch = new Processing.Sketch(p_code);
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

// Make spacebar not move the window down
window.onkeydown = function(e) { 
  return !(e.keyCode == 32);
};
