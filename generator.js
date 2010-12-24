// *** generator ***
// generates random enemies
// Takes one parameter:
//		game - an in_game
//			Is going to access: (through getters since we're so safe)
//			game_objects - array
//			distance - a num
//			type_to_level - hash from type to level
//			active_cell

var make_generator = function(p, game) {
    // --- defaults ---

    // obj to return
    var obj = {};

    // --- private variables ---
	
	//These will be updated at every call of update()
    var game_objects = null;
	var distance = null;

    // structure that stores the generation settings
    // for each type of object
    // - start = distance after which to start generating
    // - rate = rate to generate at (num per screen)
    // - make_new = function that takes a pos and returns a new enemy
    var gen_info = {
        "cell": { 
            start: 0, rate: 15,
            make_new: function(en_pos) {
                return cell(p, {
                    pos: en_pos,
                    state: "alive"
                });
            }
        },
        "wall_cell": {
            start: 1000, rate: 5,
            make_new: function(en_pos) {
                return wall_cell(p, { pos: en_pos });
            } 
        },
        "empty_cell": {
            start: 5000, rate: 5,
            make_new: function(en_pos) {
                return empty_cell(p, { pos: en_pos });
            } 
        },
        "floater": {
            start: 3000, rate: 5,
            make_new: function(en_pos) {
                return floater(p, { pos: en_pos });
            } 
        },
        "tkiller": {
            start: 1000, rate: 5,
            make_new: function(en_pos) {
                // target will get set later
                return tkiller(p, { pos: en_pos });
            } 
        }
    };

    // list of types of enemies
    var enemy_types = keys(gen_info);
    var random_type = function() {
        return enemy_types[p.floor(p.random(
                        enemy_types.length))];
    };

    // just some wrappers
    var start = function(type) {
        return gen_info[type].start;
    };
    var rate = function(type) {
        return gen_info[type].rate;
    };
    var make_new = function(type) {
        return gen_info[type].make_new;
    };
    obj.gen_more = function(type, incr) {
        gen_info[type].rate += incr;
    };

    // --- public methods --- 
	
	//Should be called every time the game updates
	obj.update = function() {
		game_objects = game.get_game_objects();
		distance = game.get_distance();

		//If total enemies < 10, add a random enemy
        var enemy_type = random_type();
        var num_enemies = count_enemy(enemy_type);

        if (num_enemies < rate(enemy_type)
                && p.random(100) < 1
                && distance >= start(enemy_type)) {
			//Generate random y position
			var enemy_y = p.random(30, p.height-30);
			var enemy_pos = new p.PVector(p.width+30, enemy_y);
			
			var new_enemy = make_new(enemy_type)(enemy_pos);
			assert(new_enemy, "Error in generator.update()");
			
			//Add the new enemy to game_objects
            game.add_object(new_enemy);
		}
	};
	
	// --- private methods ---
    
    var count_enemy = function(enemy_type) {
        var n = 0;
        game.do_to_type(function(o) { n++; },
                enemy_type, true);
        return n;
    }
	
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
                "empty_cell":0, "floater":0, "tkiller":0 };

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
