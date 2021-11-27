$(document).ready(function(){
    // banner slider
    $('.banner-slider').slick({
        arrows:false,
        dots:true,
    });

    // about vedio pop-up
    $('.venobox').venobox();

    // testimonial slider
    $('.testimonial-slider').slick({
        arrows:false,
        dots:true,
        slidesToShow:2,
        autoplay:true,
        speed:700,
    });
});