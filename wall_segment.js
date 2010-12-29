// list of specs for wall segments to use in the game
// later can include which image/shape to use
// MUST HAVE WIDTH AND HEIGHT SPECIFIED
var wall_specs = [
    { width: 100, height: 30, fill: 0 },
    { width: 200, height: 30, fill: 50 },
    { width: 50, height: 30, fill: 100 },
    { width: 150, height: 30, fill: 150 }
];

// *** wall_segment ***
// --- inherits from game_object
// spec:
//  game_object spec
// 
// Each wall segment must match up with the other
// wall segments at each end

var wall_segment = function(p, spec) {

    // --- defaults ---

    spec.width = spec.width || 100;
    spec.height = spec.height || 30;

    // obj to return
    var obj = game_object(p, spec);

    obj.get_type = function() {
        return "wall_segment";
    };

    // --- private variables ---

    var alive = true;

    // --- public methods --- 

    // implementing game_object interface
    
    // update is default (move)

    // (flat rect for now)
    obj.draw = function() {
        var pos = obj.get_pos();
        p.shapeMode(obj.mode);
        // all diff colors for testing
        p.fill(spec.fill);
        p.noStroke();
        var w = obj.get_width();
        var h = obj.get_height();
        p.rect(pos.x-w/2, pos.y-h/2, w, h);
    };
    obj.draw_circle = function() {};

    // walls can't die
    obj.is_dead = function() {
        return false;
    };

    return obj;
}
