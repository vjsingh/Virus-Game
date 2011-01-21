var help_state = function (p, prev_state) {

    var help_image = image_manager.get_image("helpsplash.png");

    // object to return
    var obj = game_state(p);
	obj.set_previous_state(prev_state);
	
    // --- private variables ---
	
    var box_w = 370;
    var box_h = 500;
    var box_x = p.width/2 - box_w/2;
    var box_y = p.height/2 - box_h/2;

	// Buttons
	// Have a rectangle representing their position and
	// a state to go to when pressed
	var back_button = button(p, {
		state : function() { return prev_state; },	
		rect : {
			pos : new p.PVector(box_x+box_w-80, box_y+box_h-30),
			text: "Back"
		}
	});
		
	//Not ordered
	var all_buttons = [ back_button ];
	//var instruction_text = "Luckily for you, Jimmy McSick fell and scraped his knee, but forgot to cover up the wound. Being a strong and pro-active virus particle, you've succesfully broken through the epidermis, and are on a quest to make Jimmy pay for his mistake. \n To succesfully infect the body, you must understand all of the body's defences, and outwit the human immune system. \n The most important thing is that you must always be looking for new body cells to infect. When a virus particle infects a cell, it replicates inside it, producing more virus particles.\n The body won't stand idly by, however. It has sent out some macrophages as its first line of defence. If you infect one of these white cells, you will activate Jimmy's impressive immune system. A B cell will promptly find the macrophage, get the appropriate antigen, and being producing antibodies.\n These antibodies will seek out any body cells which have been infected by a virus particle that they recognize. Beware of this happening, because as soon as an antibody binds to an infected body cell, a killer T cell will seek out the infected cell and destroy it.\n Your only hope against this highly effective system is to harness your incredibly ability to mutate. Every time a virus particle replicates, it changes slightly. With each change comes a small chance for a mutation to occur. The more times you replicate, the greater your chance for a mutation. Upon mutating, the body's current defenses all become useless, and it will have to repeat the process all over again.\n";
    var instruction_text = "You've managed to infiltrate the human body's defenses and get your virus particle into the bloodstream! Now you must infect cells and use them to make more copies of your virus before the immune system wipes you out.\n\nAfter a particle infects a cell, the virus will use the cell's machinery to start making copies of itself. Once the cell is full of new virus particles, press the SPACEBAR or click the MOUSE to kill the cell, causing virus particles to burst through the cell wall towards other cells in the direction the arrow is pointing. You can pick which cell to burst using the LEFT and RIGHT arrow keys.\n\nAim carefully though, because the immune system has sent out macrophages to absorb your particles. If a particle hits a macrophage, it will signal a B-cell, which will start producing antibodies. If an antibody attaches to an infected cell, a T-cell will attack it. If you don't burst the cell in time, the T-cell will kill it, destroying all the particles inside!\n\nLuckily, your virus can mutate and temporarily escape the immune system. Every time the virus replicates, there are errors when copying the virus's genetic material. These errors may cause mutations in the virus. Each time you infect a cell, the virus becomes more and more likely to mutate. Once you mutate, the immune system will not be able to attack you until a macrophage absorbs a virus particle from the new strain.";

    // --- public methods ---
    
    obj.get_type = function() {
        return "help";
    };

    obj.update = function() {
		//do nothing
    };


    obj.render = function() {
        p.pushMatrix();

        p.imageMode(p.CENTER);
        p.image(help_image, p.width/2, p.height/2);

        p.translate(box_x, box_y);

        //p.fill(0);
        //p.rect(0, 0, box_w, box_h);

        p.noStroke();
        p.fill(255);

        //p.textAlign(p.CENTER, p.CENTER);
        //p.textSize(24);
        //p.text("Instructions", box_w/2, 30);

        p.textAlign(p.LEFT, p.CENTER);
        p.textSize(13);
        p.text(instruction_text,
                5, 20, box_w, box_h-50);

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
