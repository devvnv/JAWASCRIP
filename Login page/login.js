// function validation(){
//     var user = document.getElementById("user").value
//     var pass = document.getElementById("pass").value
//     var compass = document.getElementById("compass").value
//     var email = document.getElementById("email").value
    
//     if(user == ""){
//         document.getElementById("span").innerHTML= "Please Enter Your Name"
//         return false;
//     }
//     else if(pass.length<5){
//         document.getElementById("span").innerHTML= "Please Enter atlist 5 character password"
//         return false;
//     }
  
//     else{
//         document.getElementById("span").innerHTML= ""

//     }
  

//     if(pass ==""){
//         document.getElementById("passs").innerHTML= "Please Enter Your password"
//         return false;
//     }
//     if(pass.length<5){
//         document.getElementById("passs").innerHTML= "Please Enter atlist 5 character password"
//         return false;
//     }
//     if(pass.search(/[0-9]/)==-1){
//         document.getElementById("passs").innerHTML= "Please Enter at list 1 Num"
//         return false;
//     }
//     if(pass.search(/[a-z]/)==-1){
//         document.getElementById("passs").innerHTML= "Please Enter at list 1 Lowercase character"
//         return false;
//     }
//     if(pass.search(/[A-Z]/)==-1){
//         document.getElementById("passs").innerHTML= "Please Enter at list 1 Uppercase character"
//         return false;
//     }
//     if(pass.search(/[!/@/#/$/%/^/&/*]/)==-1){
//         document.getElementById("passs").innerHTML= "Please Enter at list 1 Special character"
//         return false;
//     }
   
//     else{
//         document.getElementById("passs").innerHTML= ""

//     }
//     if(compass==""){
//         document.getElementById("compasss").innerHTML= "Password doesn't match"
//         return false;
//     }
//     if(compass!==pass){
//         document.getElementById("compasss").innerHTML= "Password doesn't match"
//         return false;
//     }
//     if(compass==pass){
//         document.getElementById("compasss").innerHTML= "Password match"
//         document.getElementById("compasss").style.color= "green"
//         return false;
//     }
    


//     if(email==""){
//         document.getElementById("emaill").innerHTML= "Email doesn't exist"
//         return false;
//     }
//     if(email.search(/[@gmail.com/@yahoo.com]/==-1)){
//         document.getElementById("emaill").innerHTML= "Email id @gmail & @yahoo are not allow"
//         return false;
//     }
//     else{
//         document.getElementById("emaill").innerHTML= ""

//     }

// }

// for to type only charater number is not allowe
function myFunction(event) {
    var theEvent = event || window.event;
      var key = theEvent.keyCode || theEvent.which;
        if(key >=65 && key<=122)
        {
           
        }
        else
        {
            theEvent.returnValue = false;
          if (theEvent.preventDefault) theEvent.preventDefault();

        }
}

function limitText(limitField, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
        var ans = "character should be 5-15 length at least"
        document.getElementById("span").innerHTML = ans;
    }
}

function validatePassword() {
    var newPassword = document.getElementById('changePasswordForm').newPassword.value;
    var minNumberofChars = 5;
    var maxNumberofChars = 15;
    var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    alert(newPassword); 
    if(newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars){
        return false;
    }
    if(!regularExpression.test(newPassword)) {
        alert("password should contain atleast one number and one special character");
        return false;
    }
}