
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

  self.getReleases = function() {
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
      releases: self.getReleases(),
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

function storeController($scope, $rootScope, menu_service) {
  $scope.init = (function() {
    menu_service.handleMenu();
    $rootScope.$emit("showback_button", false);
    window.randomInterstitial();
  })();
}

storeController.$inject = ['$scope', '$rootScope', 'menu_service'];

function releasesController($scope, $rootScope, $filter, $location, release_service, menu_service, State) {

  var last_product_id = false;

  $scope.releases = [];
  $scope.show_loading = true;
  $scope.scrollPosition = 0;

  $scope.buyProduct = function(event, product) {
    event.preventDefault()
    window.open(product.link, '_blank', 'location=yes');
  };

  $scope.details = function(event, product) {
    event.preventDefault();

    var offset = document.documentElement.scrollTop || document.body.scrollTop;
    localStorage.setItem("scrollPosition", offset);
    localStorage.setItem("product_details", JSON.stringify(product));
    $location.path('details');

    event.preventDefault();
  };

  $scope.sneakerRating = function(product, status) {
    var member_id = localStorage.getItem("member_id");

    if (status == "yes" && parseInt(product.yes_percentage) < 98) {
      product.yes_percentage = parseInt(product.yes_percentage) + parseInt(3.2);
    }

    if (status == "no" && parseInt(product.no_percentage) < 98) {
      product.no_percentage = parseInt(product.no_percentage) + parseInt(3.2);
    }
    var post = "member_id=" + member_id;
    post += "&product.id=" + product.id;
    post += "&status=" + status;

    release_service.sneakerRating(post).then(function(data) {

    }, function(err) {
      window.console.log(err);
    });
  };

  var getReleases = function() {
    $scope.show_loading = true;

    State.data.releases.then(
      function(data) {
        $scope.releases = data;
        $scope.show_loading = false;
        $scope.releaseAddedAlert(data);
      }, function(err) {
        alert(err);
      });
  };

  $scope.releaseAddedAlert = function(data) {
    if (localStorage.getItem('release-date-id') == null) {
      localStorage.setItem('release-date-id', 2480);
    }

    var newReleases = 0;
    var newHigh = 0;
    var currentHigh = parseInt(localStorage.getItem('release-date-id'));

    for (var key in data) {
      for (var x = 0; x < data[key].products.length; x++) {
        if (data[key].products[x].id > currentHigh) {
          newHigh = data[key].products[x].id;
          currentHigh = newHigh
          newReleases++;
        }
      }
    }

    if (newReleases > 0) {
      $.jnoty(newReleases + " New Releases Added", {
        theme: 'success'
      });

      localStorage.setItem('release-date-id', newHigh);

      window.badge.increase(newHigh, function(badge) {

      });
    }
  };


  $scope.init = (function() {
    getReleases();
    $rootScope.$emit("showback_button", false);
    menu_service.handleMenu();
    window.randomInterstitial();
  })();
}

releasesController.$inject = ['$scope', '$rootScope', '$filter', '$location', 'release_service', 'menu_service', 'State'];

function accountController($scope, $rootScope, $route, account_service, menu_service) {

  $scope.confirmation = "";
  $scope.showConfirmation = false;
  $scope.showError = false;

  $scope.updateAccount = function($event, account) {
    $event.preventDefault();

    member_id = localStorage.getItem("member_id");
    if (member_id == "false" || member_id == 0 || member_id == null) {
      $.jnoty("Your must be logged in to update your account", {
        theme: 'error'
      });
      return false;
    }

    var post = "member_id=" + member_id;
    post += "&username=" + account.email;
    post += "&phone=" + account.phone_number;
    post += "&carrier=" + account.carrier;

    if($("input[name='profile']:checked").is(':checked')) {
      post += "&profile=" + $("input[name='profile']:checked").val();
    }

    account_service.updateAccount(post).then(function(data) {
      $.jnoty("Your account has been udpated", {
        theme: 'success'
      });
      $route.reload();
    }, function(err) {
      window.console.log(err);
    });
  };

  $scope.getAccount = function() {
    member_id = localStorage.getItem("member_id");
    if (member_id == "false" || member_id == 0 || member_id == null) {
      $scope.showError = true;
      return;
    }

    var post = "member_id=" + member_id;
    account_service.getAccount(post).then(function(data) {
      $scope.account = data;
      $scope.showError = false;
    }, function(err) {
      window.console.log(err);
    });
  };

  $scope.clearCache = function() {
    member_id = localStorage.getItem("member_id");
    username = localStorage.getItem("username");

    $.jnoty("Cache has been cleared", {
      theme: 'success'
    });
    localStorage.clear();

    localStorage.setItem("member_id", member_id);
    localStorage.setItem("username", username);
  };

  $scope.init = (function() {
    $scope.getAccount();
    $scope.showConfirmation = false;
    $rootScope.$emit("featured", false);
    $rootScope.$emit("showback_button", true);
    menu_service.handleMenu();
  })();
}

function pastReleasesController($scope, $rootScope, $location, release_service, menu_service, State) {

  $scope.releases = [];
  $scope.showmsg = false;
  $scope.showerror = false;
  $scope.show_loading = true;

   $scope.getPastReleases = function() {
    $scope.showLoading = true;
    State.data.pastReleases.then(
      function(data) {
        $scope.releases = data;
        $scope.show_loading = false;
      }, function(err) {
        alert(err);
      });
  };

  $scope.details = function(event, product) {
    event.preventDefault();
    localStorage.setItem("product_details", JSON.stringify(product));
    $location.path('details');
  };

  $scope.init = (function() {
    $scope.getPastReleases();
    $rootScope.$emit("showback_button", false);
    menu_service.handleMenu();
    window.randomInterstitial();
  })();

}

pastReleasesController.$inject = ['$scope', '$rootScope', '$location', 'release_service', 'menu_service', 'State'];

function detailsController($scope, $rootScope, $location, $filter, comments_service, release_service, menu_service) {
  $scope.comments = [];
  $scope.slideshow = [];
  $scope.slideshowlist = [];
  $scope.votes = [];
  $scope.member_id = '';

  $scope.buyProduct = function(event, product) {
    event.preventDefault();
    window.open(product.link, '_blank', 'location=yes');
  };

  $scope.openSiteLink = function(event, product) {
    event.preventDefault();

    var slug = $scope.sluggify(product.name) + '/';
    var today = new Date();
    var urlDate = today.getFullYear() + "/" + today.getMonth() + "/";
    var link = 'http://soleinsider.com/view/' + urlDate + slug + product.id;

    window.open(link, '_blank', 'location=yes');
  };

  $scope.sluggify = function(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  };

  $scope.isUndefined = function(text) {
    return (text === null);
  };

  $scope.voteUp = function(event, comment) {
    if ($scope.votes.indexOf(comment.id) != -1) {
      $.jnoty("You've already rated this comment", {
        theme: 'error'
      });

    } else {
      $scope.votes.push(comment.id);
      comment.votes_up++;

      var post = "comment_id=" + comment.id;
      post += "&comment_vote=1";

      comments_service.voteComment(post);
    }
  };

  $scope.voteDown = function(event, comment) {
    if ($scope.votes.indexOf(comment.id) != -1) {
      $.jnoty("You've already rated this comment", {
        theme: 'error'
      });
    } else {
      $scope.votes.push(comment.id);
      comment.votes_down++;

      var post = "comment_id=" + comment.id;
      post += "&comment_vote=0";
      comments_service.voteComment(post);
    }
  };

  $scope.filterComments = function(comment) {
    if (!comment.profile_image) {
      comment.profile_image = "default.png";
    }

    return comment;
  };

  $scope.showComments = function() {
    $scope.commentDisplay = true;
    $scope.relatedDisplay = false;
  };

  $scope.numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  $scope.loadProduct = function() {
    product = JSON.parse(localStorage.getItem("product_details"));

    product.showBuyLink = false;

    if (product.link.length > 2) {
      product.showBuyLink = true;
    }

    $scope.r = product;
    $scope.product_id = product.product_id;
    $scope.views = $scope.numberWithCommas(product.views * 2);

    if (product.yes_percentage) {
      new JustGage({
        id: "popularity-gage",
        value: product.yes_percentage,
        min: 0,
        max: 100,
        title: "Popularity",
        startAnimationTime: 3000,
        levelColors: ['#6D8BF3']
      });
    }

    var resale = product.resale || 65;

    new JustGage({
      id: "resale-gage",
      value: resale,
      min: 0,
      max: 100,
      title: "Resale Value",
      startAnimationTime: 3000,
      levelColors: ['#85A137']
    });
  };

  $scope.getSlideShow = function() {
    var post = "&product_id=" + $scope.product_id;
    release_service.getSlideShow(post).then(function(data) {
      $scope.slideshow = data;
      $scope.slideshowlist = data.slice(1);
    }, function(err) {
      window.console.log(err);
    });
  };

  $scope.addReminder = function(product) {
    member_id = localStorage.getItem("member_id");
    if (member_id == "false" || member_id == 0 || member_id == null) {
      $.jnoty("You must be logged for reminders", {
        theme: 'error'
      });
      return;
    }

    release_service.addReminder(product, member_id).then(
      function(data) {
        $scope.showmsg = true;
        $scope.showerror = false;
        $scope.sneakerName = product.name;
        $scope.addLocalNotification(product);
        $.jnoty("Reminder saved for " + product.name, {
          theme: 'success'
        });
      },
      function(err) {
        alert(err);
      }
    );
  };

  $scope.addLocalNotification = function(product) {
    var formatted = moment(product.release_date, 'MMMM Do, YYYY').format("ddd MMM DD YYYY 08:00") + ' GMT-0500 (EST)';
    formatted = new Date(formatted);

    cordova.plugins.notification.local.schedule({
      id: product.id,
      title: "Sneaker Release",
      text: product.name + " Releasing Today",
      at: formatted,
      led: "FF0000",
      sound: null,
      icon: "file://icons/push/logo.png"
    });
  };

  $scope.sneakerRating = function(event, product, status) {
    event.preventDefault();

    // Vibrate
    window.vibrate(5);

    var member_id = localStorage.getItem("member_id");

    if (status == "yes" && parseInt(product.yes_percentage) < 98) {
      product.yes_percentage = parseInt(product.yes_percentage) + parseInt(3.2);
    }

    if (status == "no" && parseInt(product.no_percentage) < 98) {
      product.no_percentage = parseInt(product.no_percentage) + parseInt(3.2);
    }
    var post = "member_id=" + member_id;
    post += "&product_id=" + product.id;
    post += "&status=" + status;

    release_service.sneakerRating(post).then(function(data) {}, function(err) {
      window.console.log(err);
    });
  };

  $scope.getComments = function(product) {
    var post = "product_id=" + $scope.product_id;
    comments_service.getComments(post).then(function(data) {
      $scope.formatComments(data);
    }, function(err) {
      window.console.log(err);
    });
  };

  $scope.formatComments = function(comments) {
    var divisor = 0;

    for (var i = 0; i < comments.length; i++) {
      var formatted = moment.utc(comments[i].comment_date, "MM-DD-YYYY h:mm:ss");
      comments[i].comment_date = moment(formatted, "MM-DD-YYYY h:mm:ss").fromNow();
    }

    $scope.comments = comments;
  }

  $scope.share = function(event, product) {
    event.preventDefault();

    return window.plugins.socialsharing.share(
      '#SoleInsider ' + product.name,
      product.name,
      'http://soleinsider.com/public/products/' + product.image,
      null);
  };

  $scope.addToCalender = function(event, product) {
    event.preventDefault();

    var startDate, endDate;
    var title = product.name;
    var location = "SoleInsider";

    var date = product.release_date_calendar;
    startDate = new Date(date);
    endDate = new Date(date);

    var notes = product.name + " Releasing " + startDate;

    var success = function() {
      return;
    };

    var error = function() {
      return;
    };

    window.plugins.calendar.createEventInteractively(title, location, notes, startDate, endDate, success, error);
  };

  $scope.submitComment = function(event) {
    event.preventDefault();

    var member_id = localStorage.getItem("member_id");

    var post = "member_id=" + member_id;
    post += "&product_id=" + $scope.product_id;
    post += "&comment=" + $scope.new_comment;

    comments_service.leaveComment(post).then(function(data) {
      window.vibrate(5);
      $.jnoty("Comment Left Successfully", {
        theme: 'success'
      });
      $scope.getComments();
      $scope.new_comment = "";
    }, function(err) {
      window.console.log(err);
    });
  };

  $scope.scrollTop = function() {
    $("html, body").animate({
      scrollTop: 0
    }, "fast");
  };

  $scope.init = (function() {
    $rootScope.$emit("featured", false);
    $rootScope.$emit("showback_button", true);
    menu_service.handleMenu();
    menu_service.handleSwiper();
    $scope.loadProduct();
    $scope.getSlideShow();
    $scope.getComments();
    $scope.scrollTop();
    window.randomInterstitial();
  })();

}

detailsController.$inject = ['$scope', '$rootScope', '$location', '$filter', 'comments_service', 'release_service', 'menu_service'];

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

function socialController($scope, $rootScope) {

  $scope.openLink = function($event, url) {
    $event.preventDefault();
    window.open(url, '_blank', 'location=yes');
  };

  $scope.init = (function() {
    $rootScope.$emit("featured", false);
    $rootScope.$emit("showback_button", true);
    window.randomInterstitial();
  })();
}

socialController.$inject = ['$scope', '$rootScope'];

function statsController($scope, $rootScope, account_service) {

  $scope.stats = false;

  $scope.getStats = function() {
  	$scope.show_loading = true

    var member_id = localStorage.getItem("member_id");
    if (member_id == "false" || member_id == 0 || member_id == null) {

      $scope.stats = {};

      $scope.stats.comment_count = 0;
      $scope.stats.release_alert_count = 0;
      $scope.stats.release_interest_count = 0;
      $scope.stats.restock_alert_count = 0;

      toastr.error("You need to be logged to view your stats");
      return false;
    }

  	var post = "member_id=" + member_id;

    account_service.getStats(post).then(
      function(data) {
        $scope.stats = data[0];
        $scope.show_loading = false;
      }, function(err) {
        alert(err);
      });
  };

  $scope.init = (function() {
  	$scope.getStats();
  	$rootScope.$emit("featured", false);
    $rootScope.$emit("showback_button", true);
    window.randomInterstitial();
  })();
}

socialController.$inject = ['$scope', '$rootScope', 'account_service'];

function salesController($scope, $rootScope, sales_service, menu_service) {

  $scope.products = [];
  $scope.show_loading = true;

  $scope.buyProduct = function(product) {
    window.open(product.link, '_blank', 'location=yes');
  };

  $scope.getSales = function() {
    sales_service.getSales();
  };

  $scope.formatPrice = function(product) {
    product.price = parseFloat(product.price).toFixed(2);
    return product;
  };

  $scope.init = (function() {
    $scope.getSales();

    $rootScope.$on('getSales', function(e, data) {
      $scope.sales = data;
      $scope.show_loading = false;
    });

    $rootScope.$emit("featured", false);
    $rootScope.$emit("showback_button", true);
    menu_service.handleMenu();
    menu_service.handleSwiper();
    window.randomInterstitial();
  })();
}

salesController.$inject = ['$scope', '$rootScope', 'sales_service', 'menu_service'];

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
    window.randomInterstitial();
    menu_service.handleMenu();
    menu_service.handleSwiper();
  })();
}

