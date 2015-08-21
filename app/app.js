var soleinsiderApp = angular.module('soleinsiderApp', []);


soleinsiderApp.config(['$routeProvider', '$compileProvider',
  function($routeProvider, $compileProvider) {
    "use strict";

    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|file|ms-appx):/);

    $routeProvider.when('/', {
      templateUrl: admin_url + 'partials/releases.html',
      controller: releasesController
    }).
    when('/releases', {
      templateUrl: admin_url + 'partials/releases.html',
      controller: releasesController
    }).
    when('/past_releases', {
      templateUrl: admin_url + 'partials/past_releases.html',
      controller: pastReleasesController
    }).
    when('/restock_history', {
      templateUrl: admin_url + 'partials/past_restocks.html',
      controller: pastRestocksController
    }).
    when('/restocks', {
      templateUrl: admin_url + 'partials/restocks.html',
      controller: restocksController
    }).
    when('/myrestocks', {
      templateUrl: admin_url + 'partials/myrestocks.html',
      controller: myRestocksController
    }).
    when('/myreleases', {
      templateUrl: admin_url + 'partials/myreleases.html',
      controller: myReleasesController
    }).
    when('/avail', {
      templateUrl: admin_url + 'partials/still_avail.html',
      controller: availController
    }).
    when('/account', {
      templateUrl: admin_url + 'partials/account.html',
      controller: accountController
    }).
    when('/login', {
      templateUrl: admin_url + 'partials/login.html',
      controller: loginController
    }).
    when('/signup', {
      templateUrl: admin_url + 'partials/signup.html',
      controller: signupController
    }).
    when('/coupons', {
      templateUrl: admin_url + 'partials/coupons.html',
      controller: couponsController
    }).
    when('/details', {
      templateUrl: admin_url + 'partials/details.html',
      controller: detailsController
    }).
    when('/news', {
      templateUrl: admin_url + 'partials/news.html',
      controller: newsController
    }).
    when('/twitter_watcher', {
      templateUrl: admin_url + 'partials/twitter_watcher.html',
      controller: twitterWatcherController
    }).
    when('/gallery', {
      templateUrl: admin_url + 'partials/instagram.html',
      controller: instagramController
    }).
    when('/storeFinder', {
      templateUrl: admin_url + 'partials/store_finder.html',
      controller: storeFinderController
    }).
    when('/sales', {
      templateUrl: admin_url + 'partials/sales.html',
      controller: salesController
    }).
    when('/store', {
      templateUrl: admin_url + 'partials/store.html',
      controller: storeController
    }).
    when('/clothing', {
      templateUrl: admin_url + 'partials/clothing.html',
      controller: clothingStoreController
    })
    .otherwise({redirectTo:'/'});
  }
]);

soleinsiderApp.config(['$httpProvider',
  function($httpProvider) {
    "use strict";
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  }
]);

var ngrepeat_counter = 1;
soleinsiderApp.directive('featuredDirective', function() {
  return function(scope, element, attrs) {
    var link = '<a href="#" data-slide="' + ngrepeat_counter + '">' + ngrepeat_counter + '</a>';
    $(".featured-carousel-pagination").append(link);
    ngrepeat_counter++;
    if (scope.$last) {
      $('.featured-carousel').carousel();
      ngrepeat_counter = 1;
    }
  };
});

soleinsiderApp.directive('productImagesDirective', function() {
  return function(scope, element, attrs) {
    var link = '<a href="#" data-slide="' + ngrepeat_counter + '">' + ngrepeat_counter + '</a>';
    $(".product-carousel-pagination").append(link);
    ngrepeat_counter++;
    if (scope.$last) {
      $('.product-carousel').carousel();
      ngrepeat_counter = 1;
    }
  };
});

soleinsiderApp.directive('lazyLoadDirective', function() {
  return function(scope, element, attrs) {
    if (scope.$last){
      $('img.lazy').lazyload();
    }
  };
});