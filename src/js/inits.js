new WOW().init();

$(window).scroll(function(e){
  parallax();
  setNavBar();
});

window.onload = function(){
  setNavBar();
};