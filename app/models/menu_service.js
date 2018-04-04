soleinsiderApp.factory('menu_service', ['$rootScope', '$q', '$http',
  function($rootScope, $q, $http) {

    self.handleMenu = function() {
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

    };

    self.handleSwiper = function() {
      var swiper = new Swiper('.slider', {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          autoplay: 5000,
          loop: true
      });

      $('.parallax').parallax();
    };

    return {

      handleMenu: function() {
        return self.handleMenu();
      },

      handleSwiper: function() {
        return self.handleSwiper();
      }
    };

  }
]);
