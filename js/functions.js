function initiate_plugins() {
  // Left Sidebar
    $('#open-left').sideNav({
        menuWidth: 240, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });

    // Swiper Sliders
    var swiper = new Swiper('.slider', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay: 5000,
        loop: true
    });
    var swiper = new Swiper('.slider-sliced', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 5000,
    });

    // Material Layout
    $('.parallax').parallax();
    $(function () {
        var hBanner = $('.h-banner').height();
        var cbHeight = hBanner - 56;
        var hHeight = hBanner - 86; // for Title

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= cbHeight) {
                $(".halo-nav").addClass('h-bg');
            }
            if (scroll <= cbHeight) {
                $(".halo-nav").removeClass('h-bg');
            }
            // For heading Title
            if (scroll >= hHeight) {
                $(".banner-title").hide();
                $(".halo-nav .title").show();
            }
            if (scroll <= hHeight) {
                $(".banner-title").show();
                $(".halo-nav .title").hide();
            }
        });
        // opacity Plush button
        var fadeStart = 50 // 100px scroll or less will equiv to 1 opacity
        fadeUntil = 150 // 150px scroll or more will equiv to 0 opacity
        fading = $('.resize');
        $(window).on('scroll', function () {
            var offset = $(document).scrollTop(),
                opacity = 0;
            if (offset <= fadeStart) {
                opacity = 1;
            } else if (offset <= fadeUntil) {
                opacity = 1 - offset / fadeUntil;
            }
            fading.css({
                'transform': 'scale(' + opacity + ')'
            });
        });
    });


}
////--> End of Call all function for Ajax, now from there recall all the functions <--////


// Left Sidebar
$('#open-left').sideNav({
    menuWidth: 240, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
});


// Swiper sliders
var swiper = new Swiper('.slider', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    autoplay: 5000,
    loop: true
});
var swiper = new Swiper('.slider-sliced', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay: 5000,
});

// Material Layout
//$('.parallax').parallax();
$( document ).ready(function() {
    var hBanner = $('.h-banner').height();

    if (!hBanner || hBanner === 0) {
      hBanner = 212;
    }

    var cbHeight = hBanner - 56;
    var hHeight = hBanner - 86;
    var haloNavElement = $(".halo-nav");
    var haloNavTitleElement = $(".halo-nav .title");
    var bannerTitleElement = $(".banner-title");

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= cbHeight && !haloNavElement.hasClass('h-bg')) {
            haloNavElement.addClass('h-bg');
            console.log('addClass h-bg');
        }
        if (scroll <= cbHeight && haloNavElement.hasClass('h-bg')) {
            haloNavElement.removeClass('h-bg');
            console.log('removeClass h-bg !!!!!!!!!');
        }
        // For heading Title
        if (scroll >= hHeight && bannerTitleElement.is(":visible")) {
            bannerTitleElement.hide();
            haloNavTitleElement.show();
            console.log('show title');
        }
        if (scroll <= hHeight && haloNavTitleElement.is(":visible")) {
            bannerTitleElement.show();
            haloNavTitleElement.hide();
            console.log('hide title !!!!!!!!!!!!!!!!');
        }
    });
});
