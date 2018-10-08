'use strict';

$(window).on('load resize', function() {

  let width = $(document).width();

  if ( width < 767.9 && !$('.top-directions__slider').hasClass('slick-initialized') ) {

    let topDirectionsSlider = $('.top-directions__slider').slick({
      infinite: true,
      fade: true,
      autoplay: false,
      speed: 300,
      autoplaySpeed: 5000,
      pauseOnDotsHover: true,
      pauseOnHover: true,
      slidesToShow: 1,
      rows: 1,
      swipeToSlide: true,
      swipe: true,
      adaptiveHeight: false,
      dots: true,
      arrows: false,
      appendDots: $('.top-directions__dots-container'),
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 768,
          settings: 'unslick'
        }
      ]
    });

    topDirectionsSlider.on('afterChange', function(event, slick, currentSlide, nextSlide) {

      let prevSlide1,
          prevSlide2;

      if(currentSlide === slick.$slides.length - 1 ) {
        prevSlide1 = $(slick.$slides[0]).data('bg');
      } else {
        prevSlide1 = $(slick.$slides[currentSlide + 1]).data('bg');
      }

      if( currentSlide === slick.$slides.length - 2 ) {
        prevSlide2 = $(slick.$slides[0]).data('bg');
      } else if(currentSlide > slick.$slides.length - 2) {
        prevSlide2 = $(slick.$slides[1]).data('bg');
      } else {
        prevSlide2 = $(slick.$slides[currentSlide + 2]).data('bg');
      }

      $('.top-directions__prev-slide_1').css({'background':'url(' + prevSlide1 + ') center no-repeat', 'background-size':'cover'});

      $('.top-directions__prev-slide_2').css({'background':'url(' + prevSlide2 + ') center no-repeat', 'background-size':'cover'});

    });

    $('.top-directions__prev-slide_1').css({'background':'url(' + $('.top-directions__item:nth-child(2)').data('bg') + ') center no-repeat', 'background-size':'cover'});

    $('.top-directions__prev-slide_2').css({'background':'url(' + $('.top-directions__item:nth-child(3)').data('bg') + ') center no-repeat', 'background-size':'cover'});

  }

});
