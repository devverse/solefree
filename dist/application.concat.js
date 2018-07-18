// for Android
admobid = {
  banner: 'ca-app-pub-0083160636450496/6391719559',
  interstitial: 'ca-app-pub-0083160636450496/7728851959'
};

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  setTimeout(function() {
    analytics.startTrackerWithId('UA-18545304-13');
  }, 4000);

  admob.setOptions({
    publisherId: "ca-app-pub-0083160636450496/6391719559", // Required
    interstitialAdId: "cca-app-pub-0083160636450496/7728851959",
    autoShowInterstitial: true,
    autoShowBanner: true
  });
}

function showBannerAd() {
  return;
  if (typeof admob != 'undefined') {
    admob.createBannerView();
  }
}

function removeBannerAd() {
  return;
  if (typeof admob != 'undefined') {
    admob.destroyBannerView();
  }
}

function prepareInterstitial() {
  if (typeof admob != 'undefined') {
    admob.requestInterstitialAd();
  }
}

function randomInterstitial() {
  var random = Math.floor((Math.random() * 15) + 1);

  if (random === 3) {
    prepareInterstitial();
  }
}

document.addEventListener('prepareInterstitial', prepareInterstitial, false);

var url = window.location.href;
var serviceURL = "http://soleinsider.com/public";

var admin_url = 'app/';
var app_name = "SoleInsider";
var page_title = "SoleInsider";

var soleinsider = {};
soleinsider.base_url = serviceURL;
soleinsider.username = "";
soleinsider.member_id = false;
soleinsider.cache = false;
soleinsider.show_featured = true;
soleinsider.version = "7.0.0";
soleinsider.build = "android";
soleinsider.localhost = (url.indexOf("localhost") != -1 ? true :  false);


soleinsiderApp.factory('State', function($q, $http){
  var api = soleinsider.base_url;

  self.makePost = function(endpoint, post) {

    post = (!post) ? {} : post;
    if (!endpoint) {
      window.alert("Could not connect, please check your internet connection");
      return;
    }

    var deferred = $q.defer();
    $http.post(api + endpoint, post).success(function(data) {
      if (data) {
        if (data == 'false') {
          data = [];
        }
        deferred.resolve(data);
      } else {
        deferred.reject("Data was rejected: " + post);
      }
    });
    return deferred.promise;

  };

  self.getCachedReleases = function() {
    return self.makePost('/mobile/releaseDatesUnformatted');
  };

  self.getNews = function() {
    return self.makePost('/mobile/rssFeeds');
  };

  self.getPastReleases = function() {
    return self.makePost('/mobile/pastReleaseDates');
  };

  return {
    data:{
      releases: self.getCachedReleases(),
      news: self.getNews(),
      pastReleases: self.getPastReleases()
    },
  };
});

soleinsiderApp.factory('login_service', ['$rootScope', '$q', '$http',
  function($rootScope, $q, $http) {

    var api = soleinsider.base_url;

    self.makePost = function(endpoint, post) {

      post = (!post) ? {} : post;
      if (!endpoint) {
        window.alert("Could not connect to database");
        return;
      }

      var deferred = $q.defer();
      $http.post(api + endpoint, post).success(function(data) {
        if (data) {
          if (data == 'false') {
            data = [];
          }
          deferred.resolve(data);
        } else {
          deferred.reject("Data was rejected: " + post);
        }
      });
      return deferred.promise;

    };


    self.login = function(post) {
      return self.makePost('/mobile/login', post);
    };


    self.createAccount = function(post) {
      return self.makePost('/mobile/createAccount', post);
    };

    return {

      login: function(post) {
        return self.login(post);
      },

      createAccount: function(post) {
        return self.createAccount(post);
      }
    };

  }
]);

