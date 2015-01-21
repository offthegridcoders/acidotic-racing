function setNavBar() {
  if ($(window).scrollTop() > (parseInt($('header').css('height'), 10) - 100)) {
    $('nav').css('position', 'fixed');
    $('nav').css('top', '0px');
  } else {
    $('nav').css('position', 'absolute');
    $('nav:hover').css('background', 'rgba(0, 0, 0, .1) !important');
  }
};