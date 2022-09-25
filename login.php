<?php 
    require "all.php";
    header('Access-Control-Allow-Origin: *');
    $data2=array();
     if($_SERVER["REQUEST_METHOD"] == "POST")

      {
         $userID=$_POST["userid"];
	     $password=$_POST["pwd"];
	     // strrev
	     
	     $conn=DB_connection();
         $query="select * from userinfo where userID={$userID} ";
         $result=$conn->query($query);
         if($result->num_rows>0)
         {  
         	$output=$result->fetch_assoc();
         	$mob=$output["userID"];
         	$pas=$output["password"];
         	$realpsw=strrev($pas);
             if($password!=$realpsw)
             {
                     $data2["res"]="password is wrong";
             }
             else 
             {
                     $data2["res"]= "login succesfully";
                     
             }
         }
         else
         	$data2["res"]="user id not founded";
             echo json_encode($data2);
      }

 ?>
