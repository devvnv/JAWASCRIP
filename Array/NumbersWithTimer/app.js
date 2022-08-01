

let counter = 0

setInterval(increment,)
function increment() {
  counter++;
  if (counter < 500) {
    document.getElementById("value").innerHTML = counter;
  } else if (counter == 500) {
    let ans = "500+"
    document.getElementById("value").innerHTML = ans;
  }

}
setInterval(incrementItem2,)
function incrementItem2() {
  if (counter < 1750) {
    document.getElementById("value2").innerHTML = counter;
  } else if (counter == 1750) {
    let ans2 = "1750+"
    document.getElementById("value2").innerHTML = ans2;
  }

}

var set3 = setInterval(incrementItem3,)


function incrementItem3() {
  if (counter < 1500) {
    document.getElementById("value3").innerHTML = counter;
  } else if (counter == 1500) {
    let ans3 = "1500+"
    document.getElementById("value3").innerHTML = ans3;
  }

}
