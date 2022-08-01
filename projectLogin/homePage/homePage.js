const url = 'http://localhost:4000/accounts'
var token = JSON.parse(localStorage.getItem("user"));
fetch(url,{
    method: "GET",
    
    headers: {
    "Content-type": "application/json; charset=UTF-8",
    "Authorization": "Bearer " + token.jwtToken
    }})
    .then(function(value) {
        return value.json();
    }).then(function(value){
        
            console.log(value);

            if (value.length > 0) {

                var temp = "";  
                value.forEach((itemData) => {
                  temp += "<tr>";
                  temp += "<td>" + itemData.id + "</td>";
                  temp += "<td>" + itemData.title+ "</td>";
                  temp += "<td>" + itemData.firstName + "</td>";
                  temp += "<td>" + itemData.lastName + "</td>";
                  temp += "<td>" + itemData.email + "</td>";
                });
                document.getElementById('table').innerHTML = temp;
              }
            })
