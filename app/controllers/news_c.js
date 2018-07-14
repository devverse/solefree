function newsController($scope, $rootScope, $location, news_service, menu_service, State) {

  $scope.category = '';
  $scope.news = false;
  $scope.show_loading = true;

  var getNews = function() {
    $scope.showLoading = true;
    localStorage.setItem("category", null);

    State.data.news.then(
      function(data) {
        $scope.formatData(data);
      }, function(err) {
        alert(err);
      });
  };

  $scope.formatData = function(data) {
    $scope.show_loading = false;
    $scope.news = [];

    for (var x = 0; x < data.length; x++) {
      var html, image;

      html = $.parseHTML(data[x].description);

      image = $(html).find('img:first');

      if (typeof image != "undefined") {
        data[x].thumbnail = image.attr('src');
      } else {
        data[x].thumbnail = 'http://soleinsider.com/images/default.jpg';
      }

      data[x].news_class = 'news-item-mini';
      data[x].news_class_title = 'news-item-mini-title ';

      if (x % 5 == 0) {
        data[x].news_class = 'news-item';
        data[x].news_class_title = 'news-item-title ';
      }

      $scope.news.push(data[x]);
    }
  };
  $scope.view = function(event, article) {
    event.preventDefault();
    localStorage.setItem("article", JSON.stringify(article));
    $location.path('view');
  };

  $scope.init = (function() {
    getNews();
    $rootScope.$emit("showback_button", false);
    menu_service.handleMenu();
    window.randomInterstitial();
  })();
}

newsController.$inject = ['$scope', '$rootScope', '$location', 'news_service', 'menu_service', 'State'];
