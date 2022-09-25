$(document).ready()
{      
	$("#signup_submit").click(function()
		{ console.log("clicked sinup button")
			var userID=$("#user_id").val();
			var password=$("#user_password").val();
			var cpassword=$("#confirm_password").val();
              if(userID.length<=0 )
              {
              	alert("mobile number is empty");
                return;

              }
               if(userID.length!=10)
              {
              	alert("mobile number should be of 10 digit");
              	return;
              }
              if(password.length<=0 )
              {
              	alert("password cant be empty");
              	return;
              }
              if(cpassword.length<=0)
              {
              	alert("confirm password cant be empty");
              	return;
              }
              if(password!=cpassword)
              {
              	alert("password and confirm password should be same");
              	return;
              }
              else
              {
              	var datasend = {
      				"userid":userID,
      				"pwd":password
              	};
              	$.blockUI();
              	$.post("http://localhost/Loginpage/signup.php",datasend,function(result)
              	{
              		if(result["status"]==="fail")
              		{
              			alert("something went wrong try agian ");
              		}
              		else 
                  {
              			alert("account created succesfully")
                    //window.location.replace("http://stackoverflow.com");
                  }
              		$.unblockUI();
              	},"json")
		      }


		});




    $("#login_button").click(function()
      {
          console.log("clicked login button")
          var userID=$("#userid").val();
          var password=$("#password").val();
          
              if(userID.length<=0 )
              {
                alert("mobile number is empty");
                return;

              }
               if(userID.length!=10)
              {
                alert("mobile number should be of 10 digit");
                return;
              }
              if(password.length<=0 )
              {
                alert("password cant be empty");
                return;
              }
                else
              {
                    var datasend = 
                    {
                   "userid":userID,
                   "pwd":password
                    };
              }
                 $.blockUI();
                $.post("http://localhost/Loginpage/login.php",datasend,function(result)
                {
                  
                    alert(result["res"]);
                    $.unblockUI();
                },"json")
});
}