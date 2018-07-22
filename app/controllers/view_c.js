function viewController($scope, $rootScope, $timeout, $window, news_service, menu_service) {

  $scope.loadArticle = function() {
    article = JSON.parse(localStorage.getItem("article"));
    $scope.article = article;

    $timeout(function() {
        $window.scrollTo(0, 0);
    }, 100);
  };

  $scope.init = (function() {
    $scope.loadArticle();
    $rootScope.$emit("featured", false);
    $rootScope.$emit("showback_button", true);
    window.randomInterstitial();
    menu_service.handleMenu();
  })();
}

viewController.$inject = ['$scope', '$rootScope', '$timeout', '$window', 'news_service', 'menu_service'];
