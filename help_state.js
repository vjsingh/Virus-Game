var help_state = function (p, prev_state) {

    // object to return
    var obj = game_state(p);
	obj.set_previous_state(prev_state);
	
    // --- private variables ---
	
	// Buttons
	// Have a rectangle representing their position and
	// a state to go to when pressed
	var back_button = button(p, {
		state : function() { return prev_state; },	
		rect : {
			pos : new p.PVector(p.width / 2, 3*p.height/4-40),
			width : 100,
			height : 40,
			text: "Back"
		}
	});
		
	//Not ordered
	var all_buttons = [ back_button ];

    // --- public methods ---
    
    obj.get_type = function() {
        return "help";
    };

    obj.update = function() {
		//do nothing
    };

    obj.render = function() {
        p.pushMatrix();

        p.translate(p.width/4, p.height/4);

        p.noStroke();
        p.fill(0);
        p.rect(0, 0, p.width/2, p.height/2);

        p.fill(255);
        p.textAlign(p.LEFT);
        p.text("Instructions...A virus is a small infectious agent that can replicate only inside the living cells of organisms. Most viruses are too small to be seen directly with a light microscope. Viruses infect all types of organisms, from animals and plants to bacteria and archaea.[1] Since the initial discovery of the tobacco mosaic virus by Martinus Beijerinck in 1898,[2] about 5,000 viruses have been described in detail,[3] although there are millions of different types.[4] Viruses are found in almost every ecosystem on Earth and are the most abundant type of biological entity.[5][6] The study of viruses is known as virology, a sub-speciality of microbiology.", 
                15, 10, p.width/2-30, p.height/2 - 50);

        p.popMatrix();
    };
    
	obj.key_pressed = function(k) {
		if (k === 115) { //s
			obj.set_next_state(start_button.get_state());
		}
		else if (k === 104) { //h
			obj.set_next_state(help_button.get_state());
		}
	};
	
	obj.get_all_buttons = function() {
		return all_buttons;
	};
	
    return obj;
};
