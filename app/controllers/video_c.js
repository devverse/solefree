function videoController($scope, $rootScope, $sce, video_service) {
  
  $scope.videos = [];

  $scope.goToUrl = function($event) {
    $event.preventDefault();
    window.open('https://www.youtube.com/channel/UC93B-5jj6sd-kpKRfwWe-Bg', '_blank', 'location=yes');
  };

  $scope.getVideos = function() {
    $scope.showLoading = true;
    video_service.getVideos().then(
      function(data) {
        videos = data;

        for (var x = 0; x < data.length; x++) {
          var src = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+  videos[x].src +'" frameborder="0" allowfullscreen></iframe>';
          videos[x].url = src;
        } 

        $scope.videos = videos;
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

videoController.$inject = ['$scope', '$rootScope', '$sce', 'video_service'];