function setNavBar() {
  if (headerIsOffScreen()) {
    $('nav').css('position', 'fixed');
    $('nav').css('top', '0px');
  } else {
    $('nav').css('position', 'absolute');
  }
};
