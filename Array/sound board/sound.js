function applause() {
    document.getElementById("applause").play();
 
  }
  function pauseAudio() {
    
    document.querySelectorAll("audio")[0].pause()
    document.querySelectorAll("audio")[1].pause()
    document.querySelectorAll("audio")[2].pause()
    document.querySelectorAll("audio")[3].pause()
    document.querySelectorAll("audio")[4].pause()
    document.querySelectorAll("audio")[5].pause()
   
  }

  function boo() {
    var audio = document.getElementById("boo").play();
  }

  function gasp() {
    var audio = document.getElementById("gasp");
    audio.play();
  }

  function tada() {
    var audio = document.getElementById("tada");
    audio.play()
  }

  function victory() {
    var audio = document.getElementById("victory");
    audio.play();
  }

  function wrong() {
    var audio = document.getElementById("wrong");
    audio.play();
  }