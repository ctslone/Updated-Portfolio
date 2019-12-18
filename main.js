$(document).ready( function() {


$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$("#about-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#about-div").offset().top -95},
        'slow');
});

$("#project-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#projects-div").offset().top -95},
        'slow');
});

$("#connect-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#connect-div").offset().top -80},
        'slow');
});

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        $('footer').slideDown(300);
    } else {
        $('footer').slideUp(300);
    }
});

})