soleinsiderApp.factory('store_service', ['$rootScope', '$q', '$http',
  function($rootScope, $q, $http) {

    var api = serviceURL;

    self.makePost = function(endpoint, post) {

      post = (!post) ? {} : post;
      if (!endpoint) {
        window.alert("Could not connect to database");
        return;
      }

      var deferred = $q.defer();
      $http.post(api + endpoint, post).success(function(data) {
        if (data) {
          if (data == 'false') {
            data = [];
          }
          deferred.resolve(data);
        } else {
          deferred.reject("Data was rejected: " + post);
        }
      });
      return deferred.promise;
    };

    self.search = function(search) {
      var post = "search=" + search;
      return self.makePost('/store/search', post);
    };

    self.paginate = function(post) {
      return self.makePost('/store/paginate', post);
    };

    return {
      search: function(search) {
        return self.search(search);
      },
      paginate: function(post) {
        return self.paginate(post);
      }
    };
  }
]);

soleinsiderApp.factory('release_service', [ '$rootScope', '$q', '$http',
  function($rootScope, $q, $http) {

    var api = soleinsider.base_url;

    self.cachedReleases = [];
    self.cachedComingSoon = [];
    self.expiration = 0;

    self.makePost = function(endpoint, post) {

      post = (!post) ? {} : post;
      if (!endpoint) {
        window.alert("Could not connect, please check your internet connection");
        return;
      }

      var deferred = $q.defer();
      $http.post(api + endpoint, post).success(function(data) {
        if (data) {
          if (data == 'false') {
            data = [];
          }
          deferred.resolve(data);
        } else {
          deferred.reject("Data was rejected: " + post);
        }
      });
      return deferred.promise;

    };

    self.getCachedReleases = function() {
      if (moment().unix() > self.expiration) {
        self.cachedReleases = [];
      }

      if (self.cachedReleases.length == 0) {
        return false;
      }

      return self.cachedReleases;
    };

    self.setCachedReleases = function(releases) {
      self.expiration = moment().unix() + 1800;
      self.cachedReleases = releases;
    };

    self.getCachedComingSoon = function() {
      if (moment().unix() > self.expiration) {
        self.cachedComingSoon = [];
      }

      if (self.cachedComingSoon.length == 0) {
        return false;
      }

      return self.cachedReleases;
    };

    self.setCachedComingSoon = function(releases) {
      self.expiration = moment().unix() + 3600;
      self.cachedComingSoon = releases;
    };

    self.getComingSoon = function() {
      return self.makePost('/mobile/getComingSoon');
    };

    self.getReleases = function() {
      return self.makePost('/mobile/releaseDatesUnformatted');
    };

    self.getPastReleases = function() {
      return self.makePost('/mobile/pastReleaseDates');
    };

    self.addReminder = function(product, member_id) {

      var data = "product_id=" + product.id;
      data += "&member_id=" + member_id;

      return self.makePost('/mobile/addReleaseAlert', data);
    };

    self.getMyReleases = function() {
      var data = "member_id=" + localStorage.getItem("member_id");

      return self.makePost('/mobile/getMyReleases', data);
    };

    self.sneakerRating = function(data) {
      return self.makePost('/mobile/coporNot', data);
    };

    self.deleteRelease = function(product) {
      member_id = localStorage.getItem("member_id");
      var data = "product_id=" + product.id;
      data += "&member_id=" + member_id;
      return self.makePost('/mobile/deleteRelease', data).then(
        function(data) {
          $rootScope.$broadcast('deleteRelease', data);
        }, function(err) {
          alert(err);
        });
    };

    self.getSlideShow = function(data) {
      return self.makePost('/mobile/getSlideShow', data);
    };

    self.getRelatedItems = function(name) {
      var data = "product_name=" + name;
      return self.makePost('/mobile/getRelatedItems', data).then(
        function(data) {
          $rootScope.$broadcast('getRelatedItems', data);
        }, function(err) {
          alert(err);
        });
    };

    self.getRelatedItems = function(name, product_id) {
      var data = "keywords=" + name;
      data += "&product_id=" + product_id;
      return self.makePost('/ebay/getRelatedProducts', data);
    };

    return {

      getCachedReleases: function() {
        return self.getCachedReleases();
      },

      setCachedReleases: function(releases) {
        return self.setCachedReleases(releases);
      },

      getCachedComingSoon: function() {
        return self.getCachedComingSoon();
      },

      setCachedComingSoon: function(releases) {
        return self.setCachedComingSoon(releases);
      },

      getPastReleases: function() {
        return self.getPastReleases();
      },

      getReleases: function() {
        return self.getReleases();
      },

      getComingSoon: function() {
        return self.getComingSoon();
      },

      addAlert: function(product) {
        return self.addAlert(product);
      },

      addReminder: function(product, member_id) {
        return self.addReminder(product, member_id);
      },

      getMyReleases: function() {
        return self.getMyReleases();
      },

      sneakerRating: function(post) {
        return self.sneakerRating(post);
      },

      deleteRelease: function(product) {
        return self.deleteRelease(product);
      },

      getSlideShow: function(post) {
        return self.getSlideShow(post);
      },

      getRelatedItems: function(name, product_id) {
        return self.getRelatedItems(name, product_id);
      }
    };

  }
]);