viewController.$inject = ['$scope', '$rootScope', 'news_service', 'menu_service'];

function storiesController($scope, $rootScope, $location, menu_service) {
  $scope.scrollPosition = 0;

  $scope.stories = [{
      'link': 'jordan-1',
      'name': 'Air Jordan 1'
    },
    {
      'link': 'jordan-2',
      'name': 'Air Jordan 2'
    },
    {
      'link': 'jordan-3',
      'name': 'Air Jordan 3'
    },
    {
      'link': 'jordan-4',
      'name': 'Air Jordan 4'
    },
    {
      'link': 'jordan-5',
      'name': 'Air Jordan 5'
    },
    {
      'link': 'jordan-6',
      'name': 'Air Jordan 6'
    },
    {
      'link': 'jordan-7',
      'name': 'Air Jordan 7'
    },
    {
      'link': 'jordan-8',
      'name': 'Air Jordan 8'
    },
    {
      'link': 'jordan-9',
      'name': 'Air Jordan 9'
    },
    {
      'link': 'jordan-10',
      'name': 'Air Jordan 10'
    },
    {
      'link': 'jordan-11',
      'name': 'Air Jordan 11'
    },
    {
      'link': 'jordan-12',
      'name': 'Air Jordan 12'
    },
    {
      'link': 'jordan-13',
      'name': 'Air Jordan 13'
    },
    {
      'link': 'jordan-14',
      'name': 'Air Jordan 14'
    },
    {
      'link': 'jordan-15',
      'name': 'Air Jordan 15'
    },
    {
      'link': 'jordan-16',
      'name': 'Air Jordan 16'
    },
    {
      'link': 'jordan-17',
      'name': 'Air Jordan 17'
    },
    {
      'link': 'jordan-18',
      'name': 'Air Jordan 18'
    },
    {
      'link': 'jordan-18-5',
      'name': 'Air Jordan 18.5'
    },
    {
      'link': 'jordan-19',
      'name': 'Air Jordan 19'
    },
    {
      'link': 'jordan-20',
      'name': 'Air Jordan 20'
    },
    {
      'link': 'jordan-21',
      'name': 'Air Jordan 21'
    },
    {
      'link': 'jordan-22',
      'name': 'Air Jordan 22'
    },
    {
      'link': 'jordan-23',
      'name': 'Air Jordan 23'
    },
    {
      'link': 'jordan-24',
      'name': 'Air Jordan 24'
    },
    {
      'link': 'jordan-25',
      'name': 'Air Jordan 25'
    },
    {
      'link': 'jordan-26',
      'name': 'Air Jordan 26'
    },
    {
      'link': 'jordan-27',
      'name': 'Air Jordan 27'
    },
    {
      'link': 'jordan-28',
      'name': 'Air Jordan 28'
    },
    {
      'link': 'jordan-29',
      'name': 'Air Jordan 29'
    },
    {
      'link': 'jordan-30',
      'name': 'Air Jordan 30'
    },
    {
      'link': 'jordan-31',
      'name': 'Air Jordan 31'
    },
  ];

  $scope.view = function(event, story) {
    event.preventDefault();
    $scope.scrollPosition = $("#pages_maincontent").scrollTop();
    localStorage.setItem("scrollPosition", $scope.scrollPosition);
    $location.path(story.link);
  };

  $scope.init = (function() {
    $rootScope.$emit("featured", false);
    $rootScope.$emit("showback_button", false);
    menu_service.handleMenu();
    menu_service.handleSwiper();
    window.randomInterstitial();
  })();
}

