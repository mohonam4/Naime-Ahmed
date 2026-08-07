const passwords = {
  1: "naime1",
  2: "naime2",
  3: "naime3",
  4: "Monaireventiseiukbd"
};

const notes = {
  1: "The first step... just like the first day when you slowly became a special part of my life. 💌",

  2: "Distance may separate our places, but it can never separate two hearts that truly care. 🌙❤️",

  3: "Thank you for being my comfort, my happiness, and the person who makes ordinary moments feel special. ✨",

  4: "You finally reached the last door... behind this is a little piece of my heart waiting for you. 🎁❤️"
};

function unlock(level) {

  let input = document.getElementById("pass" + level).value;

  if(input === passwords[level]) {

    document.getElementById("page" + level).style.display = "none";

    if(level === 4) {
      document.getElementById("birthday").style.display = "block";
      hearts();
    } 
    
    else {
      document.getElementById("page" + (level + 1)).style.display = "block";
    }

    alert(notes[level]);

  } 
  
  else {
    alert("Wrong password 😭 Try again");
  }

}


function hearts(){

for(let i = 0; i < 50; i++){

let heart = document.createElement("div");

heart.innerHTML = "❤️";
heart.className = "heart";

heart.style.left = Math.random()*100 + "vw";
heart.style.animationDuration = (2 + Math.random()*3) + "s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000);

}

}