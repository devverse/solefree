var soleinsiderApp = angular.module('soleinsiderApp', [
  'ngRoute',
  'ngSanitize',
]).config(['$routeProvider',
  function($routeProvider) {
    "use strict";


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
    when('/details', {
      templateUrl: admin_url + 'partials/details.html',
      controller: detailsController
    }).
    when('/news', {
      templateUrl: admin_url + 'partials/news.html',
      controller: newsController
    }).
    when('/gallery', {
      templateUrl: admin_url + 'partials/instagram.html',
      controller: instagramController
    }).
    when('/videos', {
      templateUrl: admin_url + 'partials/videos.html',
      controller: videoController
    }).
    when('/finder', {
      templateUrl: admin_url + 'partials/store_finder.html',
      controller: storeFinderController
    }).
    when('/social', {
      templateUrl: admin_url + 'partials/social.html',
      controller: socialController
    }).
    when('/store', {
      templateUrl: admin_url + 'partials/store.html',
      controller: storeController
    });
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
        window.scrollTo(0, 0);
    }
  };
});


soleinsiderApp.directive('ebayItemsDirective', function() {
  return function(scope, element, attrs) {
    ngrepeat_counter++;
    if (scope.$last) {
      $('.ebay-product-carousel').carousel();
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