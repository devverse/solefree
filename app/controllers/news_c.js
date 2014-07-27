function newsController($scope, $rootScope, $location, $filter, news_service) {
  $scope.news = [];

  $scope.getNews = function() {
    $scope.showLoading = true;
    news_service.getFeeds().then(
      function(data) {
        $scope.news = data;
      }, function(err) {
        alert(err);
      });
  };

  $scope.init = (function() {
    $scope.getNews();
    $rootScope.$emit("featured", false);
  })();
}