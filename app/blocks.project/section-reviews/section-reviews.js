'use strict';

$(function() {

  let reviewsSlider = $('.section-reviews__slider').slick({
    infinite: true,
    fade: false,
    autoplay: false,
    speed: 300,
    autoplaySpeed: 5000,
    pauseOnDotsHover: true,
    pauseOnHover: true,
    slidesToShow: 1,
    swipeToSlide: true,
    swipe: true,
    adaptiveHeight: false,
    dots: true,
    arrows: true,
    appendArrows: $('.section-reviews__arrows'),
    prevArrow: `
      <span class='slider-arrow slider-arrow_363636 slider-arrow_prev section-reviews__prev'>
        <span class='icon icon_arrow-363636'></span>
      </span>`,
    nextArrow: `
      <span class='slider-arrow slider-arrow_363636 slider-arrow_next section-reviews__next'>
        <span class='icon icon_arrow-363636'></span>
      </span>`,
    appendDots: $('.section-reviews__dots')
  });

});
