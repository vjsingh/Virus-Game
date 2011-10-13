<?php

Header("content-type: application/x-javascript");

function data_uri($file, $file_type)
{ 
  $contents = file_get_contents($file);
  $base64   = base64_encode($contents);
  //return ('data:audio/ogg;base64,' . $base64);
  return ('data:application/' . $file_type . ';base64,' . $base64);
}

?>

var g_soundDataMap =
{
   "cell_fire"          : "<?php echo data_uri('sounds/cell_fire.ogg', "ogg");?>",
   "cell_infect"        : "<?php echo data_uri('sounds/cell_infect.ogg', "ogg");?>",
   "macrophage_infect"  : "<?php echo data_uri('sounds/macrophage_infect.ogg', "ogg");?>",	
   "level_up"		: "<?php echo data_uri('sounds/level_up.ogg', "ogg");?>",
   "kill"		: "<?php echo data_uri('sounds/kill.ogg', "ogg");?>",
   "buttonmain"		: "<?php echo data_uri('sounds/buttonmain.ogg', "ogg");?>",
   "buttonback"		: "<?php echo data_uri('sounds/buttonback.ogg', "ogg");?>",
   "cell_firemp3"          : "<?php echo data_uri('sounds/cell_fire.mp3', "mp3");?>",
   "cell_infectmp3"        : "<?php echo data_uri('sounds/cell_infect.mp3', "mp3");?>",
   "macrophage_infectmp3"  : "<?php echo data_uri('sounds/macrophage_infect.mp3', "mp3");?>",	
   "level_upmp3"		: "<?php echo data_uri('sounds/level_up.mp3', "mp3");?>",
   "killmp3"		: "<?php echo data_uri('sounds/kill.mp3', "mp3");?>",
   "buttonmainmp3"		: "<?php echo data_uri('sounds/buttonmain.mp3', "mp3");?>",
   "buttonbackmp3"		: "<?php echo data_uri('sounds/buttonback.mp3', "mp3");?>",
};

/*
Not working
var dynamic_div_tag = null;
// Jplayer instances
<?php
for ($i = 0; $i < 1; $i ++) {
 	echo 'dynamic_div_tag = document.createElement("div");'."\n";
 	echo 'dynamic_div_tag.setAttribute("id", "jquery_jplayer_1");'."\n";
 	echo 'dynamic_div_tag.setAttribute("class", "jp-jplayer");'."\n";
} 


?>
*/

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


