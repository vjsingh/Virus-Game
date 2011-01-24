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
        if (screen_index <= screens.length-1) {
            screen_index += 1;
            if (screen_index === screens.length-1) {
                next_button.deactivate();
            }
            previous_button.activate();
            return true;
        }
        return false;
    };
    var previous_screen = function() {
        if (screen_index >= 0) {
            screen_index -= 1;
            if (screen_index === 0) {
                previous_button.deactivate();
            }
            next_button.activate();
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
    //  - illustration (obj) 
    //      - width, height - dimensions for the illustration
    //      - draw - function that draws some illustration 
    //              (origin at top left corner)
    //  - img_left - boolean, true if the image/ill should go on the left,
    //              false for the right
    //  (should only have image or illustration)
    //
    var item = function(spec) {
        var obj = {};

        // auto height
        spec.height = spec.height 
            // the 0 here just takes us to the next cond
            || (spec.image ? spec.image.height : 0)
            // the actual default is at the end of this
            || (spec.illustration ? spec.illustration.height : 80);
        spec.width = spec.width || screen_w;
        spec.padding = spec.padding || 10;

        obj.height = function() { return spec.height; };
        
        obj.render = function() {
            var text_x = 0;
            var text_y = 0;
            var text_w = spec.width;

            if (spec.image || spec.illustration) {
                // make adjustments based on either one
                var i = spec.image || spec.illustration;
                text_w -= i.width + spec.padding;
                var img_x = spec.width - i.width;
                if (spec.img_left) {
                    img_x = 0;
                    text_x = i.width + spec.padding;
                }
                // draw either
                if (spec.image) {
                    p.imageMode(p.CORNER);
                    p.image(spec.image, img_x, 0); 
                }
                else {
                    p.pushMatrix();
                    p.translate(img_x, 0);
                    spec.illustration.draw();
                    p.popMatrix();
                }
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
        var color1 = 0xffffff00;
        var color2 = 0xff7f2aff;
        var cimg = image_manager.get_image("infectable_cell_2n.png");

        var s1 = new_screen();
        screens.push(s1);
        s1.add_item(item({
            text: "You've infiltrated the human body's defenses and gotten your virus particle (or virion) into the bloodstream! Here are the cells you may encounter:", 
            height: 45,
            padding: 1,
            illustration: {
                width: 30, height: 30,
                draw: function() {
                    var img = image_manager.get_image("tinyvirus_trans.png");
                    p.fill(color1);
                    p.noStroke();
                    p.ellipse(img.width/2, img.height/2,
                        img.width*.75, img.height*.75);
                    p.imageMode(p.CORNER);
                    p.image(img, 0, 0);
                }
            },
            img_left: false
        }));
        s1.add_item(item({
            title: "Infectable Cells",
            text: "Hit an infectable cell with a virion to infect it. After penetrating the cell wall, the virion will use the cell's machinery to make copies of itself.",
            image: cimg,
            img_left: true
        }));
        s1.add_item(item({
            text: "Press SPACEBAR or click the MOUSE to burst an infected cell and shoot the new virions in the direction of the arrow. Pick which cell to burst using the LEFT and RIGHT arrow keys.", 
            //image: image_manager.get_image("infectable_cell_2n.png"),
            illustration: {
                width: 30, height: 60,
                draw: (function() {
                    var c = cell(p, {
                        pos: new p.PVector(20, 30),
                        width: 30, height: 30,
                        mutation_info: { color: color1 },
                    });
                    c.set_image(cimg);
                    c.set_state("active");
                    return function() {
                        c.draw();
                    };
                }()),
            },
            img_left: false
        }));
        s1.add_item(item({
            title: "Tolerant Cells",
            text: "Some cells can be infected, but will not let your virion replicate. A virion that infects a tolerant cell is as good as dead.",
            image: image_manager.get_image("noninfectable_cell_1n.png"),
            img_left: true
        }));
        s1.add_item(item({
            title: "Resistant Cells",
            text: "Virions can't break through the cell wall of resistant cells - they will just bounce off in the other direction.",
            height: 60,
            image: image_manager.get_image("wallcell_1.png"),
            img_left: false
        }));

        var s2 = new_screen();
        screens.push(s2);
        s2.add_item(item({
            text: "Be careful! The immune system will try to destroy your virus. Here are the enemies you should look out for:",
            height: 30
        }));
        s2.add_item(item({
            title: "Macrophages",
            text: "The immune system's first line of defense. They will absorb any virion that hits them and then signal a B cell to give it information about your virus.",
            height: 80,
            //image: image_manager.get_image("macrophage_1.png"),
            illustration: {
                width: 50, height: 70,
                draw: (function() {
                    var m = floater(p, {
                        pos: new p.PVector(25, 35),
                        width: 50, height: 70,
                        mutation_info: { color: color1 },
                    });
                    m.activate();
                    return function() { 
                        m.draw(); 
                    };
                }())
            },
            img_left: true
        }));
        s2.add_item(item({
            title: "B Cells",
            text: "Once a B cell knows about your virus, it will produce Y-shaped antibodies that will attach to infected cells, marking them for destruction.",
            height: 70,
            //image: image_manager.get_image("bcell_normal.png"),
            illustration: {
                width: 60, height: 60,
                draw: (function() {
                    var b = b_cell(p, {
                        pos: new p.PVector(30, 55),
                        width: 40, height: 40,
                        mutation_info: { color: color1 },
                    });
                    b.set_state("active");
                    b.set_target_angle(-p.PI/2);

                    var a1 = antibody(p, {
                        pos: new p.PVector(40, 17),
                        mutation_info: { color: color1 },
                    });
                    a1.set_target_angle(-p.PI/4);

                    var a2 = antibody(p, {
                        pos: new p.PVector(18, 23),
                        mutation_info: { color: color1 },
                    });
                    a2.set_target_angle(-3*p.PI/4+.2);

                    return function() { 
                        // make a thicker antibody
                        b.set_anti_count(10);
                        b.draw(); 
                        a1.draw();
                        a2.draw();
                    };
                }())
            },
            img_left: false
        }));
        s2.add_item(item({
            title: "Killer T Cells",
            text: "If an infected cell is marked with an antibody, the killer T cell will hunt it down and destroy it, along with all the virions inside!",
            //image: image_manager.get_image("tcell_2.png"),
            illustration: {
                width: 60, height: 60,
                draw: (function() {
                    var tk = tkiller(p, {
                        pos: new p.PVector(30, 30),
                        width: 60, height: 60,
                        mutation_info: { color: color1 },
                    });
                    tk.set_state("active");

                    return function() { tk.draw(); };
                }())
            },
            img_left: true
        }));

        var s3 = new_screen();
        screens.push(s3);
        s3.add_item(item({
            title: "Mutation",
            text: "Luckily, in the process of replicating a virus's genetic material, mistakes are often made, causing the virus to mutate! If a mutation occurs, a new strain of the virus will be created. Every time you infect a cell, the chance of a mutation occurring increases.",
            height: 120,
            padding: 15,
            illustration: {
                width: 90, height: 90,
                draw: (function() {
                    var c1 = cell(p, {
                        pos: new p.PVector(10, 20),
                        width: 30, height: 30,
                        mutation_info: { color: color1 }
                    });
                    c1.set_image(cimg);
                    c1.set_state("infected");
                    var c2 = cell(p, {
                        pos: new p.PVector(70, 80),
                        width: 30, height: 30,
                        mutation_info: { color: color2 }
                    });
                    c2.set_image(cimg);
                    c2.set_state("infected");

                    return function() {
                        c1.draw();
                        c2.draw();
                        p.stroke(255);
                        p.strokeWeight(3);
                        p.line(30, 40, 50, 60);
                        p.line(50, 60, 50, 50);
                        p.line(50, 60, 40, 60);
                    };
                }()),
            },
            img_left: false
        }));
        s3.add_item(item({
            text: "Macrophages, B cells, T cells, and antibodies are created to attack a specific strain of a virus. So when your virus mutates, the new strain will be safe from the old enemies.",
            //image: image_manager.get_image("macrophage_1.png"),
            padding: 15,
            illustration: {
                width: 60, height: 60,
                draw: (function() {
                    var tk = tkiller(p, {
                        pos: new p.PVector(50, 10),
                        mutation_info: { color: color1 },
                    });
                    tk.set_target_angle(-p.PI/4);

                    var c = cell(p, {
                        pos: new p.PVector(10, 40),
                        width: 30, height: 30,
                        mutation_info: { color: color2 }
                    });
                    c.set_image(cimg);
                    c.set_state("infected");

                    var a = antibody(p, {
                        pos: new p.PVector(20, 15),
                        mutation_info: { color: color2 }
                    });
                    a.set_target(c);
                    a.update();

                    return function() {
                        tk.draw();
                        c.draw();
                        a.draw();
                    };
                }()),
            },
            img_left: true
        }));
        s3.add_item(item({
            text: "Each new strain will be represented by a different color. Therefore, an infected cell can only be attacked by enemies of the same color.",
            //image: image_manager.get_image("tcell_2.png"),
            //padding: 15,
            illustration: {
                width: 60, height: 50,
                draw: (function() {
                    var tk = tkiller(p, {
                        pos: new p.PVector(50, 12),
                        mutation_info: { color: color2 },
                    });
                    //tk.set_target_angle(p.PI/4);

                    var c = cell(p, {
                        pos: new p.PVector(15, 40),
                        width: 30, height: 30,
                        mutation_info: { color: color2 }
                    });
                    c.set_image(cimg);
                    c.set_state("infected");

                    tk.set_target(c);
                    tk.update();

                    var a = antibody(p, {
                        pos: new p.PVector(5, 15),
                        mutation_info: { color: color2 }
                    });
                    a.set_target(c);
                    a.update();

                    return function() {
                        tk.draw();
                        c.draw();
                        a.draw();
                    };
                }()),
            },
            img_left: false
        }));
        s3.add_item(item({
            title: "Multiplier Particles",
            text: "Higher mutation levels will give you more points, as will collecting multiplier particles. When you infect a cell, the amount of points you get is multiplied by your multiplier and level.",
            illustration: {
                width: 50, height: 90,
                draw: (function() {
                    var poss = [
                        new p.PVector(10, 10),
                        new p.PVector(27, 25),
                        new p.PVector(20, 45),
                        new p.PVector(35, 50),
                        //new p.PVector(23, 30),
                        new p.PVector(40, 12)
                    ];
                    var ms = [];
                    for_each(poss,
                        function(pos) {
                            ms.push(multiplier(p, { pos: pos }));
                        }
                    );

                    return function() {
                        for_each(ms, function(m) { m.draw(); });
                    };
                }()),
            },
            img_left: true
        }));


    }());


    /*
    var box_w = 370;
    var box_h = 500;
    var box_x = p.width/2 - box_w/2;
    var box_y = p.height/2 - box_h/2;
    */

	// Buttons
    var button_y = p.height/2 + 190;

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
    previous_button.deactivate();

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
