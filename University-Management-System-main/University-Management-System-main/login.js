key = "User123!";
function validate(){
    var userid = document.getElementById("userid").value;
    var password = document.getElementById("password").value;
    if(userid==12002655 && password==key){
        window.open("Home.html");
        return false;
    }
    else{
        alert("Wrong User-Id or Password");
        return true;
    }
}

function changepassword(){
    var newpwd = document.getElementById("newpassword").value;
    var newpwd1 = document.getElementById("newwpasswordrepeat").value;
    if(newpwd == newpwd1){
      alert("Password Changed Successfully");
      key.value = newpwd;
      return false;
    }
    else{
      alert("Error");
    }
  }