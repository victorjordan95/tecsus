$("#owl-clients").owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    nav: true,
    loop: true,
    navText: ["<svg class='icone icon-arrow-left'><use xlink:href='#icon-arrow-left'></use></svg>", "<svg class='icone icon-arrow-right'><use xlink:href='#icon-arrow-right'></use></svg>"],
    responsive: {
        0: {
            items: 1
        },
        568: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});

$("#owl-midia").owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    margin: 30,
    responsiveClass: true,
    nav: true,
    loop: true,
    navText: ["<svg class='icone icon-arrow-left'><use xlink:href='#icon-arrow-left'></use></svg>", "<svg class='icone icon-arrow-right'><use xlink:href='#icon-arrow-right'></use></svg>"],
    responsive: {
        0: {
            items: 1
        },
        568: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

$("#js-owl-systems").owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    margin: 30,
    responsiveClass: true,
    nav: true,
    loop: true,
    navText: ["<svg class='icone icon-arrow-left'><use xlink:href='#icon-arrow-left'></use></svg>", "<svg class='icone icon-arrow-right'><use xlink:href='#icon-arrow-right'></use></svg>"],
    responsive: {
        0: {
            items: 1
        },
        568: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .not('.carousel-control')
    .click(function (event) {
        $("#bs-example-navbar-collapse-1").removeClass('in');
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });


    $(window).on("scroll", function() {
    if($(window).scrollTop() > 150) {
        $(".header").addClass("active");
    } else {
        $(".header").removeClass("active");
    }
});