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

    // click on nav link
    // remove class active of navTrigger class
    // give the span a custom ID?
    $(".navItem").click(function() {
        $("#mainListDiv").removeClass("show_list");
        $(".navTrigger").removeClass("active");
    })

    // changing nav links to show active
    $(".navItem").click(function() {
        $("a.active").removeClass("active")
        $(this).addClass("active")
    })

    // scroll to top of about section
    $("#about-btn").click(function () {
        $('html,body').animate({
            scrollTop: $("#about-div").offset().top - 95
        },'slow');
        
    });
    // scroll to top of projects
    $("#project-btn").click(function () {
        $('html,body').animate({
            scrollTop: $("#projects-div").offset().top - 95
        },'slow');
    });
    // scroll to top of connect
    $("#connect-btn").click(function () {
        $('html,body').animate({
            scrollTop: $("#connect-div").offset().top - 80
        },'slow');
    });
    // footer scroll animations
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $('footer').slideDown(300);
        } else {
            $('footer').slideUp(300);
        }
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() < 600) {
            $('#about-btn').removeClass("active");
        }
        if($(window).scrollTop() > 600) {
            // $('#about-btn').removeClass("active");
            $('#about-btn').addClass("active");
            $('#project-btn').removeClass("active");
        }
        if ($(window).scrollTop() > 1100) {
            $('#about-btn').removeClass("active");
            $('#project-btn').addClass("active");
        }
        if ($(window).scrollTop() > 2675) {
            $('#project-btn').removeClass("active");
            $('#connect-btn').addClass("active");
        }
        if ($(window).scrollTop() < 2675) {
            $('#connect-btn').removeClass("active");
        }
    })
    

    // scrollspy
    // $('body').scrollspy({
    //     target: '#mainListDiv',
    //     offset: 50
    //   });

})