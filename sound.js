// sound_manager
// utility object to play or not play sounds
// settings for sound still stored in settings object
var sound_manager = function() {
    var obj = {};

	var the_swf_path = "./jplayer/";
    // Taken from http://www.storiesinflight.com/html5/audio.html
    obj.play_sound = (function() {
        var channel_max = 10;										// number of channels
        audiochannels = new Array();
        for (a=0;a<channel_max;a++) {									// prepare the channels
            audiochannels[a] = new Array();
            audiochannels[a]['channel'] = //new Audio();						// create a new audio object
            	$("#jquery_jplayer_"+a);
            audiochannels[a]['finished'] = true;							// expected end time for this channel
            
			
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
				// Set finished to be true so we can load a new sound
				ended : function() {
					audiochannels[a]['finished'] = true;
				},
				supplied : "oga",
				oggSupport: true
				//solution : "flash"
			});
        }
        return function(s){
            if (g.sound_fx) {
                for (a = 0; a < audiochannels.length; a++) {
                    //thistime = new Date();
                    if (audiochannels[a]['finished']) { //< thistime.getTime()) { // is this channel finished?
                        audiochannels[a]['finished'] = false; // thistime.getTime() + document.getElementById(s).duration * 1000 + 50; // + 50 for a safety margin
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
						jplayer_instance.jPlayer("setMedia", {oga : g_soundDataMap[s]});
						//jplayer_instance.jPlayer.event.ready = function() {console.log("read");};
						jplayer_instance.jPlayer("play");                    
						//console.log("Playing: " + s);
						break;
                    }
                }
            }
        }
    }());

    var background_music = null;
    var all_bg_music = [];

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
            background_music = random_from(all_bg_music);
            //background_music.load(); //already loaded
			console.log("Playing bg music");
            background_music.jPlayer("play", 0);//background_music.play();
        };
    }());
	
	obj.resume_background_music = function() {
		background_music.jPlayer("play");
	}

    obj.pause_background_music = function() {
		console.log("Pausing bg music");
        background_music.jPlayer("pause");
    };
	
	var num_bg_music = 2;
	obj.load_sounds = function() {
		// init all bg music
		var all_supplied = "mp3";
		var init_bg_jplayer = function(num, file_name) {
			$("#jquery_jplayer_bg_"+num).jPlayer( {
				swfPath : the_swf_path,
				ready: function () {
			          $(this).jPlayer("setMedia", {
				           mp3 : "sounds/"+file_name
				          });
						bg_music_loaded();
				},
				ended : function() { // loop
					$(this).jPlayer("play");
				},
				supplied : all_supplied
			});
		};
        console.log("loading heart loop");
		init_bg_jplayer(0, "heart_loop1.mp3");
        console.log("loaded heart loop");
        console.log("loading sinister");
		init_bg_jplayer(1, "sinister.mp3");
        console.log("loaded sinister");

		for (var i = 0; i < num_bg_music; i++) {
			all_bg_music.push($("#jquery_jplayer_bg_"+i));
		}
	};

	var num_loaded = 0;
	var max_loaded = num_bg_music;
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
//var sounds = sound_manager();

// to debug without sounds, use this object
var sounds = {
    sounds_loaded: function() { return true; },
    play_sound: function() {},
    play_background_music: function() {},
    pause_background_music: function() {},
    resume_background_music: function() {},
    load_sounds: function() {},
};



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
