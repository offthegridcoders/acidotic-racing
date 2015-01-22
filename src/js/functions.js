// Returns TRUE/FALSE
function headerIsOffScreen() {
  // -100px since header images fade out
  return $(window).scrollTop() > (parseInt($('header').css('height'), 10) - 100)
};

function setNavBar() {
  if (headerIsOffScreen()) {
    $('nav').css('position', 'fixed');
    $('nav').css('top', '0px');
    $(this).css('background','rgba(0, 0, 0, .8');
  } else {
    $('nav').css('position', 'absolute');
    $(this).css('background','rgba(0, 0, 0, 0');
  }
};