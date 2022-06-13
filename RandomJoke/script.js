const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn');

//https://icanhazdadjoke.com

generateJoke()



fetch('https://icanhazdadjoke.com')
      .then(function(value) {
        return value.json();
      }).then(function(value) {
          console.log(value)
        })

