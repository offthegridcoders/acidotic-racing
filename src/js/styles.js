function setNavBar(elm) {
  if ($('header').length > 0) {
    // NAV styling for pages with a header
    if (headerIsOffScreen()) {
      $(elm).css('position', 'fixed');
      $(elm).css('top', '0px');
      $(elm).css('background','rgba(0, 0, 0, .8');
    } else {
      $(elm).css('position', 'absolute');
      $(elm).css('background','rgba(0, 0, 0, 0');
    }
  } else {
    // NAV styling for pages without header
    $('nav').css('position', 'absolute');
    $('nav').css('background','rgba(0, 0, 0, .8');
  }
};