(function ($) {

    "use strict";

    /* ----------------------------------------------------------- */

    /*  STOP YOUTUBE VIDEOS IN passions SECTION
    /* ----------------------------------------------------------- */

    function stop_videos() {
        $("iframe").each(function () {
            $(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
        });
    }


    $(window).on("load", function () {

        /* ----------------------------------------------------------- */
        /*  PAGE PRELOADER
        /* ----------------------------------------------------------- */

        var preloader = $('#preloader');
        setTimeout(function () {
            preloader.addClass('preloaded');
        }, 800);
        if ($(window).width() > 1024) {
            setTimeout(function () {
                $('.header-inner').addClass('animated fadeInDown');
            }, 1500);
            setTimeout(function () {
                $('.home>div>div h1 span span').addClass('animated fadeInUp');
                $('.home>div>div .intro').addClass('animated fadeInUp');
                $('.home .cta').addClass('animated fadeInUp');
            }, 2200);
        } else {
            setTimeout(function () {
                $('.header-inner').addClass('animated fadeInDown');
            }, 1100);
            setTimeout(function () {
                $('.home>div>div h1 span span').addClass('animated fadeInUp');
                $('.home>div>div .intro').addClass('animated fadeInUp');
                $('.home .cta').addClass('animated fadeInUp');
            }, 1800);
        }

        /* ----------------------------------------------------------- */
        /*  SET ACTIVE MENU ITEM ON SCROLL
        /* ----------------------------------------------------------- */

        const birthdate = new Date("2001-05-07");
        const today = new Date();
        let age = today.getFullYear() - birthdate.getFullYear();
        const monthDiff = today.getMonth() - birthdate.getMonth();
        const dayDiff = today.getDate() - birthdate.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        document.getElementById("age").textContent = age + " Years";

        var homewidth = $('.home').width() - 10;
        var aboutwidth = homewidth + $('.about').width() - 10;
        var skillswidth = aboutwidth + $('.skills').width() - 10;
        var resumewidth = skillswidth + $('.resume').width() - 10;
        var passionswidth = resumewidth + $('.passions .single-item .main-content').width() + $('.passions .single-item .details').width() + 250 + 65 + 300 - 10;
        var contactwidth = passionswidth + $('.contact').width() - 10;


        /* ----------------------------------------------------------- */

        /*  HORIZONTAL SCROLL & REVEAL ANIMATIONS
        /* ----------------------------------------------------------- */

        function animateContent() {
            var divWidth = $("#wrapper").width() - ($(window).width() / 2) + 270;
            var animated = $(".animated-layer");
            animated.each(function () {
                var anim = $(this);
                var offset = $(this).offset().left - 200;
                if ((offset < divWidth)) {

                    // Image Reveal Animation
                    if (anim.hasClass('image-animation')) {
                        anim.addClass("animated");
                    }
                    // Fade In Up Animation
                    else if (anim.hasClass('fade-in-up-animation')) {
                        anim.addClass("animated fadeInUp");
                    }
                    // Fade In Animation
                    else if (anim.hasClass('fade-in-animation')) {
                        anim.addClass("animated fadeIn");
                    }
                    // Fade In Down Animation
                    else if (anim.hasClass('fade-in-down-animation')) {
                        anim.addClass("animated fadeInDown");
                    }
                    // Fade In Right Animation
                    else if (anim.hasClass('fade-in-right-animation')) {
                        anim.addClass("animated fadeInRight");
                    }
                    // Fade In Right Animation
                    else if (anim.hasClass('fade-in-left-animation')) {
                        anim.addClass("animated fadeInLeft");
                    }
                }
            });
        }


        function checkScroll() {
            let root = document.documentElement;
            if (((Math.abs(parseInt($(".mCSB_container").css("left"), 10))) > homewidth) && ((Math.abs(parseInt($(".mCSB_container").css("left"), 10))) < aboutwidth)) {
                $('.menu ul li span').removeClass('active');
                $('#about-link').addClass('active');
            } else if (((Math.abs(parseInt($(".mCSB_container").css("left"), 10))) > aboutwidth) && ((Math.abs(parseInt($(".mCSB_container").css("left"), 10))) < skillswidth)) {
                $('.menu ul li span').removeClass('active');
                $('#skills-link').addClass('active');
            } else if (((Math.abs(parseInt($(".mCSB_container").css("left"), 10))) > skillswidth) && ((Math.abs(parseInt($(".mCSB_container").css("left"), 10))) < resumewidth)) {
                $('.menu ul li span').removeClass('active');
                $('#resume-link').addClass('active');
            } else if (((Math.abs(parseInt($(".mCSB_container").css("left"), 10))) > resumewidth) && ((Math.abs(parseInt($(".mCSB_container").css("left"), 10))) < passionswidth)) {
                $('.menu ul li span').removeClass('active');
                $('#passions-link').addClass('active');
            } else if (((Math.abs(parseInt($(".mCSB_container").css("left"), 10))) > passionswidth) && ((Math.abs(parseInt($(".mCSB_container").css("left"), 10))) < contactwidth)) {
                $('.menu ul li span').removeClass('active');
                $('#contact-link').addClass('active');
            } else {
                $('.menu ul li span').removeClass('active');
                $('#home-link').addClass('active');
            }

        }

        if ($("#wrapper").length) {
            if ($(window).width() > 1024) {
                $("#wrapper").mCustomScrollbar({
                    axis: "x",
                    theme: "dark-3",
                    keyboard:
                        {
                            enable: true,
                            scrollType: "stepless"
                        },
                    advanced: {
                        autoExpandHorizontalScroll: true
                    },
                    mouseWheel: {
                        scrollAmount: 400
                    },
                    callbacks: {
                        whileScrolling: function () {
                            animateContent();
                            checkScroll();
                        }
                    }
                });
            } else {
                WOW = new WOW(
                    {
                        boxClass: 'wow',
                        animateClass: 'animated',
                        offset: 100,
                        mobile: true,
                        live: true
                    }
                )
                WOW.init();
            }
        }
    });

    $(document).ready(function () {
        /* ----------------------------------------------------------- */
        /*  SAFARI BROWSER FIXES
        /* ----------------------------------------------------------- */

        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

        if (isSafari) {
            $('body').addClass('body-safari');
        }

        new AutoTyping('.autotyping', [
            'Michael',
            'a Tester',
            'a Paramedic',
            'a Gamer'
        ], {
            typeSpeed: 50,
            deleteSpeed: 50,
            waitBeforeDelete: 4000,
            waitBetweenWords: 50,
        }).start();

        /* ----------------------------------------------------------- */
        /*  REMOVE # FROM URL
        /* ----------------------------------------------------------- */

        $("a[href='#']").on("click", (function (e) {
            e.preventDefault();
        }));

        function removeHash() {
            history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
        }

        $("#menu li a").on("click", (function (e) {
            setTimeout(() => {
                removeHash();
            }, 5);
        }));

        /* ----------------------------------------------------------- */
        /*  REMOVE ANIMATIONS CLASSES IN DESKTOP
        /* ----------------------------------------------------------- */

        if ($(window).width() > 1024) {
            $('.fadeIn').removeClass('fadeIn');
            $('.fadeInUp').removeClass('fadeInUp');
            $('.fadeInDown').removeClass('fadeInDown');
            $('.fadeInRight').removeClass('fadeInRight');
            $('.fadeInLeft').removeClass('fadeInLeft');
        }

        /* ----------------------------------------------------------- */
        /*  MENU LINKS
        /* ----------------------------------------------------------- */

        $('.menu ul li span').on('click', function () {
            setTimeout(function () {
                $(this).toggleClass('active');
            }, 1600);
        });

        $('#home-link').on('click', function () {
            $('#wrapper').mCustomScrollbar('scrollTo', '#home', {
                scrollInertia: 1000
            });
        });

        $('#about-link').on('click', function () {
            $('#wrapper').mCustomScrollbar('scrollTo', '#about', {
                scrollInertia: 1000
            });
        });

        $('#skills-link').on('click', function () {
            $('#wrapper').mCustomScrollbar('scrollTo', '#skills', {
                scrollInertia: 1000
            });
        });

        $('#resume-link').on('click', function () {
            $('#wrapper').mCustomScrollbar('scrollTo', '#resume', {
                scrollInertia: 1000
            });
        });

        $('#passions-link').on('click', function () {
            $('#wrapper').mCustomScrollbar('scrollTo', '#passions', {
                scrollInertia: 1000
            });
        });

        $('#contact-link').on('click', function () {
            $('#wrapper').mCustomScrollbar('scrollTo', '#contact', {
                scrollInertia: 1000
            });
        });

        $('#menu li a').on('click', function () {
            $('#checkboxmenu').trigger('click');
        });

        /* ----------------------------------------------------------- */
        /*  CALL TO ACTION HOME
        /* ----------------------------------------------------------- */

        $('#cta').on('click', function () {
            if ($(window).width() > 1024) {
                $('#wrapper').mCustomScrollbar('scrollTo', '#about', {
                    scrollInertia: 1500
                });
            } else {
                $('html, body').animate({
                    scrollTop: $("#my-photo").offset().top
                });
            }
        });

        /* ----------------------------------------------------------- */
        /*  SWIPER LOGOS OF CLIENTS
        /* ----------------------------------------------------------- */

        const swiperclients = new Swiper('.swiper-clients', {
            slidesPerView: 2,
            loop: true,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1025: {
                    slidesPerView: 3,
                }
            },
            spaceBetween: 50,
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
            },
        });

        /* ----------------------------------------------------------- */
        /*  SWIPER passions
        /* ----------------------------------------------------------- */

        var swiperpassions = new Swiper(".swiper-passions", {
            loop: true,
            navigation: {
                nextEl: ".prev-item",
                prevEl: ".next-item",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 30,
                    navigation: false
                },
                768: {
                    slidesPerView: 'auto',
                    spaceBetween: 0,

                },
                1025: {
                    direction: "vertical",
                }
            }
        });

        /* ----------------------------------------------------------- */
        /*  SWIPER SLIDER FORMAT IN passions
        /* ----------------------------------------------------------- */

        var swiperpassionsitem = new Swiper(".swiper-passions-item", {
            slidesPerView: 1,
            loop: true,
            spaceBetween: 100,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
            },
        });

        /* ----------------------------------------------------------- */
        /*  STOP VIDEOS ON CHANGE SLIDE
        /* ----------------------------------------------------------- */

        swiperpassions.on('slideChange', function () {
            stop_videos();
        });

    });

})(jQuery);

let clicks = 0;
let image = document.getElementById("profilepic");

image.addEventListener("click", function () {
    clicks += 1;
    if (clicks === 3) {
        let link = document.querySelector("link[rel='stylesheet']");
        link.href = "css/skins/_jeb.css";
        clicks = 0;
    }
});
