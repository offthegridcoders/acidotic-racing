function setNavBar() {
  console.log('ScrollTop: ' + $(window).scrollTop());
  console.log('Header Height: ' + parseInt($('header').css('height'), 10));

  if ($(window).scrollTop() < parseInt($('header').css('height'), 10)) {
    console.log('bang');
  } else {
    console.log('boom');
  }
};