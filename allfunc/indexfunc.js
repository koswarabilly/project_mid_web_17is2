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
    window.ityped.init(document.querySelector('.content-typing'),{
        strings : ['Welcome to my website!','Thankyou for visiting.','Only 50% done.'],
        loop : true,
        backDelay:2500,
        showCursor: false,
        typeSpeed: 50
    })
    verline();
    $(window).mousemove(function(e) {
        var xpos=e.clientX;
        var  xpos=xpos*2;
        $('.maintxtbg').css('left',((0+(xpos/200))+"px"));   
    });
    var timeoutId = 0;
    $(document).on('mousedown', function(e) {
        timeoutId = setTimeout(function() {
            alert('holding')
        }, 5000);
    }).on('mouseup mouseleave', function() {
        clearTimeout(timeoutId);
    });
}

var trans = function(){
    var ldpage = document.querySelector('.preload');
    ldpage.classList.toggle('loaded');
}

function verline(){
      $('.verline').each(function(index, e){
        var elm = $(e)
        ,elmInside = $(e).find('>div')
        ,direction = elm.data('direction')
        ,duration = elm.data('duration')
        ,delay = elm.data('delay')
        ,start = elm.data('start')
        ,top = elm.data('top')
        ,mov = elm.data('mov')
        ,width = elm.data('width')
        ,height = elm.data('height')
     ;
     
     
     if (direction == 'bottom'){
         var origin = 'right top 0px';
         var to = 'left top 0px';
         elm.css({
             'right': start+'px',
         });
     }else{
         var origin = 'left top 0px';
         var to = 'left bottom 0px';
         elm.css({
             'top': start+'px',
         });
     }
     
     elm.css({
         'left': top+'px',
     });
     
     elmInside.css({
         'width': width,
         'height': height,
         'background': elm.data('color'),
         '-webkit-transform-origin': origin,
         '-moz-transform-origin': origin,
         '-ms-transform-origin': origin,
         'transform-origin': origin,
         'transform': 'scaleY(0)'   
     });
     
     // Initial scale from 0 to 1
     var scale = [1, 0];
     
     function loop(){
         // ANIM LINE 
         if (direction == 'bottom'){
             elm.velocity({
                 'right': mov+'px',
             },{
                 duration: (duration*2),
                 easing: "ease",
                 delay: delay,
                 complete: function(){
                     elm.css({
                         'right': start+'px',
                     });
                 }
             });
         }else{
             elm.velocity({
                 'top': mov+'px'
             },{
                 duration: (duration*2),
                 easing: "ease",
                 delay: delay,
                 complete: function(){
                     elm.css({
                         'top': start+'px',
                     });
                 }
             });
         }
         
         // ANIM INSIDE LINE
         elmInside.velocity({
              scaleY:scale,
         },{
             duration: duration,
             easing: "ease",
             delay: delay,
             complete: function() { 
                 elmInside.css({
                     'transform-origin': to,
                     'transition':''
                 });
                 elmInside.velocity({
                     scaleY: 0
                 },{
                     duration: duration,
                     easing: "ease",
                     delay: 0,
                     complete: function(){
                         elmInside.css({
                             'transform-origin': origin
                         });
                         scale = 1;
                         loop();
                     }
                 });
             }
         });
     }
     loop();
          
      });
}