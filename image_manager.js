// image_manager preloads and holds all the images used in the game

var make_image_manager = function() {

    // obj to return
    var obj = [];

    // --- private variables --- 

    // this will be counted in preloading
    var num_images = 0;
    
    // object to hold all arrays of image paths
    // and the dir name that they come from
    // dir should be name after "images/" and must end in '/'
    var all_images = {
        infectable_cell : { dir : "infectable_cell/" },
        empty_cell : { dir : "noninfectable_cell/" },
        background : { dir : "background_objects/" },
        screens : { dir : "screens/" },
        wall_segments : { dir : "wall_segments/" },
		macrophage : {dir : "macrophage_animation/"},
        // catches all images in images/
        other : { dir : "" },
    };
    
    // add "arr" property to each image
    for_each(
        keys(all_images),
        function(key) {
            all_images[key].images = [];
        }
    );

    // filter out non-images from global image file list
    var image_types = ["png", "jpg", "gif"];
    for_each(
        keys(all_image_files),
        function(key) {
            all_image_files[key] = all_image_files[key].filter(
                function(name) {
                    return member(image_types,
                        name.substring(name.lastIndexOf('.')+1));
                }
            );
        }
    );

    // --- public methods ---

    // returns all the image objects of a given type
    // if preloading and initing is done
    obj.get_images = function(type) {
        if (!all_images[type]) {
            console.error("Invalid image type: "+type);
        }
		//for_each(all_images[type], console.log()
        return all_images[type].images;
    };

    // finds and returns the first image with the given name
    // (no path necessary)
    obj.get_image = function(name) {
        var to_return;
        for_each(
            keys(all_images),
            function(key) {
                for_each(
                    all_images[key].images,
                    function(img_obj) {
                        if (name === img_obj.path.substring(
                                img_obj.path.lastIndexOf('/')+1)) {
                            to_return = img_obj.image;
                        }
                    }
                );
            }
        );
        if (!to_return) {
            console.error("Invalid image name: "+name);
        }
        return to_return;
    };

    // preloads all the images
    obj.preload_images = function() {
        console.log("preloading images");
        for_each_image(
            function(path) {
                // let processing load it in the cache
                sketch.imageCache.add(path);
                // count it
                num_images += 1;
                console.log("loading "+path);
            }
        );
    };

    // DO NOT CALL BEFORE CALLING PRELOAD
    obj.num_loaded = function() {
        return num_images - sketch.imageCache.pending;
    };

    // DO NOT CALL BEFORE CALLING PRELOAD
    obj.num_images = function() {
        return num_images;
    };

    // DO NOT CALL BEFORE CALLING PRELOAD
    obj.is_done_preloading = function() {
        return !sketch.imageCache.pending;
    };

    // DO NOT CALL BEFORE PRELOADING IS DONE
    // should be called after preloading is done
    // to make the image objects
    // note: must be passed a processing instance p
    obj.init_images = function(p) {
        console.log("initing images");
        for_each_image(
            function(img_path, type) {
                // make an actual image object for each preloaded image
                all_images[type].images.push({
                    path: img_path,
                    image: p.loadImage(img_path),
                });
            }
        );
    };

    // --- private methods ---
    
    // gets array of paths from the object populated by the php function
    var files_in_dir = function(dir_path) {
        if (!all_image_files[dir_path]) {
            console.error("Invalid dir: "+dir_path);
        }
        return all_image_files[dir_path];
    };

    // applies f to each image path
    // f takes a path and an image type (key)
    var for_each_image = function(f) {
        // for each type of image
        for_each(
            keys(all_images),
            function(key) {
                // for each image in the dir
                for_each(
                    files_in_dir("images/"+all_images[key].dir),
                    function(path) {
                        f(path, key);
                    }
                );
            }
        );
    };

    return obj;
};

// make a global instance
var image_manager = make_image_manager();
