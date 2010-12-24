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

    // --- public methods --- 
	
	//Should be called every time the game updates
	obj.update = function() {
		game_objects = game.get_game_objects();
		distance = game.get_distance();

		//If total enemies < 10, add a random enemy
		var total_enemies = get_total_enemies();
		if (total_enemies < 10) {
			//For now, 4 enemies: cell, empty_cell, floater, tkiller
			var random_num = p.floor(Math.random() * 4);
			
			//Generate random y position
			var enemy_y = p.floor(Math.random() * p.height);
			var enemy_pos = new p.PVector(p.width+30, enemy_y);
			
			var new_enemy = null;
			switch (random_num) {
				case 0:
			        new_enemy = cell(p, {
			            pos: enemy_pos,
			            state: "alive"
			        });
					break;
				case 1:
					new_enemy = empty_cell(p, {
						pos : enemy_pos
					});
					break;
				case 2:
					new_enemy = wall_cell(p, {
						pos : enemy_pos
					});
					break;
				case 3:
					new_enemy = floater(p, {
						pos : enemy_pos
					});
					break;
				case 4: 
			        new_enemy = tkiller(p, {
			            pos: enemy_pos,
			            target: game.get_active_cell()
			        });
					break;
			}
			assert(new_enemy != null, "Error in generator.update()");
			
			//Add the new enemy to game_objects
			//game_objects[type_to_level[new_enemy.get_type()]].push(new_enemy);
            game.add_object(new_enemy);
		}
		
        // distance didn't change - jonah
		//Set updated game_objects and distance
		//game.set_game_objects(game_objects);
		//game.set_distance(distance);
	}
	
	// --- private methods ---
	
	//TODO: Very simplistic for now, should be expanded on later
	// Returns the total number of enemies and cells in the world
    // returns an object:
    //      cell: number of cells on the screen
    //      wall_cell: number of wall_cells
    //      empty_cell: number of empty_cells
    //      tkiller: number of tkillers
    //      floater: number of floaters
	var get_total_enemies = (function() {
		var total = 0;
		
        // USE A CLOSURE SO WE DONT HAVE TO MAKE THIS ARRAY EVERY TIME
		//These are the types to check
		//For now, enemies and cells
		//Could be done by rendering levels, but doesn't seem right
		var types = ["cell", "wall_cell", "empty_cell", "floater", "tkiller"];
		
		//Checks if an element is in an array
		var member = function(arr, elem) {
			return (arr.indexOf(elem) != -1);
		};

        var get_enemies = function() {
            for (var i = 0; i < game_objects.length; i++) {
                var lst = game_objects[i];
                for (var j = 0; j < lst.length; j++) {
                    var obj = lst[j];
                    if (member(types, obj.get_type())) {
                        total++;
                    }
                }
            }
            return total;
        };

		return get_enemies;
    }());

    return obj;
};