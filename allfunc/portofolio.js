(function(){
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.header');
    
    burger.onpointerup = function() {
        header.classList.toggle('menu-opened');
    }
}());

var loaded = function(){
    var ldpage = document.querySelector('.preload');
    ldpage.classList.toggle('loaded');
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("myBtn").style.display = "block";
      } else {
          document.getElementById("myBtn").style.display = "none";
      }
  }