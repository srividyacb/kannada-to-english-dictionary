<?php

	//Connecting to MySQL Database
     $con = mysql_connect("localhost","root","");
     if (!$con) {
     die('Could not connect: ' . mysql_error());
      }
    //Select Database
     mysql_select_db("dictionary", $con);

	// SQL query
	$selword=$_GET["selword"];
	//$test="hello";
	//echo 'the selected word is ' . $selword. "</br>" ; 
	//$selword;
     //	$strSQL = "SELECT * FROM list WHERE word='$selword'";
    $strSQL = "SELECT * FROM list WHERE word like '$selword"."%'";

   //echo $strSQL ."</br>";
	// Execute the query (the recordset $rs contains the result)
	$result=mysql_query($strSQL,$con);
	//echo $result ."</br>";
	// Loop the recordset $rs
	// Each row will be made into an array ($row) using mysql_fetch_array
	while($row = mysql_fetch_array($result)) {

	   // Write the value of the column FirstName (which is now in the array $row)
	  echo $row['word'] . "</br>";
	  echo $row['meaning']. "</br>";

	  }

	// Close the database connection
	mysql_close();
	?>