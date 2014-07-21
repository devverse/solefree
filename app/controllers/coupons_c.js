function couponsController($scope, $rootScope, cache_service) {

  $scope.getCoupons = function() {
    $scope.coupons = cache_service.request("getCoupons");
  };

  $scope.init = (function() {
    $scope.getCoupons();

    // Listeners
    $rootScope.$on('getCoupons', function(e, data) {
      $scope.coupons = data;
      $scope.showLoading = false;
    });

    $rootScope.$emit("featured", false);

  })();
}