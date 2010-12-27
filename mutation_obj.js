// Manages all information about the current state of mutation
// in the game
// Provides a num_status_obj, which is used for rendering

var mutation_obj = function(p) {
	
    // obj to return
    var obj = {};

    // --- private variables ---

	var level = 1;
	var cells_infected = 0;
    var new_mutation = false;
	
	// Shows the probability of getting a mutation
	var bar_status_obj = num_status_obj(p, {
		pos : new p.PVector(150, 20),
		text : "Mutation:",
		num : 0,
		bar : true,
		max : 50
	});
	
	//Shows the curent mutation level
	var level_status_obj = num_status_obj(p, {
		pos : new p.PVector(350, 20),
		text : "Mutation Level:",
		num : 1,
	});
	
	// --- private methods
	
	// Returns bool saying if a mutation should occur
	// takes into account level, cells_infected, and a random probability
	var mutation_occured = function() {
		return Math.random() + ( (cells_infected / 50) / level) > .95;
	};
	
    // --- public methods --- 

	obj.draw = function() {
		bar_status_obj.draw();
		level_status_obj.draw();
	};
	
    // increments the mutation percentage
	obj.infected_cell = function() {
		cells_infected += 1;
		bar_status_obj.incr(1);
        // if a mutation occurs
        if (mutation_occured()) {
            // set the flag
            new_mutation = true;
        }
	};

    // returns true if a new mutation is ready
    obj.has_new_mutation = function() {
        return new_mutation;
    };

    // resets the counters and the flag
    // to be called after a mutation is enacted in the game
    obj.reset_mutation = function() {
		level += 1;
        cells_infected = 0;
        bar_status_obj.set_num(0);
        level_status_obj.incr(1);
        // reset the flag
        new_mutation = false;
    };

	// Returns the current mutation color
	obj.get_color = function() {
		var new_color = p.color(255 - level * 20);
		return new_color < 0 ? 0 : new_color;
	};
	
	obj.get_level = function(n) {
		return level;
	};
	
    return obj;
};
