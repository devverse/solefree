function pastReleasesController($scope, $rootScope, release_service) {

  $scope.releases = [];
  $scope.showmsg = false;
  $scope.showerror = false;

   $scope.getPastReleases = function() {
    $scope.showLoading = true;
    release_service.getPastReleases().then(
      function(data) {
        $scope.releases = data;
      }, function(err) {
        alert(err);
      });
  };

  $scope.init = (function() {
    $scope.getPastReleases();
    $rootScope.$emit("featured", false);
    window.showBannerAd();
  })();

}

pastReleasesController.$inject = ['$scope', '$rootScope', 'release_service'];