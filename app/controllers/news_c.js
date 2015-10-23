function newsController($scope, $rootScope, news_service) {
  
  $scope.news = [];
  $scope.show_loading = true;

  $scope.getNews = function() {
    $scope.showLoading = true;
    news_service.getFeeds().then(
      function(data) {
        $scope.news = data;
        $scope.show_loading = false;
      }, function(err) {
        alert(err);
      });
  };

  $scope.init = (function() {
    $scope.getNews();
    $rootScope.$emit("featured", false);
    $rootScope.$emit("showback_button", true);
    window.showBannerAd();
  })();
}

newsController.$inject = ['$scope', '$rootScope', 'news_service'];