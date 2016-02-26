function newsController($scope, $rootScope, $location, news_service) {
  
  $scope.category = '';
  $scope.news = false;
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
    {'name' : 'Asics'}
  ];

  $scope.getNews = function() {
    $scope.showLoading = true;
    localStorage.setItem("category", null);

    news_service.getFeeds().then(
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
        data[x].thumbnail = '';
      }

      $scope.news.push(data[x]);
    }
  };
  
  $scope.getFeedsByCategory = function(category) {
    $scope.showLoading = true;

    localStorage.setItem("category", category);

    var post = "category=" + category;
    news_service.getFeedsByCategory(post).then(
      function(data) {
        $scope.category = category;
        $scope.formatData(data);
      }, function(err) {
        alert(err);
      });
  };

  $scope.view = function(event, article) {
    event.preventDefault();
    localStorage.setItem("article", JSON.stringify(article));
    $location.path('view');
  };

  $scope.init = (function() {
    var category;

    category = localStorage.getItem("category");

    if (typeof category != null && category != "null" && category != null) {
      $scope.getFeedsByCategory(category);
    } else {
      $scope.getNews();
    }
    
    $rootScope.$emit("featured", false);
    $rootScope.$emit("showback_button", true);
    window.showBannerAd();
  })();
}

newsController.$inject = ['$scope', '$rootScope', '$location', 'news_service'];