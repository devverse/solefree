function videoController($scope, $rootScope, video_service) {
  
  $scope.videos = [];

  $scope.getVideos = function() {
    $scope.showLoading = true;
    video_service.getVideos().then(
      function(data) {
        $scope.videos = data;
        $scope.showLoading = false;
      }, function(err) {
        alert(err);
      });
  };

  $scope.init = (function() {
    $scope.getVideos();
    $rootScope.$emit("featured", false);
    window.showBannerAd();
  })();
}

videoController.$inject = ['$scope', '$rootScope', 'video_service'];