soleinsiderApp.factory('restock_service', ['$rootScope', '$q', '$http',
  function($rootScope, $q, $http) {

    var api = soleinsider.base_url;

    self.makePost = function(endpoint, post) {

      post = (!post) ? {} : post;
      if (!endpoint) {
        window.alert("Could not connect to database");
        return;
      }

      var deferred = $q.defer();
      $http.post(api + endpoint, post).success(function(data) {
        if (data) {
          if (data == 'false') {
            data = [];
          }
          deferred.resolve(data);
        } else {
          deferred.reject("Data was rejected: " + post);
        }
      });
      return deferred.promise;

    };

    self.getMyRestocks = function() {
      var data = "member_id=" + localStorage.getItem("member_id");
      return self.makePost('/mobile/getMyRestocks', data).then(
        function(data) {
          $rootScope.$broadcast('getMyRestocks', data);
        }, function(err) {
          alert(err);
        });

    };

    self.getPastRestocks = function() {
      return self.makePost('/mobile/getAvailabilityHistory');
    };

    self.getRestocks = function() {
      return self.makePost('/mobile/productsChecks');
    };

    self.addAlert = function(product) {

      member_id = localStorage.getItem("member_id");
      var data = "product_id=" + product.id;
      data += "&member_id=" + member_id;
      return self.makePost('/mobile/addRestockAlert', data);
    };

    self.deleteRestock = function(product) {

      member_id = localStorage.getItem("member_id");
      var data = "product_id=" + product.id;
      data += "&member_id=" + member_id;
      return self.makePost('/mobile/deleteRestock', data).then(
        function(data) {
          $rootScope.$broadcast('deleteRestock', data);
        }, function(err) {
          alert(err);
        });
    };

    return {

      getRestocks: function() {
        return self.getRestocks();
      },

      getPastRestocks: function() {
        return self.getPastRestocks();
      },

      addAlert: function(product) {
        return self.addAlert(product);
      },

      getMyRestocks: function() {
        return self.getMyRestocks();
      },

      deleteRestock: function(product) {
        return self.deleteRestock(product);
      }
    };

  }
]);
soleinsiderApp.factory('app_service', ['$rootScope', '$q', '$http',
  function($rootScope, $q, $http) {

    var api = serviceURL;

    self.makePost = function(endpoint, post) {

      post = (!post) ? {} : post;
      if (!endpoint) {
        window.alert("Could not connect to database");
        return;
      }

      var deferred = $q.defer();
      $http.post(api + endpoint, post).success(function(data) {


        if (data) {
          if (data == 'false') {
            data = [];
          }
          deferred.resolve(data);
        } else {
          deferred.reject("Data was rejected: " + post);
        }
      });
      return deferred.promise;

    };

    self.getMessages = function() {
      return self.makePost('/mobile/getMessages');
    };

    self.getAds = function() {
      return self.makePost('/mobile/getAds');
    };

    self.getFeaturedProducts = function() {
      return self.makePost('/mobile/getFeaturedShopify');
    };

    return {
      getMessages: function() {
        return self.getMessages();
      },

      getAds: function() {
        return self.getAds();
      },

      getFeaturedProducts: function() {
        return self.getFeaturedProducts();
      }

    };
  }
]);
soleinsiderApp.factory('account_service', ['$rootScope', '$q', '$http',
  function($rootScope, $q, $http) {

    var api = serviceURL;

    self.makePost = function(endpoint, post) {

      post = (!post) ? {} : post;
      if (!endpoint) {
        window.alert("Could not connect to database");
        return;
      }

      var deferred = $q.defer();
      $http.post(api + endpoint, post).success(function(data) {


        if (data) {
          if (data == 'false') {
            data = [];
          }
          deferred.resolve(data);
        } else {
          deferred.reject("Data was rejected: " + post);
        }
      });
      return deferred.promise;

    };

    self.getAccount = function(post) {
      return self.makePost('/mobile/accountInfo', post);
    };

    self.updateAccount = function(post) {
      return self.makePost('/mobile/updateAccount', post);
    };

    self.getStats = function(post) {
      return self.makePost('/mobile/getStats', post);
    };

    return {

      updateAccount: function(post) {
        return self.updateAccount(post);
      },

      getAccount: function(post) {
        return self.getAccount(post);
      },

      getStats: function(post) {
        return self.getStats(post);
      }
    };
  }
]);

