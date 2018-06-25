(function(){
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.header'),
        maintxtbg = document.querySelector('.maintxtbg'),
        whitebar = document.querySelector('.whitebar'),
        vwhitebar = document.querySelector('.ver'),
        title = document.querySelector('.content-title');
    
    burger.onpointerup = function() {
        header.classList.toggle('menu-opened');
        maintxtbg.classList.toggle('menu-opened');
        whitebar.classList.toggle('menu-opened');
        vwhitebar.classList.toggle('menu-opened');
        title.classList.toggle('menu-opened')
    }
}());

var loaded = function(){
    var ldpage = document.querySelector('.preload');
    ldpage.classList.toggle('loaded');
}