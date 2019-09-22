

$(document).ready(function(){
  let curr = 1;
  let num = $(".announcements-text").length;
  showText(1);
  function showText(nth){
    for (i = 1; i <=num; i++){
      if(i != nth){
        $(".announcements-text:nth-of-type("+i+")").css('display','none');
      }else{
        $(".announcements-text:nth-of-type("+i+")").fadeIn(250);
      }
      }
  }




  $(".i-caret-right").click(function(){
    if(curr < num  ){
      curr +=1;
      showText(curr);
    }else{
      curr=1;
      showText(curr);

    }

  });

  $(".i-caret-left").click(function(){
    if(curr > 1  ){
      curr -=1;
      showText(curr);
    }else{
      curr = num;
      showText(curr);
    }

  });


});





var slideIndex = 1;
showSlides(slideIndex);

//left and right arrows functionality
function plusSlides(n){
  showSlides(slideIndex += n);
}
function currentSlides(n){
  showSlides(slideIndex = n);
}

//show slides
function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  //loop at first and last pic
  if (n>slides.length){
    slideIndex = 1;
  }
  if (n<1){
    slideIndex = slides.length;
  }
  //undisplay all the slides
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  //dots activeness
  for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active",
    "");
  }
  //display slide and active dot
  slides[slideIndex-1].style.display= "block";
  dots[slideIndex-1].className += " active";
}
