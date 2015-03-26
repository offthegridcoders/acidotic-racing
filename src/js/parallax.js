function checkHeaderPosition() {
  if ($(window).scrollTop() <= 0) {
    $('header').css('top', '0px');
  }
};

function parallax(){
  var scrollPosition = $(window).scrollTop();
  var speed = -2;
  var newTopPosition = scrollPosition * speed;

  if ($(window).scrollTop() > 0) {
    $('header').css('top', newTopPosition + 'px');
  }
  checkHeaderPosition();
}
