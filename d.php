<?php
//Connecting to MySQL Database
$con = mysql_connect("localhost","root","");
if (!$con) {
die('Could not connect: ' . mysql_error());
}
//Select Database
mysql_select_db("dictionary", $con);

$wordfor=$_GET["word"];
//echo "select * FROM list WHERE word like '" .$wordfor. "'</br>";

$sql="SELECT * FROM list WHERE word like '$wordfor"."%'";
//$sql="SELECT * FROM list";

//echo $sql. "</br>";
$result=mysql_query($sql,$con);
echo "<table border=0>";
while($row = mysql_fetch_array($result)){
//echo $row['word'] . "</br>";
$curr_word=$row['word'];
echo "<tr><td>";
echo '<a target="I4" href="http://localhost/od3/dr.php/?selword='.$curr_word. '" method="get">' .$curr_word.'</a>';
echo "</td></tr>";
}
echo "</table>";
//Terminating MySQL Connection
mysql_close($con);
?>