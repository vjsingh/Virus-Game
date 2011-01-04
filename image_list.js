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
    "virus1.png"
];

var preload_images = function(sketch) {
    for_each(
        image_list,
        function(name) {
            sketch.imageCache.add("images/"+name);
        }    
    );
};
