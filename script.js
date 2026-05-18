let collected = 0;

function startStory(){

  document.getElementById("intro").classList.add("hidden");

  document.getElementById("slide1").classList.remove("hidden");
}

function nextSlide(num){

  document.querySelectorAll(".screen").forEach(screen=>{
    screen.classList.add("hidden");
  });

  document.getElementById("slide"+num).classList.remove("hidden");
}

function showHearts(){

  document.querySelectorAll(".screen").forEach(screen=>{
    screen.classList.add("hidden");
  });

  document.getElementById("heartsGame").classList.remove("hidden");

  startGame();
}

function startGame(){

  let container = document.getElementById("heartContainer");

  let interval = setInterval(()=>{

    let heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💛";

    heart.style.left = Math.random()*90 + "%";

    container.appendChild(heart);

    heart.onclick = ()=>{

      collected++;

      document.getElementById("score").innerHTML =
      "Hearts Collected: " + collected + " / 5";

      heart.remove();

      if(collected >= 5){

        clearInterval(interval);

        nextSlide(3);
      }
    };

    setTimeout(()=>{
      heart.remove();
    },5000);

  },800);
}

function finalSlide(){

  document.querySelectorAll(".screen").forEach(screen=>{
    screen.classList.add("hidden");
  });

  document.getElementById("final").classList.remove("hidden");
}
