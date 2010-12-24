// *** empty_cell ***
// --- inherits from cell
// spec:
//  cell spec

var empty_cell = function(p, spec) {
    
    // --- defaults ---
    // inherited from cell

    // obj to return
    var obj = cell(p, spec);

    obj.get_type = function() {
        return "empty_cell";
    };

    // --- private variables ---

    // state can be "alive", "infected", or "dead"
    //var state = spec.state || "alive";

    // --- public methods --- 

    // implementing game_object interface
    
    // update is different depending on state
    obj.update = function() {
        obj.move();
        if (obj.get_state() === "alive") {
            // just chill
        }
        else if (obj.get_state() === "infected") {
            // prepare to die
        }
        else if (obj.get_state() === "dead") {
            // explode!!
        }
    };

    // draw makes a cell with a different color depending on state
    // just an outline for empty cell
    // (circle for now)
    obj.draw = function() {
        var pos = obj.get_pos();
        p.shapeMode(obj.mode);

        p.strokeWeight(2);
        p.stroke(0);
        p.noFill();

        if (obj.get_state() === "alive") {
            p.stroke(0);
        }
        else if (obj.get_state() === "infected") {
            p.stroke(150);
        }
        else if (obj.get_state() === "dead") {
            p.fill(0);
        }

        p.ellipse(pos.x, pos.y,
                obj.get_width(), obj.get_height());
    };

    obj.is_dead = function() {
        return obj.get_state() === "dead";
    };

    obj.die = function() {
        obj.set_state("dead") = "dead";
    };

    return obj;
}