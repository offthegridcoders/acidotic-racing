function setNavBar() {
  if ($(window).scrollTop() > $('header').css('height')) {
    console.log('bang');
  } else {
    console.log('boom');
  }
};