soleinsiderApp.factory('comments_service', ['$rootScope', '$q', '$http',
  function($rootScope, $q, $http) {

    var api = soleinsider.base_url;

    self.makePost = function(endpoint, post) {

      post = (!post) ? {} : post;
      if (!endpoint) {
        window.alert("Could not connect, please check your internet connection");
        return;
      }

      var deferred = $q.defer();
      $http.post(api + endpoint, post).success(function(data) {
        if (data) {
          if (data == 'false') {
            data = [];
          }
          deferred.resolve(data);
        } else {
          deferred.reject("Data was rejected: " + post);
        }
      });
      return deferred.promise;

    };

    self.getComments = function(data) {
      return self.makePost('/mobile/getComments', data);
    };

    self.leaveComment = function(data) {
      return self.makePost('/mobile/leaveComment', data);
    };

    self.voteComment = function(data) {
      return self.makePost('/mobile/voteComment', data);
    };

    return {

      leaveComment: function(post) {
        return self.leaveComment(post);
      },

      getComments: function(post) {
        return self.getComments(post);
      },

      voteComment: function(post) {
        return self.voteComment(post);
      }
    };

  }
]);
soleinsiderApp.factory('news_service', ['$rootScope', '$q', '$http',
  function($rootScope, $q, $http) {

    var api = soleinsider.base_url;

    self.makePost = function(endpoint, post) {

      post = (!post) ? {} : post;
      if (!endpoint) {
        window.alert("Could not connect to database");
        return;
      }

      var deferred = $q.defer();
      $http.post(api + endpoint, post).success(function(data) {
        if (data) {
          if (data == 'false') {
            data = [];
          }
          deferred.resolve(data);
        } else {
          deferred.reject("Data was rejected: " + post);
        }
      });
      return deferred.promise;

    };

    self.getFeeds = function() {
      return self.makePost('/mobile/rssFeeds');
    };

    self.getFeedsByCategory = function(data) {
      return self.makePost('/mobile/rssFeedsByCategory', data);
    }

    return {
      getFeeds: function() {
        return self.getFeeds();
      },

      getFeedsByCategory: function(data) {
        return self.getFeedsByCategory(data);
      },
    };

  }
]);
soleinsiderApp.factory('sales_service', ['$rootScope', '$q', '$http',
  function($rootScope, $q, $http) {

    var api = soleinsider.base_url;

    self.makePost = function(endpoint, post) {

      post = (!post) ? {} : post;
      if (!endpoint) {
        window.alert("Could not connect to database");
        return;
      }

      var deferred = $q.defer();
      $http.post(api + endpoint, post).success(function(data) {
        if (data) {
          if (data == 'false') {
            data = [];
          }
          deferred.resolve(data);
        } else {
          deferred.reject("Data was rejected: " + post);
        }
      });
      return deferred.promise;

    };


    self.getSales = function() {

      return self.makePost('/mobile/getSales').then(

        function(data) {
          $rootScope.$broadcast('getSales', data);
        }, function(err) {
          alert(err);
        });
    };

    self.getStillAvail = function() {

      return self.makePost('/mobile/getStillAvail').then(

        function(data) {
          $rootScope.$broadcast('getStillAvail', data);
        }, function(err) {
          alert(err);
        });

    };

    return {
      init: function() {

      },

      getSales: function() {
        return self.getSales();
      },

      getStillAvail: function() {
        return self.getStillAvail();
      }

    };

  }
]);
soleinsiderApp.factory('menu_service', ['$rootScope', '$q', '$http',
  function($rootScope, $q, $http) {

    self.handleMenu = function() {
      $(function () {
          var hBanner = $('.h-banner').height();
          var cbHeight = hBanner - 56;
          var hHeight = hBanner - 86; // for Title
          $(window).scroll(function () {
              var scroll = $(window).scrollTop();
              if (scroll >= cbHeight) {
                  $(".halo-nav").addClass('h-bg');
              }
              if (scroll <= cbHeight) {
                  $(".halo-nav").removeClass('h-bg');
              }
              // For heading Title
              if (scroll >= hHeight) {
                  $(".banner-title").hide();
                  $(".halo-nav .title").show();
              }
              if (scroll <= hHeight) {
                  $(".banner-title").show();
                  $(".halo-nav .title").hide();
              }
          });
          // opacity Plush button
          var fadeStart = 50 // 100px scroll or less will equiv to 1 opacity
          fadeUntil = 150 // 150px scroll or more will equiv to 0 opacity
          fading = $('.resize');
          $(window).on('scroll', function () {
              var offset = $(document).scrollTop(),
                  opacity = 0;
              if (offset <= fadeStart) {
                  opacity = 1;
              } else if (offset <= fadeUntil) {
                  opacity = 1 - offset / fadeUntil;
              }
              fading.css({
                  'transform': 'scale(' + opacity + ')'
              });
          });
      });

    };

    self.handleSwiper = function() {
      var swiper = new Swiper('.slider', {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          autoplay: 5000,
          loop: true
      });

      $('.parallax').parallax();
    };

    self.handleParallax = function() {
      $('.parallax').parallax();
    };

    return {

      handleMenu: function() {
        return self.handleMenu();
      },

      handleSwiper: function() {
        return self.handleSwiper();
      },

      handleParallax: function() {
        return self.handleParallax();
      }
    };

  }
]);

