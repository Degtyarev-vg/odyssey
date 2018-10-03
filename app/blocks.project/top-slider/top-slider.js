'use strict';

$(function() {

  let topSlider = $('.top-slider__slider').slick({
    infinite: true,
    fade: true,
    autoplay: false,
    speed: 300,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    swipeToSlide: false,
    swipe: false,
    adaptiveHeight: false,
    dots: true,
    customPaging : function(slider, i) {
      let dotsText = $(slider.$slides[i]).data('dots_text');
      //console.log( $(slider.$slides[i]) );
      return `
        <div class='top-slider__dot-number'>0${(i+1)}</div>
        <p class='top-slider__dot-text'>${dotsText}</p>`;
    },
    arrows: true,
    appendArrows: $('.top-slider__arrows'),
    prevArrow: `
      <span class='top-slider__prev'>
        <span class='icon icon_arrow-363636'></span>
        <span class='icon icon_arrow-ffffff'></span>
      </span>`,
    nextArrow: `
      <span class='top-slider__next'>
        <span class='icon icon_arrow-363636'></span>
        <span class='icon icon_arrow-ffffff'></span>
      </span>`,
    appendDots: $('.top-slider__dots')
  });

  let topSlideQuantity = topSlider.slick('getSlick').slideCount;

  $('.top-slider__counter-total').html('0' + topSlideQuantity);

});
