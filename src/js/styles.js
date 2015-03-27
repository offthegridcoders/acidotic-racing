var changeSeasonIcon = function() {
  var image = $('.season-icon').attr('src');
  if (image.indexOf('_orange') > 0) {
    console.log('bang');
    return image.replace('_orange.jpg', '.jpg');
  }
    console.log('bang2');
  return image.replace('.jpg', '_orange.jpg');
};

function setNavBar(elm) {
  if ($('header').length > 0) {
    // NAV styling for pages with a header

    var regImage = 'assets/icons/winter_icon.jpg'
    var orangeImage = 'assets/icons/winter_icon_orange.jpg';
    var seasonIsOrange = $('.season-icon').attr('src').indexOf('_orange');

    if (headerIsOffScreen()) {
      $(elm).css('position', 'fixed');
      $(elm).css('top', '0px');
      $(elm).css('background','rgba(0, 0, 0, .8');

      if (seasonIsOrange < 0){
        $('.season-icon').attr('src', changeSeasonIcon);
      }

    } else {
      $(elm).css('position', 'absolute');
      $(elm).css('background','rgba(0, 0, 0, 0');

      if (seasonIsOrange > 0) {
        $('.season-icon').attr('src', changeSeasonIcon);
      }
    }
  } else {
    // NAV styling for pages without header
    $('nav').css('position', 'absolute');
    $('nav').css('background','rgba(0, 0, 0, .8');
  }
};

$('.season-icon').click(function() {
  $('.seasons-nav').toggle();
});
