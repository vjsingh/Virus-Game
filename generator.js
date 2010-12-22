// *** generator ***
// generates random enemies
// Takes one parameter:
//		game - an in_game_state
//			Is going to access: (through getters since we're so safe)
//			game_objects - array
//			distance - a num
//			type_to_level - hash from type to level
//			active_cell

var generator = function(p, game) {
    
    // --- defaults ---

    // obj to return
    var obj = {};

    // --- private variables ---
	
	var game_state = game;
	var type_to_level = game.get_type_to_Level() //should be static
	
	//These will be updated at every call of update()
    var game_objects = null;
	var distance = null;

    // --- public methods --- 
	
	//Should be called every time the game updates
	obj.update = function() {
		game_objects = game_state.get_game_objects();
		distance = game_state.get_distance();
		
		//If total enemies < 10, add a random enemy
		var total_enemies = get_total_enemies();
		if (total_enemies < 10) {
			//For now, 4 enemies: cell, empty_cell, floater, tkiller
			var random_num = Math.Floor(Math.random() * 4);
			
			//Generate random y position
			var enemy_y = Math.Floor(Math.random() * p.height);
			var enemy_pos = new p.PVector(distance, enemy_y);
			
			var new_enemy = null;
			switch (random_num) {
				case 0:
			        new_enemy = cell(p, {
			            pos: enemy_pos,
			            state: "active"
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
			        t1 = tkiller(p, {
			            pos: enemy_pos,
			            target: game_state.get_active_cell()
			        });
					break;
			}
			assert(new_enemy != null, "Error in generator.update()");
			
			//Add the new enemy to game_objects
			game_objects[type_to_level[new_enemy.get_type()]].push(new_enemy);
		}
		
		//Set updated game_objects and distance
		game_state.set_game_objects(game_objects);
		game_state.set_distance(distance);
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
			for (var j = 0; j < game_objects.length; j++) {
				var obj = lst[j];
				if (member(types, obj.get_type())) {
					total++;
				}
			}
		}
		return total;
	}

    return obj;
}
