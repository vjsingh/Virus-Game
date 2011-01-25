<?php

// based on http://www.w3schools.com/PHP/php_ajax_database.asp

$num = $_POST["num"];
$uid = $_POST["uid"];
// default num to return
$num = $num ? $num : 10;

$con = mysql_connect('localhost', 'virion', 'virion1')
	or die('Could not connect to ' . mysql_error());
mysql_select_db('high_scores', $con)
	or die('Could not select database. ' . mysql_error());

// Get all from user
if ($uid) {
	$query = "SELECT * FROM scores WHERE userid = $uid ORDER BY score DESC LIMIT 0, $num";
}
// Otherwise get global
else {
	$query = "SELECT * FROM scores ORDER BY score DESC LIMIT 0, $num";
}
$result = mysql_query($query);

$to_return = array(); 

while($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    /*
	echo "<div>";
	echo implode(", ", $row);
	echo "</div>";
     */

    $to_return[] = $row;
}

mysql_close($con);

echo json_encode($to_return);

?>
