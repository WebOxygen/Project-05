(function() {
    "use strict";

    jQuery(document).ready(function($) {

        /*Popover*/
        $('[data-toggle="popover"]').popover({
            html: true,
            trigger: 'focus',
            //trigger :'manual',
            content: function() {
                var content = $(this).attr("data-popover-content");
                return $(content).children(".popover-body").html();
            }
        });

        $('[data-toggle="tooltip"]').tooltip();

        //For mobile menu
        $("#navigation").clone().prependTo($(".nav-mobile"));
        $(".need-help").clone().appendTo($(".nav-mobile"));

        //Review
        $(".science-slider").slick({
            slidesToShow: 2,
            arrows: true,
            dots: false,
            autoplay: true,
            infinite: true,
            prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
            nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
            mouseDrag: false,
            //touchMove: false,
            animateOut: 'slide',
            adaptiveHeight: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    autoplay: false,
                    slidesToShow: 1,
                }
            }],

        }); //Review
        
        //Review
        $(".quote-slider").slick({
            slidesToShow: 1,
            arrows: true,
            dots: true,
            autoplay: true,
            infinite: true,
            prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
            nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
            mouseDrag: false,
            //touchMove: false,
            animateOut: 'slide',
            adaptiveHeight: true,

        }); //Review
        

        //AOS animation
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
            once: true
        });


        $(".scrollup").on("click", function() {
            $("body,html").stop(false, false).animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 0) {
                $('header.for-sticky').addClass("sticky");
            } else {
                $('header.for-sticky').removeClass("sticky");
            }

            if ($(this).scrollTop() > 200) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }

        });
        
        $(".contact-input").focus(function(){
		 $(this).parent().addClass('active');
		});

		$('.contact-input').blur(function(){
			if( !$(this).val() ) {
				$(this).parent().removeClass('active'); 
			}
			else{
				$(this).parent().addClass('active'); 
			}
		});


        $(window).on('scroll', function() {

            if ($(this).scrollTop() > 400 && ($(window).width() < 581)) {
                $('.start-mobile-btn').fadeIn();
            } else {
                $('.start-mobile-btn').fadeOut();
            }
        });


    });

}(jQuery));