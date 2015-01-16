function pastRestocksController($scope, $rootScope, restock_service, mixpanel_service) {

  $scope.restocks = [];

  $scope.getPastRestocks = function() {
    $scope.showLoading = true;
    restock_service.getPastRestocks().then(
      function(data) {
        $scope.past_restocks = data;
        $scope.showLoading = false;
        mixpanel_service.trackEvent('Past restocks fetched');
      }, function(err) {
        alert(err);
      });
  };

  $scope.init = (function() {
    $scope.getPastRestocks();
    $rootScope.$emit("featured", true);
  })();

}

pastRestocksController.$inject = ['$scope', '$rootScope', 'restock_service', 'mixpanel_service'];