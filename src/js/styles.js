$('nav').mouseover(function() {
  if ($(window).scrollTop() > (parseInt($('header').css('height'), 10) - 100)) {
    $(this).css('background','rgba(0, 0, 0, .8');
  } else {
    $(this).css('background','rgba(0, 0, 0, .1');
  }
});

$('nav').mouseout(function() {
  $(this).css('background','rgba(0, 0, 0, .1');
});