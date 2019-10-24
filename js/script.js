$(document).ready(function(){
   
    
    $('.js--nav--icon').click(function(){
       var nav = $('.js--main--nav li');
       var icon = $('.js--nav--icon');
        
        
        nav.slideToggle(200);
        
        if(icon.hasClass('ion-navicon-round')){
            icon.removeClass('ion-navicon-round');
          icon.addClass('ion-close-round');
        
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
        });
        
     setInterval(function(){
           
           $('#js--img').delay(8000).fadeOut(1000, function(){
              
               $(".slider").attr("src", "img/slider2.png");
           });
        $('#js--img').fadeIn(1500, function(){
           
               $(".slider").attr("src", "img/slider2.png");
           });
                 
        $('#js--img').delay(8000).fadeOut(1000, function(){
              
               $(".slider").attr("src", "img/slider.png");
           });
         $('#js--img').fadeIn(1500, function(){
              
               $(".slider").attr("src", "img/slider.png");
           });
    },1000);

    $('#my-tab').tabSlideOut( {
        tabLocation:'right',
        action:'click',
        offset: '200px'
    } );
       
    
    
    
});
    
    
