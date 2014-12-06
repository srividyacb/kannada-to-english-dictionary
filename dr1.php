<?php

	// Connect to database server
	mysql_connect("localhost", "root", "") or die (mysql_error ());

	// Select database
	mysql_select_db("dictionary") or die(mysql_error());

	// SQL query
	$word=$_GET["word"];
	$strSQL = "SELECT * FROM list WHERE word='$word'";

	// Execute the query (the recordset $rs contains the result)
	$rs = mysql_query($strSQL);
	
	// Loop the recordset $rs
	// Each row will be made into an array ($row) using mysql_fetch_array
	while($row = mysql_fetch_array($rs)) {

	   // Write the value of the column FirstName (which is now in the array $row)
	  echo $row['word'] . "</br>";
	  echo $row['meaning']. "</br>";

	  }

	// Close the database connection
	mysql_close();
	?>