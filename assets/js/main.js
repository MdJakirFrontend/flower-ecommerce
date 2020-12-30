jQuery(function ($) {
    "use strict";
    /**-------------------------------------------------
     *Fixed HEader
     *----------------------------------------------------**/
    $(window).on('scroll', function () {
        /**Fixed header**/
        if ($(window).width() > 768) {
            if ($(window).scrollTop() > 0) {
                $('.header-wrapper').addClass('sticky fade_down_effect');
            } else {
                $('.header-wrapper').removeClass('sticky fade_down_effect');
            }
        }
    });

    // Mobile Menu Toggle Button JavaScript
    function myFunction() {
        var x = document.getElementById("mobile-menu");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    // Mobile Menu Toggle Button jQuery
    $("#menu-btn").click(function () {
        $(".mobile-menu").toggle();
    });



    $('.heroslider-items ').owlCarousel({
        loop: true,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<span class='ni ni-arrow-long-left'></span>", "<span class='ni ni-arrow-long-right'></span>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.product-cardwrp ').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        // stagePadding: 30,
        navText: ["<span class='ni ni-arrow-long-left'></span>", "<span class='ni ni-arrow-long-right'></span>"],


        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    $('.newitems-sliders ').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        // stagePadding: 30,
        navText: ["<span class='ni ni-arrow-long-left'></span>", "<span class='ni ni-arrow-long-right'></span>"],


        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })

    $('.fltestmonial-sliders ').owlCarousel({
        loop: true,
        // margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        // stagePadding: 30,
        navText: ["<span class='ni ni-arrow-long-left'></span>", "<span class='ni ni-arrow-long-right'></span>"],


        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1024: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })

    $('.flbog-wrp ').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        // stagePadding: 30,
        // navText: ["<span class='ni ni-arrow-long-left'></span>", "<span class='ni ni-arrow-long-right'></span>"],


        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1024: {
                items: 3
            }

        }
    })


    var rfslidergalaryone = $("#rfslidergalaryone");
    var rfslidergalarytwo = $("#rfslidergalarytwo");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;
    rfslidergalaryone.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: true,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        // navText: ["<i class= 'fas fa-angle-left'></i >", "<i class= 'fas fa-angle-right'></i >"]
        // navText: ["<img src='./img/arrow-back.png' >", "<img src='../img/arrow-back.png' >"],

    }).on('changed.owl.carousel', syncPosition);

    rfslidergalarytwo
        .on('initialized.owl.carousel', function () {
            rfslidergalarytwo.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: true,
            margin: 8,
            stagePadding: 4,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        rfslidergalarytwo
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = rfslidergalarytwo.find('.owl-item.active').length - 1;
        var start = rfslidergalarytwo.find('.owl-item.active').first().index();
        var end = rfslidergalarytwo.find('.owl-item.active').last().index();

        if (current > end) {
            rfslidergalarytwo.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            rfslidergalarytwo.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            rfslidergalaryone.data('owl.carousel').to(number, 100, true);
        }
    }
    rfslidergalarytwo.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        rfslidergalaryone.data('owl.carousel').to(number, 300, true);
    });




    if ($('.gameslider ').length) {
        $('.gameslider ').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            stagePadding: 30,
            navText: ["<img src='./assets/img/sliderarrow.svg'>", "<img src='./assets/img/sliderarrow.svg'>"],
            // navText: ['<span class="fas fa-chevron-left fa-2x"></span>', '<span class="fas fa-chevron-right fa-2x"></span>'],

            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })
    }

});