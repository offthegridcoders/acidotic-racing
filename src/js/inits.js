new WOW().init();

$(window).scroll(function(e){
  parallax();
  setNavBar('nav');
});

window.onload = function(){
  setNavBar('nav');
};