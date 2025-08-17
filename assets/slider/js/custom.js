(function($) {
	
    "use strict";

    $(document).ready(function() {

        /* ----------------------------------------------------------- */
        /*  CAROUSEL TESTIMONIAL TOUCH OPTIMIZED [ CAROUSEL TESTIMONIALS ]
        /* ----------------------------------------------------------- */

        // INDEX-PRODUCT

        var tpj = jQuery;
        var rev_product;
        var rev_slider_product = $('#rev_slider_product');
        if (rev_slider_product.length > 0) {
            tpj(document).ready(function() {
                if (tpj("#rev_slider_product").revolution == undefined) {
                    revslider_showDoubleJqueryError("#rev_slider_product");
                } else {
                    rev_product = tpj("#rev_slider_product").show().revolution({
                        sliderType: "hero",
                        jsFileLocation: "js/plugins/revolution/js/",
                        sliderLayout: "fullwidth",
                        dottedOverlay: "none",
                        delay: 9000,
                        navigation: {},
                        responsiveLevels: [1240, 1024, 778, 480],
                        gridwidth: [1400, 1240, 778, 480],
                        gridheight: [768, 768, 960, 720],
                        lazyType: "none",
                        parallax: {
                            type: "mouse+scroll",
                            origo: "slidercenter",
                            speed: 2000,
                            levels: [1, 2, 3, 20, 25, 30, 35, 40, 45, 50],
                            disable_onmobile: "on"
                        },
                        shadow: 0,
                        spinner: "off",
                        autoHeight: "off",
                        disableProgressBar: "on",
                        hideThumbsOnMobile: "off",
                        hideSliderAtLimit: 0,
                        hideCaptionAtLimit: 0,
                        hideAllCaptionAtLilmit: 0,
                        debugMode: false,
                        fallbacks: {
                            simplifyAll: "off",
                            disableFocusListener: false,
                        }
                    });
                }
            });
        }


        // INDEX-SLIDESHOW

        var rev_slideshow;
        var rev_slider_slideshow = $('#rev_slider_slideshow');
        if (rev_slider_slideshow.length > 0) {
            tpj(document).ready(function() {
                if (tpj("#rev_slider_slideshow").revolution == undefined) {
                    revslider_showDoubleJqueryError("#rev_slider_slideshow");
                } else {
                    rev_slideshow = tpj("#rev_slider_slideshow").show().revolution({
                        sliderType: "standard",
                        jsFileLocation: "js/plugins/revolution/js/",
                        dottedOverlay: "none",
                        sliderLayout: "fullscreen",
                        delay: 9000,
                        navigation: {
                            keyboardNavigation: "off",
                            keyboard_direction: "horizontal",
                            mouseScrollNavigation: "off",
                            onHoverStop: "off",
                            touch: {
                                touchenabled: "on",
                                swipe_threshold: 75,
                                swipe_min_touches: 1,
                                swipe_direction: "horizontal",
                                drag_block_vertical: false
                            },
                            arrows: {
                                style: "zeus",
                                enable: true,
                                hide_onmobile: true,
                                hide_under: 600,
                                hide_onleave: true,
                                hide_delay: 200,
                                hide_delay_mobile: 1200,
                                tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                                left: {
                                    h_align: "left",
                                    v_align: "center",
                                    h_offset: 90,
                                    v_offset: 0
                                },
                                right: {
                                    h_align: "right",
                                    v_align: "center",
                                    h_offset: 90,
                                    v_offset: 0
                                }
                            },
                            bullets: {
                                enable: false,
                                hide_onmobile: true,
                                hide_under: 600,
                                style: "metis",
                                hide_onleave: true,
                                hide_delay: 200,
                                hide_delay_mobile: 1200,
                                direction: "horizontal",
                                h_align: "center",
                                v_align: "bottom",
                                h_offset: 0,
                                v_offset: 30,
                                space: 5,
                                tmp: '<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span>'
                            }
                        },
                        viewPort: {
                            enable: true,
                            outof: "pause",
                            visible_area: "80%"
                        },
                        responsiveLevels: [1240, 1024, 778, 480],
                        gridwidth: [1240, 1024, 778, 480],
                        gridheight: [600, 600, 500, 400],
                        lazyType: "none",
                        parallax: {
                            type: "mouse",
                            origo: "slidercenter",
                            speed: 2000,
                            levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
                        },
                        shadow: 0,
                        spinner: "off",
                        stopLoop: "off",
                        stopAfterLoops: -1,
                        stopAtSlide: -1,
                        shuffle: "off",
                        hideThumbsOnMobile: "off",
                        autoHeight: "off",
                        hideSliderAtLimit: 0,
                        hideCaptionAtLimit: 0,
                        hideAllCaptionAtLilmit: 0,
                        debugMode: false,
                        fallbacks: {
                            simplifyAll: "off",
                            nextSlideOnWindowFocus: "off",
                            disableFocusListener: false,
                        }
                    });
                }
            });
        }
	
		
    });

})(jQuery);