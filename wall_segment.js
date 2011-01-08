// list of specs for wall segments to use in the game
// later can include which image/shape to use
// MUST HAVE WIDTH AND HEIGHT SPECIFIED
var wall_specs = [
    { width: 100, height: 51 }
    //{ width: 100, height: 30, fill: 0 },
    //{ width: 200, height: 30, fill: 50 },
    //{ width: 50, height: 30, fill: 100 },
    //{ width: 150, height: 30, fill: 150 }
];

// *** wall_segment ***
// --- inherits from game_object
// spec:
//  game_object spec
//  boolean is_top = true if it is on the top of the screen
// 
// Each wall segment must match up with the other
// wall segments at each end
// Segment images should be formatted for the bottom wall

var wall_segment = function(p, spec) {

    //var wall_shape = p.loadShape("images/cellwall1draft.svg");
    var wall_shape = p.loadImage("images/cellwall1.png");

    // --- defaults ---

    spec.width = spec.width || 60;
    spec.height = spec.height || 60;
    spec.fill = spec.fill || 150;
    spec.mode = p.CENTER;

    // obj to return
    var obj = game_object(p, spec);

    obj.get_type = function() {
        return "wall_segment";
    };

    // --- private variables ---

    // --- public methods --- 

    // implementing game_object interface
    
    // update is default (move)

    // (flat rect for now)
    obj.draw = function() {	
        p.pushMatrix();

        var pos = obj.get_pos();
        p.shapeMode(obj.mode);
        // all diff colors for testing
        p.fill(0);//spec.fill);
        p.noStroke();

        var w = obj.get_width();
        var h = obj.get_height();

        p.translate(pos.x, pos.y);

        if (spec.is_top) {
            p.rotate(p.PI);
        }
            
        //p.rect(-w/2, -h/2, w, h);
        p.imageMode(obj.get_mode());
        p.image(wall_shape, 0, 0);//, w, h); 
        //p.set(0, 0, wall_shape);
		//draw(canvas.getContext('2d'));
		//var d = new Date();
		//console.log(d.getMilliseconds());
		//canvas.getContext('2d').drawSvg("images/virusFinal.svg", 300, 10, 20, 20);
		//console.log(d.getMilliseconds());
		
        p.popMatrix();
    };

    obj.draw_circle = function() {};

    // walls can't die
    obj.is_dead = function() {
        return false;
    };

    var count = 0;
    obj.scroll = function(scroll_factor) {
        count += 1;
        if (count === 1) {
            count = 0;
            obj.get_pos().add(new p.PVector(obj.get_scroll_dist()*scroll_factor, 0));
        }
    };

    obj.get_scroll_dist = function() {
        return -1;
    };

    return obj;
}

