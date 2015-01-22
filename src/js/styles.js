function setNavBar(elm) {
  // NAV styling for pages with a header
  if (headerIsOffScreen()) {
    $(elm).css('position', 'fixed');
    $(elm).css('top', '0px');
    $(elm).css('background','rgba(0, 0, 0, .8');
  } else {
    $(elm).css('position', 'absolute');
    $(elm).css('background','rgba(0, 0, 0, 0');
  }

  // NAV styling for pages without header
  if ($('header')) {
    console.log('header exists')
  } else {
    $('nav').css('position', 'absolute');
    $('nav').css('background','rgba(0, 0, 0, 0');
  }
};