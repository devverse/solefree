function pastRestocksController($scope, $rootScope, restock_service, cache_service, mixpanel_service) {

  $scope.restocks = [];

  $scope.getPastRestocks = function() {
    $scope.showLoading = true;
    $scope.past_restocks = cache_service.request("getAvailabilityHistory");
  };

  $scope.init = (function() {
    $scope.getPastRestocks();

    $rootScope.$on('getAvailabilityHistory', function(e, data) {
      $scope.past_restocks = data;
      $scope.showLoading = false;
      mixpanel_service.trackEvent('Past restocks fetched');
    });
    $rootScope.$emit("featured", true);
  })();

}