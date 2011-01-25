<?php

// based on http://teamtutorials.com/web-development-tutorials/php-tutorials/inserting-data-into-a-mysql-database-using-php

$score = $_POST['score'];
$level = $_POST['level'];
$name = $_POST['userid'];
$userid = $_POST['userid'];
$date = $_POST['date'];//date('Y-m-d');

mysql_connect('localhost', 'virion', 'virion1')
    or die("Could not connect to " . mysql_error());
mysql_select_db('high_scores');

$query = "INSERT INTO scores VALUES ($score, $level, $name, '$userid', '$date')";

mysql_query($query) or die("Error updating database");

echo "Success! Database updated with ($score, $level, $name, $userid, $date)";

mysql_close();

?>

