/**
 * Created by Rema on 1/18/2015.
 */
    // important don't touch for responsive navigation
$('.lazy').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 5,
    rtl: false,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: true,
                slidesToShow: 4
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1
            }
        }
    ]
});


//  end responsive navigation