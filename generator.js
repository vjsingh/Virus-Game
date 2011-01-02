// *** generator ***
// generates random enemies
// spec:
//		game : an in_game_state
//			Is going to access: (through getters since we're so safe)
//			game_objects - array
//			distance - a num
//			type_to_level - hash from type to level
//			active_cell
//		mutation : a mutation obj, so it can get current mutation color

var make_generator = function(p, spec) {
    // --- defaults ---

    // obj to return
    var obj = {};

    // --- private variables ---
	
	//These will be updated at every call of update()
    var game_objects = null;
	var distance = null;
	var mutation = spec.mutation;
	var game = spec.game;

    // structure that stores the generation settings
    // for each type of object
    // - start = distance after which to start generating
    // - num = how many total on screen
    // - cap = upper limit on num
    // - rate = determines when to increment num
    //          when dist % rate = 0, num increments
    // - make_new = function that takes a pos and returns a new enemy
    var gen_info = {
        "cell": { 
            start: 0, num: 10, cap: 20, rate: 5000,
            make_new: function(en_pos) {
                return cell(p, {
                    pos: en_pos,
                    state: "alive",
					//mutation : mutation
                });
            }
        },
        "wall_cell": {
            start: 0, num: 1, cap: 7, rate: 20000, //non testing value: 1000
            make_new: function(en_pos) {
                return wall_cell(p, { pos: en_pos });
            } 
        },
        "empty_cell": {
            start: 5000, num: 1, cap: 10, rate: 20000,
            make_new: function(en_pos) {
                return empty_cell(p, { pos: en_pos });
            } 
        },
        "floater": {
            start: 0, num: 3, cap: 7, rate: 20000,
            make_new: function(en_pos) {
                return floater(p, { pos: en_pos });
            } 
        },
        "tkiller": {
            start: 1000, num: 1, cap: 5, rate: 20000,
            make_new: function(en_pos) {
                // target will get set later
                return tkiller(p, { 
					pos: en_pos, 
					mutation_info: game.get_mutation_info()
					});
            }
        },
		"multiplier": {
			start:0, num: 10, cap: 20, rate: 20000,
			make_new: function(en_pos) {
				return multiplier(p, { pos : en_pos });
			}
		},
		"b_cell": {
			start:0, num: 1, cap: 1, rate: 99999,
			make_new: function(en_pos) {
				return b_cell(p, { pos : en_pos });
			}
		}
    };

    // list of types of enemies
    var enemy_types = keys(gen_info);
    /*var random_type = function() {
        return random_from(enemy_types);//[p.floor(p.random(
                        //enemy_types.length))];
    };
    */

    // just some wrappers
    var start = function(type) {
        return gen_info[type].start;
    };
    var num = function(type) {
        return gen_info[type].num;
    };
    var cap = function(type) {
        return gen_info[type].cap;
    };
    var rate = function(type) {
        return gen_info[type].rate;
    };
    var make_new = function(type) {
        return gen_info[type].make_new;
    };
    var gen_more = function(type) {
        if (num(type) < cap(type)) {
            gen_info[type].num = num(type)+1;
        }
    };

    // --- public methods --- 
	
	//Should be called every time the game updates
	obj.update = function() {
		//game_objects = game.get_game_objects();
		distance = game.get_distance();

        var enemy_type = random_from(enemy_types);//random_type();
        var num_enemies = count_enemy(enemy_type);

        // if there aren't enough of that enemy on the board
        if (num_enemies < num(enemy_type)
                // and some random factor
                && p.random(100) < 50///2
                // and we are ready to start making this enemy
                && distance >= start(enemy_type)) {

			//Generate random y position
            // TODO change hardcoded numbers
			var enemy_y = p.random(30, p.height-30);
			var enemy_pos = new p.PVector(p.width+30, enemy_y);
			
			var new_enemy = make_new(enemy_type)(enemy_pos);
			assert(new_enemy, "Error in generator.update()");

            // make sure it's not overlapping anything else
            if (is_overlapping(new_enemy)) {
                console.log("overlapped");
                return;
            }
			
			//Add the new enemy to game_objects
            game.add_object(new_enemy);
		}

        // update nums for types based on rate
        for (var i=0; i<enemy_types.length; i++) {
            var type = enemy_types[i];
            if (distance % rate(type) <= 0.1 
                    && distance >= 10) {
                gen_more(type);
                console.log("increased num of "+type+
                        "s to "+num(type));
            }
        }

	};
	
	// --- private methods ---
    
    // returns how many of given enemy there are
    var count_enemy = function(enemy_type) {
        var n = 0;
        game.do_to_type(function(o) { n++; },
                enemy_type, true);
        return n;
    }

    // returns true if the enemy overlaps any game objects
    var is_overlapping = function(enemy) {
        var overlap = false;
        var check_overlap = function(obj) {
            if (game.check_circle_collision(enemy, obj)) {
                overlap = true;
            }
        };
        game.do_to_type(check_overlap, "particle", false);
        game.do_to_type(check_overlap, "cell", false);
        game.do_to_type(check_overlap, "enemy", false);
        game.do_to_type(check_overlap, "wall_segment", false);
        return overlap;
    };
	
    // returns an object:
    //      cell: number of cells on the screen
    //      wall_cell: number of wall_cells
    //      empty_cell: number of empty_cells
    //      tkiller: number of tkillers
    //      floater: number of floaters
	var get_enemies = (function() {
		var total = 0;
		
		// These are the types to check
		//var types = ["cell", "wall_cell", "empty_cell",
         //       "floater", "tkiller"];
		
		//Checks if an element is in an array
		var member = function(arr, elem) {
			return (arr.indexOf(elem) != -1);
		};

        var get_em = function() {
            var enemies = { "cell":0, "wall_cell":0,
                "empty_cell":0, "floater":0, "tkiller":0,
				"multiplier":0, "b_cell":0};

            // increment counter for each object
            var incr = function(o) {
                enemies[o.get_type()] += 1;
            };
            game.do_to_type(incr, "cell", false);
            game.do_to_type(incr, "enemy", false);
        };
            /*for (var type in enemies) {
                if (enemies.hasOwnProperty(type)) {
                    game.do_to_type(
                        function(o) {
                            enemies[type] += 1;
                        },
                        type, true);
                }
            }
            /*for (var i = 0; i < game_objects.length; i++) {
                var lst = game_objects[i];
                for (var j = 0; j < lst.length; j++) {
                    var obj = lst[j];
                    if (member(types, obj.get_type())) {
                        total++;
                    }
                }
            }
            return total;
            */

		return get_em;
    }());

    return obj;
};
