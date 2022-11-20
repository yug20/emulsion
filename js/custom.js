/*var wid = $(window).width(),
hei = $(window).height();
alert("width:" + wid +"px and height: " + hei + "px.")
*/

$(document).ready(function() {
    /*function bannerheight(){
        var head_height = $("header").outerHeight(true);
        $("body").css("padding-top",head_height + "px")
        $(".banner-sec").css("min-height","calc(100vh - " + head_height + "px)")
    };
    bannerheight();
    $(window).resize(bannerheight);*/

    $(".navbar-toggler").click(function() {
        $('html').toggleClass('show-menu');
    });

    function scrolling() {
        var sticky = $('header'),
            scroll = $(window).scrollTop();

        if (scroll >= 15) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    };
    scrolling();
    $(window).scroll(scrolling);

    // hide #back-top first
    $("#myBtn").hide();

    // fade in #back-top
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#myBtn').fadeIn();
            } else {
                $('#myBtn').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#myBtn').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    });

});




$('#clientdata').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayHoverPause: false,
    navText: ["<img src='assets/images/blackbgleft.svg'>", "<img src='assets/images/black1.svg'>"],

    responsive: {
        0: {
            items: 2
        },
        400: {
            items: 3
        },
        600: {
            items: 4
        }
        // 1000: {
        //   items: 5
        // },
        // 1600:{
        //   items:7
        // }
    }
})


$('#work').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayHoverPause: false,
    navText: ["<img src='assets/images/blackbgleft.svg'>", "<img src='assets/images/black1.svg'>"],

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

$('#ceoofugly').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayHoverPause: false,
    navText: ["<img src='assets/images/leftblack.svg'>", "<img src='assets/images/rightwhite.svg'>"],

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})


//loder
// loder close


//smoth scroller
const body = document.body,
    jsScroll = document.getElementsByClassName('js-scroll')[0],
    height = jsScroll.getBoundingClientRect().height - 1,
    speed = 0.04

var offset = 0

body.style.height = Math.floor(height) + "px"

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed

    var scroll = "translateY(-" + offset + "px) translateZ(0)"
    jsScroll.style.transform = scroll

    raf = requestAnimationFrame(smoothScroll)
}
smoothScroll()







// $(document).js - scroll(function() { resize(); });
// $(window).js - scroll(function() { resize(); });

// function resize() {
//     var mobileMaxWidth = 640; //Define this to whatever size you want
//     if ($(window).width() > mobileMaxWidth) {
//         $("div#desktop").show();
//         $("div#mobile").hide();
//     } else {
//         $("div#desktop").hide();
//         $("div#mobile").show();
//     }
// }

//hide alement
$(document).ready(function() {
    if (window.outerWidth > 425) {
        alert('your jquery code here - it fires for mobile device only');
    }
});

// if (window.outerWidth > 425) {
//     // HIDING ELEMENTS
//     $('#jqueryhide').hide();
// }


// UPDATE: I was able to get this working again... Enjoy!

//cursor
const cursor = document.querySelector('.cursor');
const cursorInner = document.querySelector('.cursor-move-inner');
const cursorOuter = document.querySelector('.cursor-move-outer');

const trigger = document.querySelector('a,img');

let mouseX = 0;
let mouseY = 0;
let mouseA = 0;

let innerX = 0;
let innerY = 0;

let outerX = 0;
let outerY = 0;

let loop = null;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!loop) {
        loop = window.requestAnimationFrame(render);
    }
});

trigger.addEventListener('mouseenter', () => {
    cursor.classList.add('cursor--hover');
});

trigger.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor--hover');
});

function render() {
    // stats.begin();

    loop = null;

    innerX = lerp(innerX, mouseX, 0.15);
    innerY = lerp(innerY, mouseY, 0.15);

    outerX = lerp(outerX, mouseX, 0.13);
    outerY = lerp(outerY, mouseY, 0.13);

    const angle = Math.atan2(mouseY - outerY, mouseX - outerX) * 180 / Math.PI;

    const normalX = Math.min(Math.floor((Math.abs(mouseX - outerX) / outerX) * 1000) / 1000, 1);
    const normalY = Math.min(Math.floor((Math.abs(mouseY - outerY) / outerY) * 1000) / 1000, 1);
    const normal = normalX + normalY * .5;
    const skwish = normal * .7;

    cursorInner.style.transform = `translate3d(${innerX}px, ${innerY}px, 0)`;
    cursorOuter.style.transform = `translate3d(${outerX}px, ${outerY}px, 0) rotate(${angle}deg) scale(${1 + skwish}, ${1 - skwish})`;

    // stats.end();

    // Stop loop if interpolation is done.
    if (normal !== 0) {
        loop = window.requestAnimationFrame(render);
    }
}

function lerp(s, e, t) {
    return (1 - t) * s + t * e;
}



$('.menu').click(function() {
    $(this).toggleClass('open');
});