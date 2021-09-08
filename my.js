$(document).ready(function(){
    $(".carousel").owlCarousel({
        margin:  20,
        loop:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,  
        speed:8000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                
            },
            600:{
                items:2,
                
            },
            800:{
                items:3,
                
            },
            
            1000:{
                items:4,
              
            }
        }
    });
})