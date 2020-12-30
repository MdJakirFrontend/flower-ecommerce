/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // VideoPopUp
    if ($('#vidBox').length) {
        $(function () {
            $('#vidBox').VideoPopUp({
                backgroundColor: "#17212a",
                opener: "videoPlay",
                maxweight: "1080",
                idvideo: "html5video"
            });
        });
    }

    // clients-carousel
    if ($('.clients-carousel').length) {
        $(".clients-carousel").owlCarousel({
            items: 4,
            margin : 20,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1199: {
                    items: 4
                }
            }
        });
    }

    // clients-carousel
    if ($('.feedback-carousel').length) {
        $(".feedback-carousel").owlCarousel({
            items: 2,
            margin : 20,
            nav: true,
            dots: false,
            navText: ["<img src='./assets/img/sliderarrow.svg' />", "<img src='./assets/img/sliderarrow.svg' />"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items:1
                },
                1000: {
                    items: 2
                },
                1199: {
                    items: 2
                }
            }
        });
    }


});