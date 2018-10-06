'use strict';

$(window).on('load resize', function() {

  let width = $(document).width();

  if ( width > 767.9 && !$('.top-yachts__slider').hasClass('slick-initialized') ) {

    let topYactsSlider = $('.top-yachts__slider').slick({
      infinite: true,
      fade: false,
      autoplay: false,
      speed: 300,
      autoplaySpeed: 5000,
      pauseOnDotsHover: true,
      pauseOnHover: true,
      slidesToShow: 2,
      rows: 2,
      swipeToSlide: true,
      swipe: true,
      adaptiveHeight: false,
      dots: false,
      arrows: true,
      appendArrows: $('.top-yachts__arrows'),
      prevArrow: `
      <span class='slider-arrow slider-arrow_363636 slider-arrow_prev top-yachts__slider-arrow'>
        <span class='icon icon_arrow-363636'></span>
      </span>`,
      nextArrow: `
      <span class='slider-arrow slider-arrow_363636 slider-arrow_next top-yachts__slider-arrow'>
        <span class='icon icon_arrow-363636'></span>
      </span>`,
      responsive: [
        {
          breakpoint: 767.9,
          settings: 'unslick'
        }
      ]
    });

    let topYachtsQuantity = topYactsSlider.slick('getSlick').slideCount;

    $('.top-yachts__counter-total').html('0' + topYachtsQuantity);

    topYactsSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
      $('.top-yachts__counter-current').html('0' + (currentSlide + 1));
    });

  }

});
