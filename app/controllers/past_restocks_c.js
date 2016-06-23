function pastRestocksController($scope, $rootScope, restock_service) {

  $scope.restocks = [];

  $scope.getPastRestocks = function() {
    $scope.showLoading = true;
    restock_service.getPastRestocks().then(
      function(data) {
        $scope.past_restocks = data;
        $scope.showLoading = false;
      }, function(err) {
        alert(err);
      });
  };

  $scope.init = (function() {
    $scope.getPastRestocks();
    $rootScope.$emit("featured", false);
    window.showBannerAd();
    window.randomInterstitial();
  })();

}

pastRestocksController.$inject = ['$scope', '$rootScope', 'restock_service'];