function appController($scope, $rootScope, $window, $location, app_service) {

  $scope.message = "";
  $scope.showads = soleinsider.showads;
  $scope.show_featured = soleinsider.show_featured;
  $scope.show_loading = true;

  $scope.buyProduct = function(product) {
    window.open(product.clickUrl, '_blank', 'location=yes');
  };

  $scope.getFeaturedProducts = function() {
    app_service.getFeaturedProducts().then(
      function(data) {
        $scope.featured = data;
      }
    );
  };

  $scope.getMessages = function() {
    app_service.getMessages().then(
      function(data) {
        if (data.length > 0) {
          var index = Math.floor((Math.random() * data.length));
          $scope.message = data[index].message;
        }
      }
    );
  };

  $scope.init = (function() {
    $rootScope.$on('featured', function(e, status) {
      $scope.show_featured = status;
      $scope.show_loading = false;
    });

    $rootScope.$on('showback_button', function(e, status) {
      if (status == true) {
        $(".home-button").hide();
        $(".back-button").show();

        return;
      }

      $(".home-button").show();
      $(".back-button").hide();
    });

    $(".back-button").on('click', function(event) {
      event.preventDefault();
      $window.history.back();
    });
  })();
}

appController.$inject = ['$scope', '$rootScope', '$window', '$location', 'app_service'];
