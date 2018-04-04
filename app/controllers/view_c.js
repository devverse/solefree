function viewController($scope, $rootScope, news_service, menu_service) {

  $scope.loadArticle = function() {
    article = JSON.parse(localStorage.getItem("article"));
    $scope.article = article;
  };

  $scope.init = (function() {
    $("body").scrollTop();
    $scope.loadArticle();
    $rootScope.$emit("featured", false);
    $rootScope.$emit("showback_button", true);
    window.showBannerAd();
    window.randomInterstitial();
    menu_service.handleMenu();
  })();
}

viewController.$inject = ['$scope', '$rootScope', 'news_service', 'menu_service'];
