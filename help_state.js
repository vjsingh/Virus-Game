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
	var instruction_text = "Luckily for you, Jimmy McSick fell and scraped his knee, but forgot to cover up the wound. Being a strong and pro-active virus particle, you've succesfully broken through the epedermis, and are on a quest to make Jimmy pay for his mistake.\
 To succesfully infect the body, you must understand all of the body's defences, and outwit the human immune system. \n\
 The most important thing is that you must always be looking for new body cells to infect. When a virus particle infects a cell, it replicates inside it, producing more virus particles.\n\
 The body won't stand idly by, however. It has sent out some macrophages as its first line of defence. If you infect one of these white cells, you will activate Jimmy's impressive immune system. A B cell will promptly find the macrophage, get the appropriate antigen, and being producing antibodies.\n\
 These antibodies will seek out any body cells which have been infected by a virus particle that they recognize. Beware of this happening, because as soon as an antibody binds to an infected body cell, a killer T cell will seek out the infected cell and destroy it.\n\
 Your only hope against this highly effective system is to harness your incredibly ability to mutate. Every time a virus particle replicates, it changes slightly. With each change comes a small chance for a mutation to occur. The more times you replicate, the greater your chance for a mutation. Upon mutating, the body's current defenses all become useless, and it will have to repeat the process all over again.\n\
 ";

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
        p.text(instruction_text,
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
