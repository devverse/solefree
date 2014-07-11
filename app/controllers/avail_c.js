function availController($scope, $rootScope, sales_service, cache_service) {

  $scope.products = [];

  $scope.getStillAvail = function() {
    $scope.products = cache_service.request("getStillAvail");
  };

  $scope.buyProduct = function(product) {
    window.open(product.link, '_blank', 'location=yes');
  };

  $scope.init = (function() {
    $scope.getStillAvail();

    $rootScope.$on('getStillAvail', function(e, data) {
      $scope.products = data;
    });

    $rootScope.$emit("featured", true);
  })();
}