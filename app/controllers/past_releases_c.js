function pastReleasesController($scope, $rootScope, cache_service, mixpanel_service) {

  $scope.releases = [];
  $scope.showmsg = false;
  $scope.showerror = false;

  $scope.getPastReleases = function() {
    $scope.showLoading = true;
    $scope.releases = cache_service.request("pastReleaseDates");
  };

  $scope.init = (function() {
    $scope.getPastReleases();

    $rootScope.$on('pastReleaseDates', function(e, data) {
      $scope.releases = data;
      $scope.showLoading = false;
      mixpanel_service.trackEvent('Past releases fetched');
    });

    $rootScope.$emit("featured", true);
  })();

}