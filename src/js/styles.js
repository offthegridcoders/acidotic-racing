function setNavBar(elm) {
  if (headerIsOffScreen()) {
    $(elm).css('position', 'fixed');
    $(elm).css('top', '0px');
    $(elm).css('background','rgba(0, 0, 0, .8');
  } else {
    $(elm).css('position', 'absolute');
    $(elm).css('background','rgba(0, 0, 0, 0');
  }
};