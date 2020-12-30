(function($) {
    "use strict";
    $(window).on('load', function() {
        _droit_elementor_video_popup();
    });
    const _video_popup = document.getElementsByClassName('video_popup');
    const _video_url = document.getElementById('video_url');
    
 function _droit_elementor_video_popup() {
        $(document).on('click', '.video_popup_area', function() {
            $(_video_popup).addClass('popup-visible');
            $("body").addClass('close_ajax_popup');
            var _this = jQuery(this),
                _url = _this.attr('data-url');

            if ( _url != '' ) {
                $( _video_url ).attr("src", _url);
            }
            $(document).on("click", ".close_ajax_popup .popup-visible", function() {
                $(_video_url).attr("src", '');
                $(_video_popup).removeClass('popup-visible');
            });
        });
    }
    }(jQuery));