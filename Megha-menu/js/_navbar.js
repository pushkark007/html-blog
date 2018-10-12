$(function() {

    "use strict";
    $(document).ready(function() {
        $('.menu-toggle').click(function() {

            $(this).next('.mainmenu').slideToggle(250);

            $('#nav-icon2').toggleClass('open');
            if ($('#nav-icon2.open').is(':visible')) {
                $('body').addClass("site-fixed");
            } else {
                $('body').removeClass("site-fixed");
            }
            return false;
        });
        $('.mainmenu .menu-item').has('.submenu').addClass('has-submenu');
        if ($(window).width() > 991) {
            $('.mainmenu .menu-item').mouseenter(function() {
                $(this).find('.submenu').stop().fadeIn(250);
            });
            $('.mainmenu .menu-item').mouseleave(function() {
                $(this).find('.submenu').stop().fadeOut(250);
            });
        } else {

            $('.mainmenu .menu-item.has-submenu a').click(function() {
                $(this).parent(".has-submenu").find('.submenu').stop().slideToggle(250);
                return true;
            });
        }


        $(".menu-item a").hover(function() { $(this).addClass("menu-item-current") },
            function() {
                $(this).removeClass("menu-item-current")
            });
        $(".submenu").hover(function() {
                var fn = $(this).parent().find('a');
                $(fn).addClass("menu-item-current")
            },
            function() {
                $(".menu-item a").removeClass("menu-item-current")
            });
    });


    var $sitebar = $("#site-nav"),
        sitey_pos = $sitebar.offset().top;
    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > 150) {
            $sitebar.addClass("site-fixed").animate({
                top: 0
            }, 500);
        } else if (scrollTop <= sitey_pos) {
            $sitebar.removeClass("site-fixed").clearQueue().animate({
                top: 0
            }, 800);
        }

    });


});