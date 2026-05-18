function startWebsite(){

  document.getElementById("intro").classList.add("hidden");

  document.getElementById("slide1").classList.remove("hidden");

  document.getElementById("bgMusic").play();
}

function showSlide2(){

  document.getElementById("slide1").classList.add("hidden");

  document.getElementById("slide2").classList.remove("hidden");
}

function showSlide3(){

  document.getElementById("slide2").classList.add("hidden");

  document.getElementById("slide3").classList.remove("hidden");
}

function showFinalSlide(){

  document.getElementById("slide3").classList.add("hidden");

  document.getElementById("finalSlide").classList.remove("hidden");
}