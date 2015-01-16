function pastReleasesController($scope, $rootScope, release_service, mixpanel_service) {

  $scope.releases = [];
  $scope.showmsg = false;
  $scope.showerror = false;

   $scope.getPastReleases = function() {
    $scope.showLoading = true;
    release_service.getPastReleases().then(
      function(data) {
        $scope.releases = data;
        mixpanel_service.trackEvent('Past releases fetched');
      }, function(err) {
        alert(err);
      });
  };

  $scope.init = (function() {
    $scope.getPastReleases();
    $rootScope.$emit("featured", true);
  })();

}

pastReleasesController.$inject = ['$scope', '$rootScope', 'release_service', 'mixpanel_service'];pastReleasesController.$inject = ['$scope', '$rootScope', 'release_service', 'mixpanel_service'];