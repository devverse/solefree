function salesController($scope, $rootScope, sales_service) {

  $scope.products = [];
  $scope.show_loading = true;

  $scope.buyProduct = function(product) {
    window.open(product.link, '_blank', 'location=yes');
  };

  $scope.getSales = function() {
    sales_service.getSales();
  };

  $scope.formatPrice = function(product) {
    product.price = parseFloat(product.price).toFixed(2);
    return product;
  };

  $scope.init = (function() {
    $scope.getSales();

    $rootScope.$on('getSales', function(e, data) {
      $scope.sales = data;
      $scope.show_loading = false;
    });

    $rootScope.$emit("featured", false);
    $rootScope.$emit("showback_button", true);
    window.removeBannerAd();

    $('.parallax').parallax();

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

  })();
}

salesController.$inject = ['$scope', '$rootScope', 'sales_service'];
