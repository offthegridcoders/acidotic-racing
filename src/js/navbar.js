function setNavBar() {
  console.log('ScrollTop: ' + $(window).scrollTop());
  console.log('Header Height: ' + parseInt($('header').css('height'), 10));

  if ($(window).scrollTop() > parseInt($('header').css('height'), 10)) {
    $('nav').css('position', 'fixed');
    $('nav').css('top', '0px');
  } else {
    console.log('boom');
  }
};