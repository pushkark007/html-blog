(function($) {
    "use strict";
    //* Parallaxmouse js
    function parallaxHover() {
        if ($('body').length) {
            var haxine = document.getElementById('parallax');
            var parallax = new Parallax(haxine);
        };
    };
    parallaxHover();
})(jQuery);