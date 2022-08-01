

 var data = document.forms["d"];
 var obj = {};
 console.log(data);

function saveData(event)
{
 event.preventDefault();

 for(let i=0;i<data.length;i++)
 {
     if(data.elements[i].type !="submit")
     {
         if(data.elements[i].type !="checkbox")
         {
     obj[data.elements[i].id] = data.elements[i].value;
         }
         else
         {
             obj[data.elements[i].name] = data.elements[i].checked;
         }


     }
 }
}
 console.log(obj);

 axios.post("http://localhost:4000/accounts/register",obj)
   
 .then(y=> {
     console.log(y)
 })




function nextPage(){
   window.location.href ="/LogIn/LogIn.html";
}



// WE CAN ALSO USE THIS  STATIC OBJ MTD
// function saveData()
// {
//     var obj = {
//        title: document.getElementById("title").value,
//        firstName: document.getElementById("firstName").value,
//        lastName: document.getElementById("lastName").value,
//        password: document.getElementById("password").value,
//        confirmPassword: document.getElementById("confirmPassword").value,
//        email: document.getElementById("email").value,
//         acceptTerms: true

//     }

//     fetch("http://localhost:4000/accounts/register",{
//         method: "POST",
//         body : JSON.stringify(obj),
//         headers: {
//         "Content-type": "application/json; charset=UTF-8"
// }
//     }).then(y=>y).then(y=> {
//         console.log(y);

//         window.location.href ="/signindata/loginpage.html";
//     })



// }

