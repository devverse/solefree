function viewController($scope, $rootScope, news_service) {
  
  $scope.article = '';

  $scope.loadArticle = function() {
    article = JSON.parse(localStorage.getItem("article"));
    $scope.article = article;
  };

  $scope.init = (function() {
    $scope.loadArticle();
    $rootScope.$emit("featured", false);
    $rootScope.$emit("showback_button", true);
    window.showBannerAd();
  })();
}

viewController.$inject = ['$scope', '$rootScope', 'news_service'];