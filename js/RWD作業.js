$(document).ready(function(){
    $('.openaside').click(function(event){
        event.preventDefault();
        $('.banner').toggleClass('open').toggleClass('animated slideInRight');
       
    });
    $('.top a').click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:0},2000);
    });
})