function appController($scope, $rootScope, $window, $location, app_service) {

  $scope.message = "";
  $scope.showads = soleinsider.showads;
  $scope.show_featured = soleinsider.show_featured;
  $scope.show_loading = true;

  $scope.buyProduct = function(product) {
    window.open(product.clickUrl, '_blank', 'location=yes');
  };

  $scope.getFeaturedProducts = function() {
    app_service.getFeaturedProducts().then(
      function(data) {
        $scope.featured = data;
      }
    );
  };

  $scope.getMessages = function() {
    app_service.getMessages().then(
      function(data) {
        if (data.length > 0) {
          var index = Math.floor((Math.random() * data.length));
          $scope.message = data[index].message;
        }
      }
    );
  };

  $scope.init = (function() {
    $scope.getFeaturedProducts();

    $rootScope.$on('featured', function(e, status) {
      $scope.show_featured = status;
      $scope.show_loading = false;
    });

    $rootScope.$on('showback_button', function(e, status) {
      if (status == true) {
        $(".home-button").hide();
        $(".back-button").show();

        return;
      }

      $(".home-button").show();
      $(".back-button").hide();
    });

    $(".back-button").on('click', function(event) {
      event.preventDefault();
      $window.history.back();
    });
  })();
}

appController.$inject = ['$scope', '$rootScope', '$window', '$location', 'app_service'];
