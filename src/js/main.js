import './vendor';
import './review-slider';
import 'owl.carousel';

$(document).ready(function(){
    $(".owl-1").owlCarousel({
        dotsEach:2,
        loop:true
    });
  });



  $('.center').slick({
    slidesToShow: 3,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 0,
    Infinite: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          centerMode: true,
          focusOnSelect: true,
          centerPadding: 0,
          Infinite: true
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: true,
          focusOnSelect: true,
          centerPadding: 0,
          Infinite: true
        }
      }
    ]
  });



