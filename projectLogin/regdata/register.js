

 function saveData()
 {
     var obj = {
        title: document.getElementById("title").value,
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        password: document.getElementById("password").value,
        confirmPassword: document.getElementById("confirmPassword").value,
        email: document.getElementById("email").value,
         acceptTerms: true

     }

     fetch("http://localhost:4000/accounts/register",{
         method: "POST",
         body : JSON.stringify(obj),
        headers: {
 "Content-type": "application/json; charset=UTF-8"
}
     }).then(y=>y).then(y=> {
         console.log(y);

         window.location.href ="/signindata/loginpage.html";
     })



 }



















































