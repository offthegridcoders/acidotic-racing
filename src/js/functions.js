// Returns TRUE/FALSE
function headerIsOffScreen() {
  // -100px since header images fade out
  return $(window).scrollTop() > (parseInt($('header').css('height'), 10) - 300)
};
