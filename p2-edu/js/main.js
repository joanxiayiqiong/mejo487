
$(window).load(function() {
   $('.preloader').fadeOut('slow');
});


// variables
var $header_top = $('.header-top');
var $nav = $('nav');



// toggle menu
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});



// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['rgba(46,139,87 ,0.3)', '#ed9121', '#ffe135', '#8A69BF', '#DFE9AC','#fc6c85','#f4f2f1'],
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixthSection', 'seventhSection'],
  menu: '#menu',

//hide scroll icon at the last page
  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(0, 0, 0, .1)');
    $nav.css('background', 'rgba(0, 0, 0, .25)');
    if (index == 7) {
        $('#fp-nav').hide();
      }
  },
// show scroll icon when leave the last page
  onLeave: function(index, nextIndex, direction) {
    if(index == 7) {
      $('#fp-nav').show();
    }
  },


  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    if(anchorLink == 'seventhSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true , 'up');
      $header_top.css('background', 'transparent');
      $nav.css('background', 'transparent');
      $(this).css('background', '#374140');
      $(this).find('h2').css('color', 'white');
      $(this).find('h3').css('color', 'white');
      $(this).find('p').css(
        {
          'color': '#DC3522',
          'opacity': 1,
          'transform': 'translateY(0)'
        }
      );
    }
  },

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
    if(anchorLink == 'seventhSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, 'up');
      $header_top.css('background', 'rgba(0, 0, 0, .1)');
      $nav.css('background', 'rgba(0, 0, 0, .2)');
    }
  }
});





//text animation when scroll into view
var $window = $(window);
var $elem = $(".ml6")

function isScrolledIntoView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


      anime.timeline()
        .add({
          targets: '.ml6 .letter',
          translateY: ["1.1em", 0],
          translateZ: 0,
          duration: 750,
          delay: (el, i) => 50 * i
        });


//round button

$('.round').click(function(e) {
    // e.preventDefault();
    e.stopPropagation();
    $('.arrow').toggleClass('bounceAlpha');
});


//change img when hover

$(function(){
  $("#change").on({
   mouseenter: function(){
    $(this).attr('src','img/smeggplant.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/eggplant.png');
  }
  });
});

//typewriter
var h1 = $('p#greeting');

h1.hide().contents().each(function() {
    var words;
    if (this.nodeType === 3) {
        words = '<span> ' + this.data.split(/\s+/).join(' </span><span> ') + ' </span>';
        $(this).replaceWith(words);
    } else if (this.nodeType === 1) {
        this.innerHTML = '<span> ' + this.innerHTML.split(/\s+/).join(' </span><span> ') + ' </span>';
    }
});

h1.find('span').hide().each(function() {
    if( !$.trim(this.innerHTML) ) {
        $(this).remove();
    }
});

h1.show().find('span').each(function(i) {
    $(this).delay(80 * i).fadeIn(200);
});


//function called
$(window).scroll(function() {
   var hT = $('#scroll-to').offset().top,
       hH = $('#scroll-to').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH)){

   }
});
