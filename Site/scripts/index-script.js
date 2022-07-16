// const images = ["main1.jpg", "main2.jpg", "main3.jpg"];
// const carousel = document.querySelector("carousel");
// const interval = setInterval(function() {
//     startCarousel();
    
// }, 300);

var slideIndex = 1;

var myTimer;

var slideshowContainer;

var slides = document.getElementsByClassName("mySlides");

var stars = document.getElementsByClassName("S");

var star1_selected = true;
var star2_selected = true;
var star3_selected = true;
var star4_selected = true;
var star5_selected = false;

var star_selected_array = [true, true, true, true, false];

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
    // myTimer = setInterval(function(){slides[slideIndex-2].style.display = "none"}, 2000);
  }
  window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
})


function Star_click(n){

  // if(n==1){
  //     var starID = "star1";
  //     var star_selected = star1_selected;
  //     if(star_selected){
  //       document.getElementById(starID).className="fa-regular fa-star";
  //       document.getElementById(starID).style.color="black";
  //       star1_selected = false;
        
  //     }
  //     else{
  //       document.getElementById(starID).className="fa-solid fa-star";
  //       document.getElementById(starID).style.color="#e8c700";
  //       star1_selected = true;
  //     }
  // }else if(n==2){
  //   var starID = "star2";
  //   var star_selected = star2_selected;
  //   if(star_selected){
  //     document.getElementById(starID).className="fa-regular fa-star";
  //     document.getElementById(starID).style.color="black";
  //     star2_selected = false;
      
  //   }
  //   else{
  //     document.getElementById(starID).className="fa-solid fa-star";
  //     document.getElementById(starID).style.color="#e8c700";
  //     star2_selected = true;
  //   }

  // }else if(n==3){
  //   var starID = "star3";
  //   var star_selected = star3_selected;
  // }else if(n==4){
  //   var starID = "star4";
  //   var star_selected = star4_selected;
  // }else{
  //   var starID = "star5";
  //   var star_selected = star5_selected;
  // }


  
  if(star_selected_array[n - 1]){
    for(let i=n-1; i<stars.length; i++){
      stars[i].className = stars[i].className.replace(" fa-solid fa-star", " fa-regular fa-star");
      stars[i].style.color = "black";
      star_selected_array[i] = false;
    }
    
    
    
  }else{
    for(let i=0; i<n; i++){
      stars[i].className = stars[i].className.replace(" fa-regular fa-star", " fa-solid fa-star");
      stars[i].style.color = "#e8c700";
      star_selected_array[i] = true;
    }
    
    
    
  }

}




  // /////////////////////////////////////////////////////// custom select field configuration /////////////////////////////////////////

  var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
  

  






// resume = () =>{
//   clearInterval(myTimer);
//   myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
// }


var blocks_clicked_state = [true, false, false, false];

var img_btns = document.getElementsByClassName('img-btns');

var img_btn_divs = document.getElementsByClassName('img-btn-divs');


function img_click(n){
  if(n == 1){
    if(blocks_clicked_state[n - 1]){

    }else{
        hide_allBlocks();
        make_all_selctions_false();
         make_all_imgs_green();
        blocks_clicked_state[n-1] = true;
        document.getElementById('s-block1').style.display = 'block';
        img_btns[0].src= "./images/index/vacations-yellow.png";
        
    }
  }
  if(n == 2){
    if(blocks_clicked_state[n - 1]){

    }else{
        hide_allBlocks();
        make_all_selctions_false();
        make_all_imgs_green();
        blocks_clicked_state[n-1] = true;
        document.getElementById('s-block2').style.display = 'block';
        img_btns[1].src= "./images/index/tours-yellow.png";
        
    }
  }
  if(n == 3){
    if(blocks_clicked_state[n - 1]){

    }else{
        hide_allBlocks();
        make_all_selctions_false();
        make_all_imgs_green();
        blocks_clicked_state[n-1] = true;
        document.getElementById('s-block3').style.display = 'block';
        img_btns[2].src= "./images/index/hotels-yellow.png";
        
  }
}
  if(n == 4){
    if(blocks_clicked_state[n - 1]){

    }else{
        hide_allBlocks();
        make_all_selctions_false();
        make_all_imgs_green();
        blocks_clicked_state[n-1] = true;
        document.getElementById('s-block4').style.display = 'block';
        img_btns[3].src= "./images/index/cars-yellow.png";
       
    }
  }

}


function hide_allBlocks(){
  document.getElementById('s-block1').style.display = 'none';
  document.getElementById('s-block2').style.display = 'none';
  document.getElementById('s-block3').style.display = 'none';
  document.getElementById('s-block4').style.display = 'none';

}

function make_all_selctions_false(){
  for(let i=0; i<blocks_clicked_state.length; i++){
    blocks_clicked_state[i] = false;
  }
}

// function make_all_imgs_green(){
//   img_btn_divs[0].innerHTML = "<img class='img-btns' src='./imgs/vacations-green.png' onclick='img_click(1)'>";
//   img_btn_divs[1].innerHTML = "<img class='img-btns' src='./imgs/tours-green.png' onclick='img_click(2)'>";
//   img_btn_divs[2].innerHTML = "<img class='img-btns' src='./imgs/hotels-green.png' onclick='img_click(3)'>";
//   img_btn_divs[3].innerHTML = "<img class='img-btns' src='./imgs/cars-green.png' onclick='img_click(4)'>";
// }

function make_all_imgs_green(){
  
    img_btns[0].src= "./images/index/vacations-green.png";
    img_btns[1].src= "./images/index/tours-green.png";
    img_btns[2].src= "./images/index/hotels-green.png";
    img_btns[3].src= "./images/index/cars-green.png";
  
}