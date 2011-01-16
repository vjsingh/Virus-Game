<?php

Header("content-type: application/x-javascript");

function data_uri($file)
{ 
  $contents = file_get_contents($file);
  $base64   = base64_encode($contents);
  return ('data:audio/ogg;base64,' . $base64);
}

?>
on_server = true;

var g_soundDataMap =
{
   "cell_fire"          : "<?php echo data_uri('sounds/cell_fire.ogg');?>",
   "cell_infect"        : "<?php echo data_uri('sounds/cell_infect.ogg');?>",
};


//IMAGES
var image_list = [];
var g_infected_cell_images = [];
var g_empty_cell_images = [];
<?php
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
?>







