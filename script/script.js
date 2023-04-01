document.getElementById("login").addEventListener("click", checkInput);


var input = document.getElementById("name");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("login").click();
  }
});

var input = document.getElementById("pass");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("login").click();
  }
});


var date = new Date();
var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();

function checkInput() {
    var username = document.getElementById("name").value;
    var password = document.getElementById("pass").value;


    if (password=="" && username=="") {
        document.getElementById("prompt").className = "text-danger";
        document.getElementById("nmad").className = "text-danger";
        document.getElementById("pmad").className = "text-danger";
        document.getElementById("fpass").style.visibility = "hidden"
        document.getElementById("prompt").innerHTML = "Please Enter your Username and Password";
        console.log("Login Failed at "+current_time+" - User failed to input username and password");
    }

    else if (password==""){
        document.getElementById("prompt").className = "text-danger";
        document.getElementById("pmad").className = "text-danger";
        document.getElementById("nmad").className = "";
        document.getElementById("prompt").innerHTML = "Please Enter your Password";
        console.log("Login Failed at "+current_time+" - User failed to input password");
        document.getElementById("fpass").style.visibility = "visible"
    }

    else if (username==""){
        document.getElementById("nmad").className = "text-danger";
        document.getElementById("pmad").className = "";
        document.getElementById("prompt").className = "text-danger";
        document.getElementById("prompt").innerHTML = "Please Enter your Username";
        console.log("Login Failed at "+current_time+" - User failed to input username");
        document.getElementById("fpass").style.visibility = "hidden"
    }

    else {
        document.getElementById("pmad").className = "text-primary";
        document.getElementById("nmad").className = "text-primary";
        document.getElementById("prompt").className = "text-primary";
        document.getElementById("fpass").style.visibility = "hidden"
        console.log("Username: "+username+"\n")
        console.log("Password: "+password+"\n")
        document.getElementById("prompt").innerHTML = "You are now logged in to our website!"
        console.log("User logged in at "+date);
        window.open('https://www.repair.org', '_blank');
    }

}