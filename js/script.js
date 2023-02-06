$(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        loop: true,
        speed:2500,
        touchRatio: 0,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
    
    $('.btn li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        const result = $(this).attr('data-alt');

        $('.tabs > div').removeClass('active');
        $(`#${result}`).addClass('active');

    });

    $('.nav-wrap').mouseover(function(){
        $(this).addClass('active');
    });
    $('.nav-wrap').mouseleave(function(){
        $(this).removeClass('active');
    });


});//end
