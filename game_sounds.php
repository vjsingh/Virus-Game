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
   "cell_fire"		: "<?php echo data_uri('sounds/cell_fire.ogg');?>",
   "cell_infect"	: "<?php echo data_uri('sounds/cell_infect.ogg');?>",
};