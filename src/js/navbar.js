function setNavBar() {
  if ($(window).scrollTop() > (parseInt($('header').css('height'), 10) - 100)) {
    $('nav').css('position', 'fixed');
    $('nav').css('top', '0px');
    $('nav').hover(function() {
      $(this).css('background','rgba(0, 0, 0, .1')
    });
  } else {
    $('nav').css('position', 'absolute');
    $('nav').hover(function() {
      $(this).css('background','rgba(0, 0, 0, .8')
    });
  }
};
