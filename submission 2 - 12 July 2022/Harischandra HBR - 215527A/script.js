// const images = ["main1.jpg", "main2.jpg", "main3.jpg"];
// const carousel = document.querySelector("carousel");
// const interval = setInterval(function() {
//     startCarousel();
    
// }, 300);

var slideIndex = 1;

var myTimer;

var slideshowContainer;

var slides = document.getElementsByClassName("mySlides");

function plusSlides(n){
    clearInterval(myTimer);
    if (n < 0){
        
      showSlides(slideIndex -= 1);
    } else {
        slides[slideIndex - 1].className = slides[slideIndex - 1].className.replace(" slide-in", " slide-out");
        
         showSlides(slideIndex += 1); 
         slides[slideIndex - 1].className = slides[slideIndex - 1].className.replace(" slide-out", " slide-in");
    }
    if (n === -1){
      myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
    } else {
      myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
    }
  }

  function showSlides(n){
    var i;
    
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for(i = 0 ; i < slides.length;i++){
        // if(i !== slideIndex - 2){
          slides[i].style.display = "none";
        // }
        
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex - 1].className = slides[slideIndex - 1].className.replace(" slide-out", " slide-in");
    dots[slideIndex-1].className += " active";
    myTimer = setInterval(function(){slides[slideIndex-2].style.display = "none"}, 2000);
  }
  window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
})



// resume = () =>{
//   clearInterval(myTimer);
//   myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
// }