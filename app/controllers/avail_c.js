function availController($scope, $rootScope, sales_service, cache_service, mixpanel_service) {

  $scope.products = [];

  $scope.getStillAvail = function() {
    $scope.products = cache_service.request("getStillAvail");
    mixpanel_service.trackEvent('Available products fetched');
  };

  $scope.buyProduct = function(product) {
    window.open(product.link, '_blank', 'location=yes');
    mixpanel_service.trackEvent('Available product click');
  };

  $scope.init = (function() {
    $scope.getStillAvail();

    $rootScope.$on('getStillAvail', function(e, data) {
      $scope.products = data;
    });

    $rootScope.$emit("featured", true);
  })();
}

availController.$inject = ['$scope', '$rootScope', 'sales_service', 'cache_service', 'mixpanel_service'];