storiesController.$inject = ['$scope', '$rootScope', '$location', 'menu_service'];

function storyController($scope, $rootScope, menu_service)
{

    $scope.init = (function () {

      new Swiper('.slider-jordan', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay: 5000,
        loop: true
      });

	    $rootScope.$emit("featured", false);
	    $rootScope.$emit("showback_button", true);
	    window.randomInterstitial();
    })();
}

storyController.$inject = ['$scope', '$rootScope', 'menu_service'];

function storeItemController($scope, $rootScope, $routeParams, store_service, menu_service) {
  $scope.products = [];
  $scope.page = 10;
  $scope.show_loading = true;
  $scope.type = '';
  $scope.searchStr = '';
  $scope.searcher = {
    "sneakers": {
      name: ["nike sneakers", "adidas sneakers", "ysl sneakers", "mens jordans"],
      class: 'bg-shop-sneakers'
    },
    "clothing": {
      name: ["mens shirts", "stussy shirts", "mens sale shirts", "mens t-shirt", "nba jerseys"],
      class: 'bg-shop-clothes'
    },
    "accessories": {
      name: ["mens sunglasses", "mens backpack", "mens ray ban",  "cologne", "mens watches", "mens wallets"],
      class: 'bg-shop-accessories'
    },
    "sale": {
      name: ["mens sale", "mens sneaker sale", "mens clothing sale"],
      class: 'bg-shop-sales'
    },
  };

  $scope.buyProduct = function(event, product) {
    event.preventDefault();
    window.open(product.clickUrl, '_blank', 'location=yes');
  };

  $scope.getCache = function(functionName) {
    return false;

    var retrievedObject = localStorage.getItem(functionName);
    if (typeof retrievedObject === 'string' || typeof retrievedObject == undefined) {
      $scope.show_loading = false;
      return JSON.parse(retrievedObject);
    } else {
      return false;
    }
  };

  $scope.setCache = function(functionName, data) {
    localStorage.setItem(functionName, JSON.stringify(data));
  };

  $scope.search = function(search) {
    $scope.products = [];
    $scope.page = 10;
    $scope.searchStr = search;
    $scope.category = $scope.searchStr.replace("_", " ");
    var products = $scope.getCache(search);

    if (products !== false) {
      $scope.products = products;
      $scope.show_loading = false;
    } else {
      $scope.completeSearch(search);
    }
  };

  $scope.completeSearch = function(search) {
    store_service.search(search).then(function(data) {
      $scope.products = data;
      $scope.setCache(search, data);
      $scope.show_loading = false;
    }, function(err) {
      window.console.log(err);
    });
  };

  $scope.sortBy = function(field, reverse, primer) {
    var key = primer ?
      function(x) {
        return primer(x[field])
      } :
      function(x) {
        return x[field]
      };

    reverse = !reverse ? 1 : -1;

    return function(a, b) {
      return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
  }

  $scope.paginate = function() {
    $scope.show_loading = true;
    $scope.page = $scope.page + 20;
    var post = "search=" + $scope.searchStr;
    post += "&offset=" + $scope.page;

    store_service.paginate(post).then(function(data) {
      $scope.show_loading = false;
      $scope.completePaginate(data);
    }, function(err) {
      window.console.log(err);
    });
  }

  $scope.completePaginate = function(data) {
    for (var i = 0; i < data.length; i++) {
      $scope.products.push(data[i]);
    }
  };

  $scope.init = (function() {
    $scope.type = $routeParams.type;

    $rootScope.$emit("showback_button", true);
    $scope.searchStr = $scope.searcher[$scope.type].name;
    $scope.searchStr = $scope.searchStr[Math.floor(Math.random() * $scope.searchStr.length)];
    $scope.searchClass = $scope.searcher[$scope.type].class;
    $scope.search($scope.searchStr);
    menu_service.handleMenu();
    menu_service.handleSwiper();
    window.randomInterstitial();
  })();
}

storeItemController.$inject = ['$scope', '$rootScope', '$routeParams', 'store_service', 'menu_service'];

function loginController($scope, $rootScope, login_service, $location) {

  $scope.confirmation = "";
  $scope.showConfirmation = false;
  $scope.showLogin = true;

  $scope.toggleLogin = function() {
    member_id = localStorage.getItem("member_id");
    if (member_id == "false" || member_id == 0 || member_id == null) {
      $scope.showLogin = true;
    } else {
      $scope.username = localStorage.getItem("username");
      $scope.showLogin = false;
    }
  };

  $scope.logout = function() {
    localStorage.clear();
    $scope.toggleLogin();
  };

  $scope.doLogin = function($event, account) {
    $event.preventDefault();

    var post = "&username=" + account.email;
    post += "&password=" + account.password;

    login_service.login(post).then(function(data) {
      if (data !== "false" && data !== false && data.length !== 0) {
        localStorage.setItem("username", account.email);
        localStorage.setItem("member_id", data.id);
        $scope.toggleLogin();

        $.jnoty("You are now logged in", {
          theme: 'success'
        });
        $location.path('account');
      } else {

        $.jnoty("Incorrect username or password", {
          theme: 'error'
        });
      }
    }, function(err) {

    });

  };

  $scope.validateEmail = function(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  $scope.validateAccount = function(account) {
    if (account.username.length == 0 || account.password.length == 0 || account.phone_number.length == 0 || $scope.validateEmail(account.username) == false) {
      return false;
    } else {
      return true;
    }
  };

  $scope.register = function(newaccount) {
    var validated = $scope.validateAccount(newaccount);

    if (!validated) {
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
      $.jnoty("Incorrect information used", {
        theme: 'error'
      });

      return;
    } else {

      var post = "&username=" + newaccount.username;
      post += "&password=" + newaccount.password;
      post += "&phone=" + newaccount.phone_number;
      post += "&carrier=" + newaccount.carrier;

      login_service.createAccount(post).then(function(data) {
        $scope.showConfirmation = true;
        if (data !== "false" && data !== false && data.length !== 0) {
          localStorage.setItem("username", newaccount.username);
          localStorage.setItem("member_id", data);
          $.jnoty("Your account has been created", {
            theme: 'success'
          });
          $scope.toggleLogin();

        } else {
          $.jnoty("This username is already in use", {
            theme: 'error'
          });
        }
      }, function(err) {
        window.console.log(err);
      });

    }
  }

  $scope.init = (function() {
    $scope.toggleLogin();
    $rootScope.$emit("featured", false);
    $rootScope.$emit("showback_button", true);
    window.randomInterstitial();
  })();
}

function signupController($scope, $rootScope, login_service) {

  $scope.confirmation = "";
  $scope.showConfirmation = false;
  $scope.showLogin = true;

  $scope.toggleLogin = function() {
    member_id = localStorage.getItem("member_id");
    if (member_id == "false" || member_id == 0 || member_id == null) {
      $scope.showLogin = true;
    } else {
      $scope.username = localStorage.getItem("username");
      $scope.showLogin = false;
    }
  };

  $scope.logout = function() {
    localStorage.clear();
    $scope.toggleLogin();
  };

  $scope.validateEmail = function(email) {
    console.log(email);
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  $scope.validateAccount = function(account) {
    console.log(account);
    if (typeof account == 'undefined' || !account.hasOwnProperty('carrier') || !account.hasOwnProperty('username') || !account.hasOwnProperty('password') || !account.hasOwnProperty('phone_number')) {
      return false;
    }

    if (account.username.length == 0 || account.password.length == 0 || account.phone_number.length == 0 || $scope.validateEmail(account.username) == false) {
      return false;
    } else {
      return true;
    }
  };

  $scope.register = function(event, newaccount) {
    event.preventDefault();

    var validated = $scope.validateAccount(newaccount);

    if (!validated) {
      jQuery("html, body").animate({
        scrollTop: 0
      }, "slow");
      toastr.error("Missing information");
      return;
    } else {

      var post = "&username=" + newaccount.username;
      post += "&password=" + newaccount.password;
      post += "&phone=" + newaccount.phone_number;
      post += "&carrier=" + newaccount.carrier;

      login_service.createAccount(post).then(function(data) {
        $scope.showConfirmation = true;
        if (data !== "false" && data !== false && data.length !== 0) {
          localStorage.setItem("username", newaccount.username);
          localStorage.setItem("member_id", data);
          toastr.success("Your account has been created");
          $scope.toggleLogin();
        } else {
          toastr.success("This username is already in use");
        }
      }, function(err) {
        window.console.log(err);
      });

    }
  }

  $scope.init = (function() {
    $scope.toggleLogin();
    $rootScope.$emit("featured", false);
    $rootScope.$emit("showback_button", true);
    window.randomInterstitial();
  })();
}

loginController.$inject = ['$scope', '$rootScope', 'login_service'];
