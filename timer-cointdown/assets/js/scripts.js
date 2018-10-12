jQuery(document).ready(function() {
    $('.timer').countdown("2019/09/05 10:42:00", function(event) {
        $(this).find('.days').text(event.offset.totalDays);
        $(this).find('.hours').text(event.offset.hours);
        $(this).find('.minutes').text(event.offset.minutes);
        $(this).find('.seconds').text(event.offset.seconds);
    });
});