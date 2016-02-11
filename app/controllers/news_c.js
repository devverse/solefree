function newsController($scope, $rootScope, news_service) {
  
  $scope.news = [];
  $scope.show_loading = true;
  $scope.menu = [
    {'name' : 'Nike'},
    {'name' : 'Adidas'},
    {'name' : 'Yeezy'},
    {'name' : 'Puma'},
    {'name' : 'Jordan'},
    {'name' : 'Reebok'},
    {'name' : 'Converse'},
    {'name' : 'Under Armour'},
    {'name' : 'Timberland'},
    {'name' : 'Saucony'},
    {'name' : 'Vans'},
    {'name' : 'Diadora'},
  ];

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

  $scope.getFeedsByCategory = function(category) {
    $scope.news = [];
    $scope.showLoading = true;

    var post = "category=" + category;
    news_service.getFeedsByCategory(post).then(
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