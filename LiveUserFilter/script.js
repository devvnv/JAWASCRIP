//https://randomuser.me/api?results=50

var url = 'https://randomuser.me/api?results=50'

var data = [];


fetch(url)
    .then(function (value) {
        return value.json();
    }).then(function (value) {

        data = value
        displayhtml(value);
    })


function displayhtml(data) {
    var myData = value.results.map(function (value) {
        return `
        <li>
        <img
        src="${value.picture.large}"
        alt="Wells"/> <!--Lagre Image-->
        <div class="user-info">
        <h4>${value.name.first} ${value.name.last}</h4>
        <p>${value.location.city} ${value.location.country}</p>
        </div>
        </li>`
    }).join("");

    document.getElementById("result").innerHTML = myData;

}
 function test(){
  return ``
 }

findTarget()





























