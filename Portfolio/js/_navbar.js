$(function() {

    "use strict";
    $(document).ready(function() {
        $('.menu-toggle').click(function() {
            $(this).next('.zap-menu').slideToggle(250);
            $('.zapex').toggleClass('open');
        });

        $(".zap-menu-list a").click(function() {
            $(".zap-menu-list a").removeClass("zap-menu-active");
            $(this).addClass("zap-menu-active");
        });
    });


    $(document).scroll(function() {

        var $zapnav = $("#zap-navbar");
        var zapnav_pos = $zapnav.offset().top;
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 150) {
            $zapnav.addClass("zap-nav-fixed").animate({}, 500);
        } else if (scrollTop <= zapnav_pos) {
            $zapnav.removeClass("zap-nav-fixed").clearQueue().animate({}, 800);
        }
    });
});