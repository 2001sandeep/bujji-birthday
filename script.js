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

/* Final Slide */

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

/* Start Gift Game */

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

/function showGift2(){

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
* Show Gift 2 */



/* Anime Rain */

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

createRain();
/* Secret Message */

function showSecret(){

  document.getElementById("secretMessage")
  .classList.remove("hidden");

}
