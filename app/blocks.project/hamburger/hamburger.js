'use strict';

$(function() {

  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger_on');

    $('.top-navigation').toggleClass('top-navigation_open');

    $('.page').toggleClass('page_fixed');

    return false;
  });

});
