function pastReleasesController($scope, $rootScope, $location, release_service) {

  $scope.releases = [];
  $scope.showmsg = false;
  $scope.showerror = false;
  $scope.show_loading = true;

   $scope.getPastReleases = function() {
    $scope.showLoading = true;
    release_service.getPastReleases().then(
      function(data) {
        $scope.releases = data;
        $scope.show_loading = false;
      }, function(err) {
        alert(err);
      });
  };

  $scope.details = function(product) {
    localStorage.setItem("product_details", JSON.stringify(product));
    $location.path('/details')
  };

  $scope.init = (function() {
    $scope.getPastReleases();
    $rootScope.$emit("featured", false);
    window.showBannerAd();
  })();

}

pastReleasesController.$inject = ['$scope', '$rootScope', '$location', 'release_service'];