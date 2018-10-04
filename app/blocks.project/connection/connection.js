'use strict';

$(function() {

  $('.connection__open').click(function() {
    $(this)
      .parents('.connection')
      .toggleClass('connection_open');
  });

  $(window).scroll(function() {
    if ( $(this).scrollTop() > 10 ) {
      $('.connection').addClass('connection_scroll');
    } else {
      $('.connection').removeClass('connection_scroll');
    }
  });

});
