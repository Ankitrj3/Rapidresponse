<?php 
require "all.php";
header('Access-Control-Allow-Origin: *');
if($_SERVER["REQUEST_METHOD"] == "POST")
{
	 $result2 = array();
     try
     {
		 $userID=$_POST["userid"];
	     $password=$_POST["pwd"];
	     
	     $hashp=strrev($password);
	     $conn=DB_connection();
	     $query="insert ignore into userinfo (userID,password) values ({$userID},'{$hashp}')";
	     $result=$conn->query($query);
	     if($result===true)
	     {
	     	$last_id = $conn->insert_id;
	     	//echo $last_id;
	     	if($last_id > 0)
	     	{
		     	$result2["status"] = "success";
	     	}
	     	else
	     	{
		     	$result2["status"] = "fail";
	     	}
	     }
	     else
	     {
	     	$result2["status"] = "fail";
		}
     }
     catch(Exception $e)
     {
     	$result2["status"] = "fail";
     }
	 echo json_encode($result2);     
}
else
{    
	echo "no data found";

}
 ?>