let clickedHearts = [];
let collected = 0;

/* Typing Effect */

function typeWriter(element,text,speed=40){

  element.innerHTML="";

  let i=0;

  let timer=setInterval(()=>{

    if(i<text.length){

      element.innerHTML += text.charAt(i);

      i++;

    }else{

      clearInterval(timer);

    }

  },speed);

}

/* Start Website */

function startStory(){

  document.getElementById("intro").classList.add("hidden");
let music = document.getElementById("bgMusic");

music.volume = 0.5;

music.play().catch(error => {
  console.log("Autoplay blocked");
});  
  let slide1=document.getElementById("slide1");

  slide1.classList.remove("hidden");

  let heading=slide1.querySelector("h2");

  typeWriter(
    heading,
    "Meeting you was like listening to a song for the first time and knowing it would become my favorite..."
  );

}

/* Next Slide */

function nextSlide(num){

  document.querySelectorAll(".screen").forEach(screen=>{

    screen.classList.add("hidden");

  });

  document.getElementById("slide"+num).classList.remove("hidden");

}

/* Hearts Game */

function showHearts(){

  document.querySelectorAll(".screen").forEach(screen=>{

    screen.classList.add("hidden");

  });

  document.getElementById("heartsGame").classList.remove("hidden");

  startGame();

}

function startGame(){

  let container=document.getElementById("heartContainer");

  let interval=setInterval(()=>{

    let heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="💛";

    heart.style.left=Math.random()*90+"%";

    container.appendChild(heart);

    heart.onclick=()=>{

      collected++;

      document.getElementById("score").innerHTML=
      "Hearts Collected: "+collected+" / 5";

      heart.remove();

      if(collected>=5){

        clearInterval(interval);

        nextSlide(3);

      }

    };

    setTimeout(()=>{

      heart.remove();

    },5000);

  },800);

}

/* Final Emotional Slide */

function finalSlide(){

  document.querySelectorAll(".screen").forEach(screen=>{

    screen.classList.add("hidden");

  });

  document.getElementById("final").classList.remove("hidden");

}

/* Open Gift Section */

function openGiftSection(){

  document.querySelectorAll(".screen").forEach(screen=>{

    screen.classList.add("hidden");

  });

  document.getElementById("giftIntro").classList.remove("hidden");

}

/* Gift Unlock Game */

let starsCollected = 0;

function startGiftGame(){

  document.querySelectorAll(".screen").forEach(screen=>{

    screen.classList.add("hidden");

  });

  document.getElementById("giftGame").classList.remove("hidden");

  let container=document.getElementById("giftContainer");

  let interval=setInterval(()=>{

    let star=document.createElement("div");

    star.classList.add("star");

    star.innerHTML="💫";

    star.style.left=Math.random()*90+"%";

    container.appendChild(star);

    star.onclick=()=>{

      starsCollected++;

      document.getElementById("giftScore").innerHTML=
      "Stars Collected: "+starsCollected+" / 5";

      star.remove();

      if(starsCollected>=5){

        clearInterval(interval);

        showGift1();

      }

    };

    setTimeout(()=>{

      star.remove();

    },5000);

  },800);

}

/* Show Gift 1 */

function showGift1(){

  document.querySelectorAll(".screen").forEach(screen=>{

    screen.classList.add("hidden");

  });

  document.getElementById("gift1").classList.remove("hidden");

}

/* Show Gift 2 */

function showGift2(){

  document.querySelectorAll(".screen").forEach(screen=>{

    screen.classList.add("hidden");

  });

  document.getElementById("gift2").classList.remove("hidden");

  createFireworks();

}

/* Fireworks */

function createFireworks(){

  for(let i=0;i<20;i++){

    let firework=document.createElement("div");

    firework.classList.add("firework");

    firework.style.left=Math.random()*100+"%";

    firework.style.top=Math.random()*100+"%";

    document.body.appendChild(firework);

    setTimeout(()=>{

      firework.remove();

    },1000);

  }

}

/* Secret Message */

function showSecret(){

  document.getElementById("secretMessage")
  .classList.remove("hidden");

}

/* Anime Rain Effect */

function createRain(){

  let rain=document.getElementById("rain");

  for(let i=0;i<80;i++){

    let drop=document.createElement("div");

    drop.classList.add("drop");

    drop.style.left=Math.random()*100+"%";

    drop.style.animationDuration=
    (Math.random()*1+0.5)+"s";

    drop.style.opacity=Math.random();

    rain.appendChild(drop);

  }

}
window.onload = function(){

  try{

    createRain();

  }catch(error){

    console.log("Rain skipped");

  }

};
function showHeartWall(){

  document.querySelectorAll(".screen").forEach(screen=>{
    screen.classList.add("hidden");
  });

  const wall = document.getElementById("heartWall");

  if(wall){
    wall.classList.remove("hidden");
  }else{
    alert("Heart Wall not found");
  }

}
function showHeartMsg(num){

  const msg = document.getElementById("heartMessage");

  const messages = {

    1:"You are beautiful. You deserve all the love in the world. ❤️",

    2:"You are a blessing to the people around you. ✨",

    3:"You are the kind of person the world needs more of. 🌙",

    4:"You are stronger than you think. 💪",

    5:"You are special, today and every day. 💖",

    6:"Your smile has the power to heal. And most importantly, you deserve to see yourself the way others see you. ❤️"

  };

  msg.innerHTML = messages[num];

  if(!clickedHearts.includes(num)){
      clickedHearts.push(num);
  }

  if(clickedHearts.length === 6){

      document.getElementById("allHeartsDone")
      .classList.remove("hidden");

      document.getElementById("finalBtn")
      .classList.remove("hidden");

  }

}
function showSecret(){

  alert("showSecret is working");

  document.querySelectorAll(".screen").forEach(screen=>{
    screen.classList.add("hidden");
  });

  document.getElementById("motivation")
  .classList.remove("hidden");

}
function showFinale(){

  document.querySelectorAll(".screen").forEach(screen=>{
    screen.classList.add("hidden");
  });

  document.getElementById("finale")
  .classList.remove("hidden");

}
