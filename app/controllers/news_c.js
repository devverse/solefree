function newsController($scope, $rootScope, news_service, mixpanel_service) {
  $scope.news = [];

  $scope.getNews = function() {
    $scope.showLoading = true;
    news_service.getFeeds().then(
      function(data) {
        $scope.news = data;
        mixpanel_service.trackEvent('News feed fetched');
      }, function(err) {
        alert(err);
      });
  };

  $scope.init = (function() {
    $scope.getNews();
    $rootScope.$emit("featured", false);
  })();
}

newsController.$inject = ['$scope', '$rootScope', 'news_service', 'mixpanel_service'];