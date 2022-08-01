

function saveData()
{
    var obj = {
        email : document.getElementById("email").value,
        password: document.getElementById("password").value,
      
    }

    fetch("http://localhost:4000/accounts/authenticate",{
        body : JSON.stringify(obj),
       headers: {
"Content-type": "application/json; charset=UTF-8",
"Authorization": "Bearer "
} 
    }).then(y=>y.json()).then(y=> {
        console.log(y);

    

        localStorage.setItem("user",JSON.stringify(y.data));
        window.location.href ="index.html";
    })


}

// function loadData()
// {

//     var token = JSON.parse(localStorage.getItem("user"));


// fetch("http://localhost:4000/accounts",{
// method: "GET",

// headers: {
// "Content-type": "application/json; charset=UTF-8",
// "Authorization": "Bearer " + token.jwtToken
// }
// }).then(y=>y.json()).then(y=> {
// console.log(y);


// window.location.href ="index.html";



// });


// }