/*
Author       : Theme Crazy
Template Name: MCode - App Landing Page
Version      : 1.0
*/

(function($) {
    "use strict";

    // For Navigation menu
    $(document).ready(function() {
        $('.navbar-nav li a').on('click', function(event) {

            $('.nav li').removeClass('active');
            $(this).parent().addClass('active');
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 66
            }, 1700, 'easeInOutExpo');
            event.preventDefault();
        });

        $(".navbar-nav li a").on("click", function(event) {
            $(".navbar-collapse").removeClass('in');
        });
        $('body').scrollspy({
            target: '#navbar',
            offset: 68
        });
    });

    // For Fixed Navbar Menu
    $(window).on('scroll', function() {
        if ($(".navbar").offset().top > 70) {
            $(".navbar-fixed-top").addClass("stikey-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("stikey-collapse");
        }
    });

    // For Background parallax Animation
    $('#home').parallax("50%", 0.5);

    // For Wow Animation
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // Animated element class
            animateClass: 'animated', // Animation class
            mobile: true, // Animations on mobile devices
        });
        wow.init();
    }

})($);