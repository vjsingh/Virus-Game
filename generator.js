// *** generator ***
// generates random enemies
// Takes one parameter:
//		game - an in_game
//			Is going to access: (through getters since we're so safe)
//			game_objects - array
//			distance - a num
//			type_to_level - hash from type to level
//			active_cell

var make_generator = function(p, a_game) {
    // --- defaults ---

    // obj to return
    var obj = {};

    // --- private variables ---
	
	var game = a_game;
	//This is static, but is updated in update since when we create
	//generator this method is not yet added to the game state
	//FIX?????
	var type_to_level = null;
	
	//These will be updated at every call of update()
    var game_objects = null;
	var distance = null;

    // --- public methods --- 
	
	//Should be called every time the game updates
	obj.update = function() {
		type_to_level = game.get_type_to_level(); //Should be fixed, is static
		game_objects = game.get_game_objects();
		distance = game.get_distance();
		
		//If total enemies < 10, add a random enemy
		var total_enemies = get_total_enemies();
		if (total_enemies < 10) {
			//For now, 4 enemies: cell, empty_cell, floater, tkiller
			var random_num = p.floor(Math.random() * 4);
			
			//Generate random y position
			var enemy_y = p.floor(Math.random() * p.height);
			var enemy_pos = new p.PVector(distance, enemy_y);
			
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
					new_enemy = floater(p, {
						pos : enemy_pos
					});
					break;
				case 3: 
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
		
		//Set updated game_objects and distance
		//game.set_game_objects(game_objects);
		game.set_distance(distance);
	}
	
	// --- private methods ---
	
	//TODO: Very simplistic for now, should be expanded on later
	// Returns the total number of enemies and cells in the world
	var get_total_enemies = function() {
		var total = 0;
		
		//These are the types to check
		//For now, enemies and cells
		//Could be done by rendering levels, but doesn't seem right
		var types = ["cell", "empty_cell", "floater", "tkiller"];
		
		//Checks if an element is in an array
		function member(arr, elem) {
			return (arr.indexOf(elem) != -1);
		}
		
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
	}

    return obj;
};
