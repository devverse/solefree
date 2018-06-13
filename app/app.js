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
    when('/hub/:type', {
      templateUrl: admin_url + 'partials/hub.html',
      controller: hubController
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
    when('/view', {
      templateUrl: admin_url + 'partials/view.html',
      controller: viewController
    }).
    when('/finder', {
      templateUrl: admin_url + 'partials/store_finder.html',
      controller: storeFinderController
    }).
    when('/social', {
      templateUrl: admin_url + 'partials/social.html',
      controller: socialController
    }).
    when('/more', {
      templateUrl: admin_url + 'partials/more.html',
      controller: moreController
    }).
    when('/stats', {
      templateUrl: admin_url + 'partials/stats.html',
      controller: statsController
    }).
    when('/sales', {
      templateUrl: admin_url + 'partials/sales.html',
      controller: salesController
    }).
    when('/store', {
      templateUrl: admin_url + 'partials/store.html',
      controller: storeController
    }).
    when('/store-item/:type', {
      templateUrl: admin_url + 'partials/store-item.html',
      controller: storeItemController
    }).
    when('/stories', {
      templateUrl: admin_url + 'partials/stories/stories.html',
      controller: storiesController
    }).
    when('/jordan-1', {
      templateUrl: admin_url + 'partials/stories/jordan-1.html',
      controller: storyController
    }).
    when('/jordan-2', {
      templateUrl: admin_url + 'partials/stories/jordan-2.html',
      controller: storyController
    }).
    when('/jordan-3', {
      templateUrl: admin_url + 'partials/stories/jordan-3.html',
      controller: storyController
    }).
    when('/jordan-4', {
      templateUrl: admin_url + 'partials/stories/jordan-4.html',
      controller: storyController
    }).
    when('/jordan-5', {
      templateUrl: admin_url + 'partials/stories/jordan-5.html',
      controller: storyController
    }).
    when('/jordan-6', {
      templateUrl: admin_url + 'partials/stories/jordan-6.html',
      controller: storyController
    }).
    when('/jordan-7', {
      templateUrl: admin_url + 'partials/stories/jordan-7.html',
      controller: storyController
    }).
    when('/jordan-8', {
      templateUrl: admin_url + 'partials/stories/jordan-8.html',
      controller: storyController
    }).
    when('/jordan-9', {
      templateUrl: admin_url + 'partials/stories/jordan-9.html',
      controller: storyController
    }).
    when('/jordan-10', {
      templateUrl: admin_url + 'partials/stories/jordan-10.html',
      controller: storyController
    }).
    when('/jordan-11', {
      templateUrl: admin_url + 'partials/stories/jordan-11.html',
      controller: storyController
    }).
    when('/jordan-12', {
      templateUrl: admin_url + 'partials/stories/jordan-12.html',
      controller: storyController
    }).
    when('/jordan-13', {
      templateUrl: admin_url + 'partials/stories/jordan-13.html',
      controller: storyController
    }).
    when('/jordan-14', {
      templateUrl: admin_url + 'partials/stories/jordan-14.html',
      controller: storyController
    }).
    when('/jordan-15', {
      templateUrl: admin_url + 'partials/stories/jordan-15.html',
      controller: storyController
    }).
    when('/jordan-16', {
      templateUrl: admin_url + 'partials/stories/jordan-16.html',
      controller: storyController
    }).
    when('/jordan-17', {
      templateUrl: admin_url + 'partials/stories/jordan-17.html',
      controller: storyController
    }).
    when('/jordan-18', {
      templateUrl: admin_url + 'partials/stories/jordan-18.html',
      controller: storyController
    }).
    when('/jordan-18-5', {
      templateUrl: admin_url + 'partials/stories/jordan-18-5.html',
      controller: storyController
    }).
    when('/jordan-19', {
      templateUrl: admin_url + 'partials/stories/jordan-19.html',
      controller: storyController
    }).
    when('/jordan-20', {
      templateUrl: admin_url + 'partials/stories/jordan-20.html',
      controller: storyController
    }).
    when('/jordan-21', {
      templateUrl: admin_url + 'partials/stories/jordan-21.html',
      controller: storyController
    }).
    when('/jordan-22', {
      templateUrl: admin_url + 'partials/stories/jordan-22.html',
      controller: storyController
    }).
    when('/jordan-23', {
      templateUrl: admin_url + 'partials/stories/jordan-23.html',
      controller: storyController
    }).
    when('/jordan-24', {
      templateUrl: admin_url + 'partials/stories/jordan-24.html',
      controller: storyController
    }).
    when('/jordan-25', {
      templateUrl: admin_url + 'partials/stories/jordan-25.html',
      controller: storyController
    }).
    when('/jordan-26', {
      templateUrl: admin_url + 'partials/stories/jordan-26.html',
      controller: storyController
    }).
    when('/jordan-27', {
      templateUrl: admin_url + 'partials/stories/jordan-27.html',
      controller: storyController
    }).
    when('/jordan-28', {
      templateUrl: admin_url + 'partials/stories/jordan-28.html',
      controller: storyController
    }).
    when('/jordan-29', {
      templateUrl: admin_url + 'partials/stories/jordan-29.html',
      controller: storyController
    }).
    when('/jordan-30', {
      templateUrl: admin_url + 'partials/stories/jordan-30.html',
      controller: storyController
    }).
    when('/jordan-31', {
      templateUrl: admin_url + 'partials/stories/jordan-31.html',
      controller: storyController
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
soleinsiderApp.directive('releasesDirective', function() {
  return function(scope, element, attrs) {
    if (scope.$last) {
      console.log('scroll', localStorage.getItem("scrollPosition"));
      setTimeout(function() {
        $("#content").scrollTop(localStorage.getItem("scrollPosition"));
      }, 10);
    }
  };
});

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
      setTimeout(function() {
        $("#pages_maincontent").scrollTop(0);
      }, 10);
    }
  };
});

soleinsiderApp.directive('lazyLoadDirective', function() {
  return function(scope, element, attrs) {
    if (scope.$last) {
      $('img.lazy').lazyload();
    }
  };
});

soleinsiderApp.directive('profileLoader', function() {
  return {
    restrict: 'AEC',
    scope: {
      title: '@'
    },
    templateUrl: admin_url + 'directives/profile-loader.html',
    transclude: true
  };
});

soleinsiderApp.directive('releasesLoader', function() {
  return {
    restrict: 'AEC',
    scope: {
      title: '@'
    },
    templateUrl: admin_url + 'directives/releases-loader.html',
    transclude: true
  };
});


soleinsiderApp.directive('newsLoader', function() {
  return {
    restrict: 'AEC',
    scope: {
      title: '@'
    },
    templateUrl: admin_url + 'directives/news-loader.html',
    transclude: true
  };
});

soleinsiderApp.directive('myRepeatDirective', function() {
  return function(scope, element, attrs) {
    if (scope.$last){
      new Swiper('.slider-images', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2500,
        loop: false
      });
      $('.parallax').parallax();
    }
  };
});
