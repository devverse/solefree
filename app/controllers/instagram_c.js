function instagramController($scope, $rootScope, instagram_service) {

  $scope.images = [];
  $scope.show_loading = true;

  $scope.getImages = function() {
    instagram_service.getImages().then(
      function(data) {
        $scope.images = data;
        $scope.show_loading = false;
      }, function(err) {
        alert(err);
      });
  };

  $scope.init = (function() {
    $scope.getImages();
    $rootScope.$emit("featured", false);
    window.showBannerAd();
  })();
}

instagramController.$inject = ['$scope', '$rootScope', 'instagram_service'];