var help_state = function (p, prev_state) {

    var help_image = image_manager.get_image("helpsplash.png");

    // object to return
    var obj = game_state(p);
	obj.set_previous_state(prev_state);
	
    // --- private variables ---

    var screens = [];
    var screen_w = help_image.width - 180;
    var screen_h = help_image.height - 200;
    var screen_pos = new p.PVector(p.width/2, p.height/2-15);

    var screen_index = 0;
    var cur_screen = function() {
        return screens[screen_index];
    };
    var next_screen = function() {
        if (! screen_index + 1 >= screens.length) {
            screen_index += 1;
            return true;
        }
        return false;
    };
    var previous_screen = function() {
        if (! screen_index <= 0) {
            screen_index -= 1;
            return true;
        }
        return false;
    };

    // a screen is a panel that goes in the screens array
    // it displays one or more item
    // spec:
    //  - pos: PVector representing the center of the screen
    //  - width
    //  - height
    var screen = function(spec) {
        var obj = {};
        var items = [];
        obj.add_item = function(item) {
            items.push(item);
        };

        obj.render = function() {
            p.pushMatrix();

            p.translate(spec.pos.x-spec.width/2, spec.pos.y-spec.height/2);

            // debugging
            /*
            p.noFill();
            p.stroke(255);
            p.rect(0, 0, spec.width, spec.height);
            */

            // translate and render each item
            var padding = 15;
            for_each(
                items, 
                function(item) {
                    item.render();
                    p.translate(0, item.height()+padding);
                }
            );

            p.popMatrix();
        }; 

        return obj;
    };

    var new_screen = function() {
        return screen({
            pos: screen_pos,
            width: screen_w,
            height: screen_h
        });
    };

    // item displays text and an image as part of a screen
    // spec:
    //  - width 
    //  - height
    //  - text - the text to display
    //  - title - the name of this item (optional)
    //  - image - image to display
    //  - img_left - boolean, true if the image should go on the left,
    //              false for the right
    var item = function(spec) {
        var obj = {};

        // auto height
        spec.height = spec.height 
            || spec.image ? spec.image.height : 80;
        spec.width = spec.width || screen_w;

        obj.height = function() { return spec.height; };
        
        obj.render = function() {
            var padding = 10;
            var text_x = 0;
            var text_y = 0;
            var text_w = spec.width;

            if (spec.image) {
                text_w -= spec.image.width + padding;
                var img_x = spec.width - spec.image.width;
                if (spec.img_left) {
                    img_x = 0;
                    text_x = spec.image.width + padding;
                }

                p.imageMode(p.CORNER);
                p.image(spec.image, img_x, 0); 
            }

            if (spec.title) {
                p.textSize(18);
                p.textAlign(p.LEFT, p.TOP);
                p.fill(255);
                p.text(spec.title, text_x, 0); 
                text_y += p.textAscent();
            }
            p.textSize(14);
            p.textAlign(p.LEFT, p.TOP);
            p.fill(255);
            p.text(spec.text, text_x, text_y, text_w, spec.height-text_y); 
        };

        return obj;
    };
	
    // init the help screens
    // eval'd immediately
    var init_screens = (function() {
        var s1 = new_screen();
        screens.push(s1);
        s1.add_item(item({
            text: "This is me testing a cell.blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
            title: "Cell",
            image: image_manager.get_image("infectable_cell_2n.png"),
            img_left: true
        }));
        s1.add_item(item({
            text: "This is me testing a cell.blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
            image: image_manager.get_image("infectable_cell_2n.png"),
            img_left: false
        }));
        s1.add_item(item({
            text: "Now there is no image.blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
        }));
        var s2 = new_screen();
        screens.push(s2);
        s2.add_item(item({
            text: "This is me testing a cell.blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
            image: image_manager.get_image("infectable_cell_2n.png"),
            img_left: false
        }));
        s2.add_item(item({
            text: "Now there is no image.blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
        }));
        s2.add_item(item({
            text: "This is me testing a cell.blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
            title: "Cell",
            image: image_manager.get_image("infectable_cell_2n.png"),
            img_left: true
        }));


    }());


    var box_w = 370;
    var box_h = 500;
    var box_x = p.width/2 - box_w/2;
    var box_y = p.height/2 - box_h/2;

	// Buttons
    var button_y = p.height/2 + 180;

	var back_button = button(p, {
		state : function() { return prev_state; },	
		rect : {
			pos : new p.PVector(p.width/2, button_y),  //box_x+box_w-80, box_y+box_h-30),
			text: "Back"
		}
	});

    var next_button = button(p, {
        state: function() { 
            next_screen();
            return obj;
        },
        rect: {
            pos: new p.PVector(p.width/2+120, button_y),
            text: "Next"
        }
    });

    var previous_button = button(p, {
        state: function() { 
            previous_screen();
            return obj;
        },
        rect: {
            pos: new p.PVector(p.width/2-120, button_y),
            text: "Previous"
        }
    });
		
	//Not ordered
	var all_buttons = [ previous_button, back_button, next_button ];
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
        //p.pushMatrix();

        p.imageMode(p.CENTER);
        p.image(help_image, p.width/2, p.height/2);

        cur_screen().render(); 

        //p.translate(box_x, box_y);

        //p.fill(0);
        //p.rect(0, 0, box_w, box_h);

        //p.noStroke();
        //p.fill(255);

        //p.textAlign(p.CENTER, p.CENTER);
        //p.textSize(24);
        //p.text("Instructions", box_w/2, 30);

        //p.textAlign(p.LEFT, p.CENTER);
        //p.textSize(13);
        //p.text(instruction_text,
                //5, 20, box_w, box_h-50);

        //p.popMatrix();
    };
    
	obj.key_pressed = function(k) {
		if (k === 104) { //h
			obj.set_next_state(help_button.get_state());
		}
	};
	
	obj.get_all_buttons = function() {
		return all_buttons;
	};
	
    return obj;
};
