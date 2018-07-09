var soleinsiderApp = angular.module('soleinsiderApp', [
  'ngRoute',
  'ngSanitize',
]);

soleinsiderApp.config(['$routeProvider',
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
    when('/releases', {
      templateUrl: admin_url + 'partials/releases.html',
      controller: releasesController
    }).
    when('/past_releases', {
      templateUrl: admin_url + 'partials/past_releases.html',
      controller: pastReleasesController
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



soleinsiderApp.directive("keepScrollPos", function($route, $window, $timeout, $location, $anchorScroll) {

    // cache scroll position of each route's templateUrl
    var scrollPosCache = {};


    // compile function
    return function(scope, element, attrs) {

        scope.$on('$routeChangeStart', function() {
            // store scroll position for the current view
            if ($route.current) {
                scrollPosCache[$route.current.loadedTemplateUrl] = [ $window.pageXOffset, $window.pageYOffset ];
            }
        });

        scope.$on('$routeChangeSuccess', function() {

            // if hash is specified explicitly, it trumps previously stored scroll position
            if ($location.hash()) {
                $anchorScroll();

            // else get previous scroll position; if none, scroll to the top of the page
            } else {
                var prevScrollPos = scrollPosCache[$route.current.loadedTemplateUrl] || [ 0, 0 ];
                $timeout(function() {
                    $window.scrollTo(prevScrollPos[0], prevScrollPos[1]);
                }, 0);
            }
        });
    }
});

soleinsiderApp.directive('scrollDirective', function() {
  return function(scope, element, attrs) {
    if (scope.$last) {
      window.scroll(0, localStorage.getItem("scrollPosition"));
    }
  };
});

soleinsiderApp.directive('lazyLoad', function() {
  return function(scope, element, attrs) {
    if (scope.$last) {
      new LazyLoad({
          elements_selector: ".lazy-load"
      });
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

soleinsiderApp.directive('slideshowDirective', function() {
  return function(scope, element, attrs) {
    if (scope.$last){
      setTimeout(function() {
        new Swiper('.slider-images', {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay: 2500,
          loop: false
        });
        //$('.parallax').parallax();
      }, 500);

    }
  };
});
