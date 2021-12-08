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
        responsive:[
            {
                breakpoint:768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:false,
                    arrows:false,
                }
            },    
        ],
    });
    // funfact counterUp
    $('.counter').counterUp({
        delay: 20,
        time: 1500,
    });
    // market slider
    $('.market-slider').slick({
        slidesToShow:5,
        slidesToScroll:1,
        centerMode:true,
        centerPadding:'0px',
        autoplay:true,
        speed:400,
        prevArrow:'<i class="fas fa-chevron-left slick-prev prev-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right slick-next next-arrow"></i>',
        responsive: [
            {
                breakpoint:992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots:false,
                    arrows:false,
                }
            },    
            {
                breakpoint:768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots:false,
                    arrows:false,
                }
            },    
            {
                breakpoint:576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:false,
                    arrows:false,
                }
            },    
        ],
    });
});