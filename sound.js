// sound_manager
// utility object to play or not play sounds
// settings for sound still stored in settings object
var sound_manager = function() {
    var obj = {};

	var the_swf_path = "./jplayer/";
    // Taken from http://www.storiesinflight.com/html5/audio.html
	
	//g_divs_loaded_init_sounds = function() {
		//console.log("AAAAA initing sounds");
    obj.play_sound = (function() {
        var channel_max = 10;										// number of channels
        audiochannels = new Array();
        for (var a=0;a<channel_max;a++) {									// prepare the channels
            audiochannels[a] = new Array();
            audiochannels[a]['channel'] = //new Audio();						// create a new audio object
            	$("#jquery_jplayer_"+a);
            audiochannels[a]['finished'] = true;							// expected end time for this channel
            
            //var curr_audio_slot = audiochannels[a];
			
        	// call jPlayers constructor for each div
			$("#jquery_jplayer_"+a).jPlayer( {
				swfPath : the_swf_path,
				ready: function () {
					// Do nothing
					/*
			          $(this).jPlayer("setMedia", {
			            : "sounds/heart_loop1.mp3"
			          });
			          //$(this).jPlayer("play");
					*/
					//console.log("ready");
		        },
                /*
                // NOT WORKING
				// Set finished to be true so we can load a new sound
				ended : function() {
                    console.log("Channel " + a + " is finishing");
					//audiochannels[a]['finished'] = true;
                    console.log(curr_audio_slot);
                    curr_audio_slot['finished'] = true;
                    console.log(curr_audio_slot);
				},
                */
				supplied : "mp3, oga",
				oggSupport: true
				//solution : "flash, html"
			});
        }
        return function(s){
            if (g.sound_fx) {
                for (var a = 0; a < audiochannels.length; a++) {
                    console.log("Checking " + a);
                    thistime = new Date();
                    if (audiochannels[a]['finished'] < thistime.getTime()) { 
                        audiochannels[a]['finished'] = thistime.getTime() + document.getElementById(s).duration * 1000 + 50; // + 50 for a safety margin
                        // Audio is encoded as base64
						/*
                        audiochannels[a]['channel'].src = g_soundDataMap[s]; //document.getElementById(s).src;
                        audiochannels[a]['channel'].load();
                        audiochannels[a]['channel'].play();
                        */
						var jplayer_instance = audiochannels[a]['channel'];
						/*
						jplayer_instance.jPlayer( {
							swfPath : the_swf_path,
							ready : function() {
								console.log("ready");
								$(this).jPlayer("setMedia", {
									oga : g_soundDataMap[s]
								});
								console.log("ready");
							}
						})
						*/
                        play_a_sound(jplayer_instance, s);
						//jplayer_instance.jPlayer("setMedia", {oga : g_soundDataMap[s]});
						//jplayer_instance.jPlayer.event.ready = function() {console.log("read");};
						//jplayer_instance.jPlayer("play");                    
						//console.log("Playing: " + s);
						break;
                    }
                }
            }
        }
    }());
	

    var background_music = null;
    // list of objs with props "music" and "name" 
    var all_bg_music = [];
    // keep this updated with names
    var track_names = [ "Sinister", "Loop 2" ];
    // we will only load however many names there are
	var num_bg_music = track_names.length;
    // index for background tracks
    var track_index = Math.floor(Math.random(0, num_bg_music));

	// Plays a random loop from the beginning
    obj.play_background_music = (function() {
		/*
        // Load all the audio loops
        var loop1 = new Audio();
        loop1.src = "sounds/heart_loop1.mp3";
        var loop2 = new Audio();
        loop2.src = "sounds/sinister.mp3";
        var loops = [loop1, loop2];
        for_each(loops, function(l) {l.load(); l.loop = true;});
        */
        
        return function() {
            //obj.stop_background_music();
            set_background_music();
            //background_music.load(); //already loaded
			console.log("Playing bg music");
            if (background_music) {
                background_music.jPlayer("play", 0);//background_music.play();
            }
        };
    }());


    // changes to the next background track
    // and returns its name
    obj.next_track = function() {
        track_index += 1;
        if (track_index >= all_bg_music.length) {
            track_index = 0;
        }
        // pause the old one
        obj.pause_background_music();
        // set the new one
        set_background_music();
        //obj.play_background_music();
        return all_bg_music[track_index].name;
    };
	
    obj.prev_track = function() {
        track_index -= 1;
        if (track_index < 0) {
            track_index = all_bg_music.length-1;
        }
        // pause the old one
        obj.pause_background_music();
        // set the new one
        set_background_music();
        return all_bg_music[track_index].name;
    };

    // sets the background music to the current track index
    var set_background_music = function() {
        background_music = all_bg_music[track_index].music; 
    };

	obj.resume_background_music = function() {
        if (background_music) 
		    background_music.jPlayer("play");
	}

    obj.pause_background_music = function() {
		console.log("Pausing bg music");
        if (background_music) 
            background_music.jPlayer("pause");
    };

    var menu_music = null;
    var button_sounds = null;

    // Really resume menu music, menu music never restarts
    obj.play_menu_music = function() {
		if (g.music) 
            menu_music.jPlayer("play");
    }
    obj.resume_menu_music = function() {
		if (g.music) 
            menu_music.jPlayer("play");
    }
    obj.pause_menu_music = function() {
        menu_music.jPlayer("pause");
    }
    obj.play_button_click = function() {
        if (g.sound_fx)
            play_a_sound(button_sounds, "buttonmain");
    }
    obj.play_button_back = function() {
        if (g.sound_fx)
            play_a_sound(button_sounds, "buttonback");
    }
	
    var play_a_sound = function(jplayer_instance, sound_name) {
        jplayer_instance.jPlayer("setMedia", {
            mp3 : g_soundDataMap[sound_name + "mp3"],
            oga : g_soundDataMap[sound_name]
        });
        //jplayer_instance.jPlayer.event.ready = function() {console.log("read");};
        jplayer_instance.jPlayer("play");                    
    }

	obj.load_sounds = function() {
		// init all bg music
		var all_supplied = "mp3, ogg";
        var init_jplayer = function(name, mp3name, oggname, should_loop) {
			$(name).jPlayer( {
				swfPath : the_swf_path,
				ready: function () {
			          $(this).jPlayer("setMedia", {
				           mp3 : "sounds/"+mp3name,
                           oga : "sounds/"+oggname
				          });
                        //console.log(name + " is ready");
						bg_music_loaded();
				},
				ended : function() { // loop
                    if (should_loop) {
                        $(this).jPlayer("play");
                    }
				},
				supplied : all_supplied
			});
        }

		var init_bg_jplayer = function(num, file_name, oggfn) {
            init_jplayer("#jquery_jplayer_bg_"+num, file_name, oggfn, true)
        }
        /*
        console.log("loading heart loop");
		init_bg_jplayer(0, "heart_loop1.mp3");
        console.log("loaded heart loop");
        */
        console.log("loading sinister");
		init_bg_jplayer(0, "sinister.mp3", "sinister.ogg");
        console.log("loaded sinister");

		init_bg_jplayer(1, "gameloop2.mp3", "gameloop2.ogg");

		for (var i = 0; i < num_bg_music; i++) {
			all_bg_music.push({
                music: $("#jquery_jplayer_bg_"+i),
                name: track_names[i]
            });
		}

        init_jplayer("#jquery_jplayer_menu", "menu_loop.mp3", "menu_loop.ogg", true);
        menu_music = $("#jquery_jplayer_menu");

        init_jplayer("#jquery_jplayer_buttons", "buttonmain.mp3", "buttonmain.ogg", false);
        button_sounds = $("#jquery_jplayer_buttons");

        // set initial track
        g.set_track(track_names[track_index]);
	};

	var num_loaded = 0;
	var max_loaded = num_bg_music + 2 // + 1 for menu music, + 1 for button
	var bg_music_loaded = function() {
		num_loaded++;
	};
	
	obj.sounds_loaded = function() {
		//console.log(num_loaded);
		return num_loaded === max_loaded;
	}
    return obj;
};

// make a global object
var sounds = sound_manager();

// to debug without sounds, use this object
/*
var sounds = {
    sounds_loaded: function() { return true; },
    play_sound: function() {},
    play_background_music: function() {},
    pause_background_music: function() {},
    resume_background_music: function() {},
    load_sounds: function() {},
};
*/



/*
var jplayer = $("#jquery_jplayer_1").jPlayer( {
	ready: function () {
          $(this).jPlayer("setMedia", {
            oga :g_soundDataMap["kill"] // "/sounds/kill.ogg"  
			//mp3 : "sounds/heart_loop1.mp3"
          });
          $(this).jPlayer("play");
		  //asdf_play();
		  console.log("ready");
        },
	supplied : "oga"
});
//$("#jquery_jplayer_1").jPlayer("setMedia", {mp3 : "sounds/heart_loop1.mp3"});
var asdf_play = function(){
	$("#jquery_jplayer_1").jPlayer("play");
};

*/
