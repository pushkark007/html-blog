(function($) {
    "use strict";
    //* Parallaxmouse js
    function parallaxHover() {
          $(".hamburger-box").click(function() {
        $(this).toggleClass('active');
    });
    };
    parallaxHover();
})(jQuery);