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
