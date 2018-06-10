function salesController($scope, $rootScope, sales_service, menu_service) {

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
    menu_service.handleMenu();
    menu_service.handleSwiper();
  })();
}

salesController.$inject = ['$scope', '$rootScope', 'sales_service', 'menu_service'];
