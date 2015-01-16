function salesController($scope, $rootScope, sales_service, mixpanel_service) {

  $scope.products = [];

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
      mixpanel_service.trackEvent('Sales items fetched');
    });

    $rootScope.$emit("featured", true);

  })();
}

salesController.$inject = ['$scope', '$rootScope', 'sales_service', 'mixpanel_service'];