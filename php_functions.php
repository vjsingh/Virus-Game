<?php

Header("content-type: application/x-javascript");

function data_uri($file)
{ 
  $contents = file_get_contents($file);
  $base64   = base64_encode($contents);
  return ('data:audio/ogg;base64,' . $base64);
}

?>

var g_soundDataMap =
{
   "cell_fire"          : "<?php echo data_uri('sounds/cell_fire.ogg');?>",
   "cell_infect"        : "<?php echo data_uri('sounds/cell_infect.ogg');?>",
   "macrophage_infect"  : "<?php echo data_uri('sounds/macrophage_infect.ogg');?>",	
   "level_up"		: "<?php echo data_uri('sounds/level_up.ogg');?>",
   "kill"		: "<?php echo data_uri('sounds/kill.ogg');?>",
};


//IMAGES


//var image_list = [];
//var g_infected_cell_images = [];
//var g_empty_cell_images = [];

// to be used in image_manager
all_image_files = {};
<?php
// for each dir and subdir, puts an array of the file paths in that dir
// into all_files with the dir path as the key
// note: dir should have a slash at the end
function add_all_files($dir) {
    echo 'all_image_files["'.$dir.'"] = [];'."\n";
    $dh = opendir($dir);
    while (($file = readdir($dh)) !== false) {
        // if dir, recurse
        if ($file != "." && $file != "..") {
            if (is_dir("$dir$file")) {
                add_all_files("$dir$file/");
            }
            // otherwise add file to corresponding array
            else {
                echo 'all_image_files["'.$dir.'"].push("'."$dir$file".'");';
                echo "\n";
            }
        }
    }
    closedir($dh);
}
add_all_files('images/');


/*
function add_dir_to_arr($dir, $arr) {
        $dh = opendir($dir);
        while (($file = readdir($dh)) !== false) {
                if ($file != "." && $file != "..") {
                        echo $arr. ".push(\"$dir$file\");\n"; 
                }
        }

}
add_dir_to_arr("./images/infectable_cell/", "g_infected_cell_images");
add_dir_to_arr("./images/noninfectable_cell/", "g_empty_cell_images");
// for preloading
add_dir_to_arr("./images/screens/", "image_list");
add_dir_to_arr("./images/", "image_list");
add_dir_to_arr("./images/infectable_cell/", "image_list");
add_dir_to_arr("./images/noninfectable_cell/", "image_list");
 */
?>


