$(document).ready(function () {

    // fade nav effect
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('.nav').addClass('affix');
        } else {
            $('.nav').removeClass('affix');
        }
    });

    // shrink nav to mobile view
    $('.navTrigger').click(function () {
        $(this).toggleClass('active');
        $("#mainListDiv").toggleClass("show_list");
        $("#mainListDiv").fadeIn();

    });
    // scroll to top of about section
    $("#about-btn").click(function () {
        $('html,body').animate({
            scrollTop: $("#about-div").offset().top - 95
        },
            'slow');
        $("#about-btn").css("color", "red")
    });
    // scroll to top of projects
    $("#project-btn").click(function () {
        $('html,body').animate({
            scrollTop: $("#projects-div").offset().top - 95
        },
            'slow');
    });
    // scroll to top of connect
    $("#connect-btn").click(function () {
        $('html,body').animate({
            scrollTop: $("#connect-div").offset().top - 80
        },
            'slow');
    });
    // footer scroll animations
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $('footer').slideDown(300);
        } else {
            $('footer').slideUp(300);
        }
    });

    // scrollspy
    $('body').scrollspy({
        target: '#main-nav',
        offset: 50
      });

})