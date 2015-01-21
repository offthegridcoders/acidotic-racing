function setNavBar() {
  console.log('ScrollTop: ' + $(window).scrollTop());
  console.log('Header Height: ' + $('header').css('height'));

  if ($(window).scrollTop() < $('header').css('height')) {
    console.log('bang');
  } else {
    console.log('boom');
  }
};