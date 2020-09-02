$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 5500,
        draggable: false,
        // centerMode: true,
        // variableWidth:true
        responsive: [{
                breakpoint: 1250.1,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 769.1,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ]
    });
    $(".phone").mask("+7(999) 99-99-999");
});

$('[data-fancybox="gallery"]').fancybox({
    arrow: false,
    infobar: false,
    buttons: [
        "zoom",
        "close"
    ],
});