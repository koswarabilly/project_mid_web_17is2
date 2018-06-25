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