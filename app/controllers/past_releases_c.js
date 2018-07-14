function pastReleasesController($scope, $rootScope, $location, release_service, menu_service, State) {

  $scope.releases = [];
  $scope.showmsg = false;
  $scope.showerror = false;
  $scope.show_loading = true;

   $scope.getPastReleases = function() {
    $scope.showLoading = true;
    State.data.pastReleases.then(
      function(data) {
        $scope.releases = data;
        $scope.show_loading = false;
      }, function(err) {
        alert(err);
      });
  };

  $scope.details = function(event, product) {
    event.preventDefault();
    localStorage.setItem("product_details", JSON.stringify(product));
    $location.path('details');
  };

  $scope.init = (function() {
    $scope.getPastReleases();
    $rootScope.$emit("showback_button", false);
    menu_service.handleMenu();
    window.randomInterstitial();
  })();

}

pastReleasesController.$inject = ['$scope', '$rootScope', '$location', 'release_service', 'menu_service', 'State'];
