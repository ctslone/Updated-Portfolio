$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$("#about-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#about-div").offset().top -95},
        'slow');
    console.log("scroll")
});

$("#project-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#projects-div").offset().top -95},
        'slow');
    console.log("scroll")
});