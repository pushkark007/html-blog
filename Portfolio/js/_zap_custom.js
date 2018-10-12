$(function() {

    "use strict";
    if ($('.zap-portfolio-wrapper').length) {
        var list = document.getElementsByClassName('zap-portfolio-wrapper');
        for (var i = 0; i < list.length; i++) {
            var src = list[i].getAttribute('data-image-src');
            list[i].style.backgroundImage = "url('" + src + "')";
        }
        if ($('.zap-portfolio-list').length) {
            $(function() {
                var filterList = {
                    init: function() {
                        $('.zap-portfolio-list').mixItUp({
                            selectors: {
                                target: '.zap-portfolio',
                                filter: '.filter'
                            },
                            load: {
                                filter: '.app'
                            }
                        });
                    }
                };
                filterList.init();
            });
        }
    }
});