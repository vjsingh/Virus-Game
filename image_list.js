// list of images to preload
// all paths should be from the images/ dir
// KEEP THIS UP TO DATE
var image_list = [
    "jback1.png",
    "cellwall1.png",
    "infectable1.png",
    "infectable2.png",
    "infectable3.png",
    "tcell1.png",
    "tcell2.png",
    "tcell3.png",
    "virus1.png",
	"screens/bullet_listcell.png",
	"screens/header.png",
	"screens/loading.png",
	"screens/newgame_listcell.png",
	"screens/settings.png",
	"screens/mainscreenbase.png"
];

var preload_images = function(sketch, indicate_loaded) {
    for_each(
        image_list,
        function(name) {
            sketch.imageCache.add("images/"+name);
            // WHAT'S THIS?
			for (var i = 0; i < 999; i++) {
				console.log("a");
			}
			indicate_loaded();
        }    
    );
};

var TOTAL_NUM_OF_IMAGES = (function() {return image_list.length;}());
