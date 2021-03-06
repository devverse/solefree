function myReleasesController($scope, $rootScope, release_service) {
  $scope.releases = [];
  $scope.showerror = false;
  $scope.errorMessage = "";

  $scope.getReleases = function() {

    member_id = localStorage.getItem("member_id");
    if (member_id == "false" || member_id == 0 || member_id == null) {
      $scope.showerror = true;
      $scope.errorMessage = "You must be logged to view your releases";
      return;
    }

    release_service.getMyReleases().then(
      function(data) {
        $scope.releases = data;
      }, function(err) {
        alert(err);
      });
  };

  $scope.deleteRelease = function(product) {
    release_service.deleteRelease(product).then(
      function(data) {
        $.jnoty("Reminder deleted for " + product.name, {
          theme: 'success'
        });
      },
      function(err) {
        alert(err);
      }
    );
  };

  $scope.init = (function() {
    $scope.getReleases();
    $rootScope.$emit("featured", false);
    $rootScope.$emit("showback_button", true);
    window.showBannerAd();
    window.randomInterstitial();
  })();
};
