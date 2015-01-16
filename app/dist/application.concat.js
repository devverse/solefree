var url = window.location.href;

if (url.indexOf("localhost") != -1) {
  var serviceURL = "http://localhost/sole-web/public";
} else {
  var serviceURL = "http://soleinsider.com/public";
}

var admin_url = 'app/';
var app_name = "SoleInsider Free";
var page_title = "SoleInsider Free";

var soleinsider = {};
soleinsider.base_url = serviceURL;
soleinsider.username = "";
soleinsider.member_id = '';
soleinsider.cache = false;
soleinsider.show_featured = true;
soleinsider.version = "4.6";
soleinsider.version_type = "free";
soleinsider.member_type = "free";
soleinsider.build = "android";

if (soleinsider.version_type == "free") {
  soleinsider.showads = false;
} else {
  soleinsider.showads = false;
}

function accountController($scope, $rootScope, account_service, mixpanel_service) {

  $scope.confirmation = "";
  $scope.showConfirmation = false;
  $scope.version = soleinsider.version;
  $scope.version_type = soleinsider.version_type;

  $scope.updateAccount = function(account) {

    var post = "member_id=" + soleinsider.member_id;
    post += "&username=" + account.email;
    post += "&phone=" + account.phone_number;
    post += "&carrier=" + account.carrier;

    account_service.updateAccount(post).then(function(data) {
      $().toastmessage('showSuccessToast', "Your account has been updated");
      $scope.confirmation = "Your account has been updated";
      $scope.showConfirmation = true;
      mixpanel_service.trackEvent('Account Updated');
    }, function(err) {
      window.console.log(err);
    });
  };


  $scope.getAccount = function() {
    var post = "member_id=" + soleinsider.member_id;
    account_service.getAccount(post).then(function(data) {
      $scope.account = data;
    }, function(err) {
      window.console.log(err);
    });
  };

  $scope.clearCache = function() {
    member_id = localStorage.getItem("member_id");
    username = localStorage.getItem("username");

    $().toastmessage('showSuccessToast', "Cache has been cleared");
    $scope.confirmation = "Cache has been cleared";
    $scope.showConfirmation = true;
    localStorage.clear();

    localStorage.setItem("member_id", member_id);
    localStorage.setItem("username", username);
    mixpanel_service.trackEvent('Cache Cleared');
  };

  $scope.init = (function() {
    mixpanel_service.trackEvent('Account page loaded');
    $scope.getAccount();
    $scope.showConfirmation = false;
    $rootScope.$emit("featured", false);
  })();
}

accountController.$inject = ['$scope', '$rootScope', 'account_service', 'mixpanel_service'];

function appController($scope, $rootScope, app_service, mixpanel_service) {

  $scope.message = "";
  $scope.showads = soleinsider.showads;
  $scope.show_featured = soleinsider.show_featured;

  $scope.buyProduct = function(product) {
    window.open(product.clickUrl, '_blank', 'location=yes');
    mixpanel_service.trackEvent('Featured product click');
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
    $scope.getMessages();
    $rootScope.$on('featured', function(e, status) {
      $scope.show_featured = status;
    });
  })();
}

appController.$inject = ['$scope', '$rootScope', 'app_service', 'mixpanel_service'];
function availController($scope, $rootScope, sales_service, cache_service, mixpanel_service) {

  $scope.products = [];

  $scope.getStillAvail = function() {
    $scope.products = cache_service.request("getStillAvail");
    mixpanel_service.trackEvent('Available products fetched');
  };

  $scope.buyProduct = function(product) {
    window.open(product.link, '_blank', 'location=yes');
    mixpanel_service.trackEvent('Available product click');
  };

  $scope.init = (function() {
    $scope.getStillAvail();

    $rootScope.$on('getStillAvail', function(e, data) {
      $scope.products = data;
    });

    $rootScope.$emit("featured", true);
  })();
}

availController.$inject = ['$scope', '$rootScope', 'sales_service', 'cache_service', 'mixpanel_service'];
var soleinsiderApp = angular.module('soleinsiderApp', []);

soleinsiderApp.config(['$httpProvider',
  function($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  }
]);

function clothingStoreController($scope, $rootScope, clothing_store_service, mixpanel_service) {
  $scope.app_name = app_name;
  $scope.page_title = page_title;
  $scope.products = [];
  $scope.category = "Best Sellers";
  $scope.page = 10;
  $scope.searchStr = "nike";

  $scope.buyProduct = function(product) {
    window.open(product.clickUrl, '_blank', 'location=yes');
    mixpanel_service.trackEvent('Clothing store product buy click');
  };

  $scope.getMenu = function() {
    clothing_store_service.getMenu().then(function(data) {
      data.sort(orderByNameAscending);
      $scope.menu = data;
    }, function(err) {
      window.console.log(err);
    });
  };

  $scope.getDefaultItems = function() {
    clothing_store_service.getDefaultItems().then(function(data) {
      $scope.products = data;
      $scope.showLoading = false;
      mixpanel_service.trackEvent('Get default clothing store items');
    }, function(err) {
      window.console.log(err);
    });
  };

  $scope.getCache = function(functionName) {
    var retrievedObject = localStorage.getItem(functionName);

    if (typeof retrievedObject === 'string' || typeof retrievedObject == undefined) {
      $scope.showLoading = false;
      return JSON.parse(retrievedObject);
    } else {
      return false;
    }
  };

  $scope.setCache = function(functionName, data) {
    localStorage.setItem(functionName, JSON.stringify(data));
  };

  $scope.search = function(search) {
    $scope.showLoading = true;
    $scope.page = 10;
    $scope.searchStr = search;
    $scope.category = $scope.searchStr.replace("_", " ");
    var products = $scope.getCache(search);

    if (products !== false) {
      $scope.products = products;
      $('#content-container').toggleClass('active');
      $('#sidemenu').toggleClass('active');
      setTimeout(function() {
        $('#sidemenu-container').toggleClass('active');
      }, 500);
      $scope.showLoading = false;
    } else {
      $scope.completeSearch(search);
    }
  };

  $scope.completeSearch = function(search) {
    $('#content-container').toggleClass('active');
    $('#sidemenu').toggleClass('active');
    setTimeout(function() {
      $('#sidemenu-container').toggleClass('active');
    }, 500);

    clothing_store_service.search(search).then(function(data) {
      $scope.products = data;
      $scope.setCache(search, data);
      $scope.showLoading = false;
      mixpanel_service.trackEvent('Get new clothing store products from menu');
    }, function(err) {
      window.console.log(err);
    });
  };

  function orderByNameAscending(a, b) {
    if (a.name == b.name) {
      return 0;
    } else if (a.name > b.name) {
      return 1;
    }

    return -1;
  };

  $scope.paginate = function() {
    $("html, body").animate({
      scrollTop: 0
    }, 10);

    $scope.showLoading = true;
    $scope.page = $scope.page + 20;
    var post = "search=" + $scope.searchStr;
    post += "&offset=" + $scope.page;

    clothing_store_service.paginate(post).then(function(data) {
      $scope.products = data;
      $scope.showLoading = false;
      mixpanel_service.trackEvent('Clothing store pagination');
    }, function(err) {
      window.console.log(err);
    });
  }

  $scope.init = (function() {
    $scope.getMenu();
    $scope.getDefaultItems();
    $rootScope.$emit("featured", true);
  })();
}

function couponsController($scope, $rootScope, cache_service, mixpanel_service) {

  $scope.getCoupons = function() {
    $scope.coupons = cache_service.request("getCoupons");
  };

  $scope.init = (function() {
    $scope.getCoupons();

    // Listeners
    $rootScope.$on('getCoupons', function(e, data) {
      $scope.coupons = data;
      $scope.showLoading = false;
      mixpanel_service.trackEvent('Coupons fetched');
    });

    $rootScope.$emit("featured", false);

  })();
}

couponsController.$inject = ['$scope', '$rootScope', 'cache_service', 'mixpanel_service'];
function detailsController($scope, $rootScope, $location, $filter, comments_service, release_service, mixpanel_service) {

  $scope.comments = [];
  $scope.slideshow = [];
  $scope.related = [];

  $scope.buyEbayProduct = function(url) {
    window.open(url, '_blank', 'location=yes');
    mixpanel_service.trackEvent('Ebay product purchase click');
  };

  $scope.showComments = function() {
    $scope.commentDisplay = true;
    $scope.relatedDisplay = false;
    mixpanel_service.trackEvent('Show comment click');
  };

  $scope.showRelatedItems = function() {
    $scope.commentDisplay = false;
    $scope.relatedDisplay = true;
    mixpanel_service.trackEvent('Show related items click');
  };

  $scope.getRelatedItems = function(product) {
    var keywords;

    if (product.description.length > 2) {
      keywords = product.description;
    } else {
      keywords = product.name;
    }

    release_service.getRelatedItems(keywords, product.id).then(function(data) {
      $scope.related = data;
    }, function(err) {
      window.console.log(err);
    });

  };

  $scope.loadProduct = function() {
    $scope.showRelatedItems();
    product = JSON.parse(localStorage.getItem("product_details"));

    product.showBuyLink = false;

    if (product.link.length > 2) {
      product.showBuyLink = true;
    }

    $scope.r = product;
    $scope.product_id = product.product_id;
    $scope.getRelatedItems(product);
  };

  $scope.getSlideShow = function() {
    var post = "&product_id=" + $scope.product_id;
    release_service.getSlideShow(post).then(function(data) {
      $scope.slideshow = data;
    }, function(err) {
      window.console.log(err);
    });
  };

  $scope.addReminder = function(product) {

    member_id = localStorage.getItem("member_id");
    if (member_id == "false" || member_id == 0 || member_id == null) {
      $scope.showerror = true;
      $scope.errorMessage = "You must be logged for reminders";
      return;
    }

    release_service.addReminder(product, member_id).then(
      function(data) {
        $scope.showmsg = true;
        $scope.showerror = false;
        $scope.sneakerName = product.name;
        $().toastmessage('showSuccessToast', "Reminder saved for " + product.name);
        mixpanel_service.trackEvent('Reminder Added for ' + product.name);
      },
      function(err) {
        alert(err);
      }
    );
  }

  $scope.sneakerRating = function(product, status) {
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

    release_service.sneakerRating(post).then(function(data) {
    }, function(err) {
      window.console.log(err);
    });
  };

  $scope.getComments = function(product) {
    var post = "&product_id=" + $scope.product_id;
    comments_service.getComments(post).then(function(data) {
      $scope.formatComments(data);
    }, function(err) {
      window.console.log(err);
    });
  };

  $scope.formatComments = function(comments) {
    for (var i = 0; i < comments.length; i++) {
      var formatted = moment.utc(comments[i].comment_date, "MM-DD-YYYY h:mm:ss");
      comments[i].comment_date = moment(formatted, "MM-DD-YYYY h:mm:ss").fromNow();
    }

    $scope.comments = comments;
  }

  $scope.share = function(product){
    mixpanel_service.trackEvent('Sneaker shared ' + product.name);
    return window.plugins.socialsharing.share(
      '#SoleInsider ' + product.name, 
      product.name, 
      'http://soleinsider.com/public/products/' + product.image,
       null);
  };

  $scope.addToCalender = function(product) {
    var startDate, endDate;
    var title = product.name;
    var location = "SoleInsider";
    
    var date = product.release_date_calendar;
    startDate =  new Date(date);
    endDate = new Date(date);

    var notes = product.name + " Releasing " + startDate;

    var success = function() {
      return;
    };

    var error = function() {
      return;
    };

    window.plugins.calendar.createEventInteractively(title, location, notes, startDate, endDate, success, error);
    mixpanel_service.trackEvent('Sneaker added to calendar ' + product.name);
  };

  $scope.submitComment = function() {
    var member_id = localStorage.getItem("member_id");

    var post = "member_id=" + member_id;
    post += "&product_id=" + $scope.product_id;
    post += "&comment=" + $scope.new_comment;

    comments_service.leaveComment(post).then(function(data) {
      $().toastmessage('showSuccessToast', "Comment saved!");
      $scope.getComments();
      $scope.new_comment = "";
      mixpanel_service.trackEvent('Comment submited');
    }, function(err) {
      window.console.log(err);
    });
  };

  $scope.init = (function() {
    $rootScope.$emit("featured", false);
    $scope.loadProduct();
    $scope.getSlideShow();
    $scope.getComments();
  })();

}

detailsController.$inject = ['$scope', '$rootScope', 'comments_service', 'release_service', 'mixpanel_service'];
function instagramController($scope, $rootScope, instagram_service, mixpanel_service) {

  $scope.images = [];

  $scope.getImages = function() {
    instagram_service.getImages().then(
      function(data) {
        $scope.images = data;
        mixpanel_service.trackEvent('Instagram feed fetched');
      }, function(err) {
        alert(err);
      });
  };

  $scope.init = (function() {
    $scope.getImages();
    $rootScope.$emit("featured", false);
  })();
}

instagramController.$inject = ['$scope', '$rootScope', 'instagram_service', 'mixpanel_service'];
function loginController($scope, $rootScope, login_service, mixpanel_service) {

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
    mixpanel_service.trackEvent('Logout');
  };

  $scope.login = function(account) {
    var post = "&username=" + account.username;
    post += "&password=" + account.password;
    post += "&member_type=" + soleinsider.member_type;

    login_service.login(post).then(function(data) {
      if (data !== "false" && data !== false && data.length !== 0) {
        localStorage.setItem("username", account.username);
        localStorage.setItem("member_id", data.id);
        $scope.toggleLogin();
        mixpanel_service.trackEvent('Succesful Login');
      } else {
        $scope.showConfirmation = true;
        $scope.confirmation = "Incorrect username or password";
        mixpanel_service.trackEvent('Incorrect Login');
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
      $scope.showConfirmation = true;
      $scope.confirmation = "Incorrect information";
      mixpanel_service.trackEvent('Registration Incorrect information Error');
      return;
    } else {

      var post = "&username=" + newaccount.username;
      post += "&password=" + newaccount.password;
      post += "&phone=" + newaccount.phone_number;
      post += "&carrier=" + newaccount.carrier;
      post += "&member_type=" + soleinsider.member_type;

      login_service.createAccount(post).then(function(data) {
        $scope.showConfirmation = true;
        if (data !== "false" && data !== false && data.length !== 0) {
          localStorage.setItem("username", newaccount.username);
          localStorage.setItem("member_id", data);
          $scope.confirmation = "Your account has been created";
          $scope.toggleLogin();
          mixpanel_service.trackEvent('Registration Complete');
        } else {
          $scope.confirmation = "This username is already in use";
          mixpanel_service.trackEvent('Registration Error, username in use');
        }
      }, function(err) {
        window.console.log(err);
      });

    }
  }

  $scope.init = (function() {
    $scope.toggleLogin();
    $rootScope.$emit("featured", false);
  })();
}

loginController.$inject = ['$scope', '$rootScope', 'login_service', 'mixpanel_service'];
function myReleasesController($scope, $rootScope, release_service, mixpanel_service) {
  $scope.releases = [];
  $scope.showerror = false;
  $scope.errorMessage = "";

  $scope.getMyReleases = function() {

    member_id = localStorage.getItem("member_id");
    if (member_id == "false" || member_id == 0 || member_id == null) {
      $scope.showerror = true;
      $scope.errorMessage = "You must be logged to view your releases";
      return;
    }

    release_service.getMyReleases();
  };

  $scope.deleteRelease = function(product) {
    release_service.deleteRelease(product).then(
      function(data) {
        $().toastmessage('showSuccessToast', "Reminder deleted for " + product.name);
      },
      function(err) {
        alert(err);
      }
    );
  };

  $scope.init = (function() {

    $scope.getMyReleases();

    // Listeners
    $rootScope.$on('getMyReleases', function(e, data) {
      $scope.releases = data;
      mixpanel_service.trackEvent('My releases fetched');
    });

    $rootScope.$on('deleteRelease', function(e, data) {
      $scope.getMyReleases();
      mixpanel_service.trackEvent('My releases item deleted');
    });

    $rootScope.$emit("featured", true);
  })();
}

myReleasesController.$inject = ['$scope', '$rootScope', 'release_service', 'mixpanel_service'];
function myRestocksController($scope, $rootScope, restock_service, mixpanel_service) {
  
  $scope.restocks = [];

  $scope.getRestocks = function() {
    member_id = localStorage.getItem("member_id");

    if (member_id == "false" || member_id == 0 || member_id == null) {
      $scope.showerror = true;
      $scope.errorMessage = "You must be logged to view your restocks";
      return;
    }

    restock_service.getMyRestocks();
  };

  $scope.deleteRestock = function(product) {
    restock_service.deleteRestock(product).then(
      function(data) {
        $().toastmessage('showSuccessToast', "You are no longer watching " + product.name);
      },
      function(err) {
        alert(err);
      }
    );
  };

  $scope.init = (function() {

    $scope.getRestocks();

    $rootScope.$on('getMyRestocks', function(e, data) {
      $scope.restocks = data;
      mixpanel_service.trackEvent('My restocks fetched');
    });

    $rootScope.$on('deleteRestock', function(e, data) {
      $scope.getRestocks();
      mixpanel_service.trackEvent('My restocks item deleted');
    });
    $rootScope.$emit("featured", false);
  })();
}

myRestocksController.$inject = ['$scope', '$rootScope', 'restock_service', 'mixpanel_service'];
function newsController($scope, $rootScope, $location, $filter, news_service, mixpanel_service) {
  $scope.news = [];

  $scope.getNews = function() {
    $scope.showLoading = true;
    news_service.getFeeds().then(
      function(data) {
        $scope.news = data;
        mixpanel_service.trackEvent('News feed fetched');
      }, function(err) {
        alert(err);
      });
  };

  $scope.init = (function() {
    $scope.getNews();
    $rootScope.$emit("featured", false);
  })();
}

newsController.$inject = ['$scope', '$rootScope', 'news_service', 'mixpanel_service'];
function pastReleasesController($scope, $rootScope, cache_service, mixpanel_service) {

  $scope.releases = [];
  $scope.showmsg = false;
  $scope.showerror = false;

  $scope.getPastReleases = function() {
    $scope.showLoading = true;
    $scope.releases = cache_service.request("pastReleaseDates");
  };

  $scope.init = (function() {
    $scope.getPastReleases();

    $rootScope.$on('pastReleaseDates', function(e, data) {
      $scope.releases = data;
      $scope.showLoading = false;
      mixpanel_service.trackEvent('Past releases fetched');
    });

    $rootScope.$emit("featured", true);
  })();

}

pastReleasesController.$inject = ['$scope', '$rootScope', 'release_service', 'mixpanel_service'];pastReleasesController.$inject = ['$scope', '$rootScope', 'release_service', 'mixpanel_service'];
function pastRestocksController($scope, $rootScope, restock_service, cache_service, mixpanel_service) {

  $scope.restocks = [];

  $scope.getPastRestocks = function() {
    $scope.showLoading = true;
    $scope.past_restocks = cache_service.request("getAvailabilityHistory");
  };

  $scope.init = (function() {
    $scope.getPastRestocks();

    $rootScope.$on('getAvailabilityHistory', function(e, data) {
      $scope.past_restocks = data;
      $scope.showLoading = false;
      mixpanel_service.trackEvent('Past restocks fetched');
    });
    $rootScope.$emit("featured", true);
  })();

}

pastRestocksController.$inject = ['$scope', '$rootScope', 'restock_service', 'mixpanel_service'];
function releasesController($scope, $rootScope, $filter, $location, release_service, mixpanel_service) {

  $scope.releases = [];
  $scope.showmsg = false;
  $scope.showerror = false;
  $scope.errorMessage = "";

  $scope.buyProduct = function(product) {
    window.open(product.link, '_blank', 'location=yes');
    mixpanel_service.trackEvent('Featured product click');
  };

  $scope.details = function(product) {
    localStorage.setItem("product_details", JSON.stringify(product));
    $location.path('/details')
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

  $scope.getReleases = function() {
    $scope.showLoading = true;
    release_service.getReleases().then(
      function(data) {
        $scope.releases = data;
      }, function(err) {
        alert(err);
      });
  };

  $scope.filterReleases = function(product) {
    product.showBuyLink = false;

    if (product.link.length > 2) {
      product.showBuyLink = true;
    }
    return product;
  };

  $scope.addReminder = function(product) {

    member_id = localStorage.getItem("member_id");
    if (member_id == "false" || member_id == 0 || member_id == null) {
      $scope.showerror = true;
      $scope.errorMessage = "You must be logged for reminders";
      return;
    } else {
      $scope.showerror = true;
      $scope.errorMessage = "Reminder added for " + product.name;
    }

    release_service.addReminder(product, member_id).then(
      function(data) {
        $scope.showmsg = true;
        $scope.sneakerName = product.name;
        window.plugins.toast.show("Reminder added for " + product.name, 'short', 'center', function(a) {
        mixpanel_service.trackEvent('Sneaker release reminder added');
        }, function(b) {
          alert('toast error: ' + b)
        })
      },
      function(err) {
        alert(err);
      }
    );
  }

  $scope.init = (function() {
    $scope.getReleases();
    $rootScope.$emit("featured", true);
    alert('loaded!!!!');
  })();
}

releasesController.$inject = ['$scope', '$rootScope', '$filter', '$location', 'release_service', 'mixpanel_service'];
function restocksController($scope, $rootScope, restock_service, mixpanel_service) {
    
  $scope.restocks = [];
  $scope.showmsg = false;
  $scope.showerror = false;
  $scope.errorMessage = "";

  $scope.getRestocks = function() {
    $scope.showLoading = true;
    restock_service.getRestocks();
  };

  $scope.addReminder = function(product) {
    member_id = localStorage.getItem("member_id");

    if (member_id == "false" || member_id == 0 || member_id == null) {
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
      $scope.showerror = true;
      $scope.errorMessage = "You must be logged for watching restocks";
      return;
    }

    restock_service.addAlert(product, member_id).then(
      function(data) {

        if (data.status == 'limit') {
          $("html, body").animate({
            scrollTop: 0
          }, "slow");
          $scope.showmsg = false;
          $scope.showerror = true;
          $scope.errorMessage = "Free accounts can only watch 6 restocks. Please purchase SoleInsider Premium in the app store for unlimited Watching";
          $("html, body").animate({
            scrollTop: 0
          }, "slow");
        } else {
          $scope.showmsg = true;
          $scope.success_message = "You are now watching " + product.name;
          $scope.showerror = false;
          $().toastmessage('showSuccessToast', "You are now watching " + product.name);
          mixpanel_service.trackEvent('Sneaker restock reminder added');
        }
      },
      function(err) {
        alert(err);
      }
    );
  }

  $scope.init = (function() {
    $scope.getRestocks();

    $rootScope.$on('productsChecks', function(e, data) {
      $scope.restocks = data;
      $scope.showLoading = false;
      mixpanel_service.trackEvent('Sneaker restocks fetched');
    });

    $rootScope.$emit("featured", false);
  })();

}

restocksController.$inject = ['$scope', '$rootScope', 'restock_service', 'mixpanel_service'];

function salesController($scope, $rootScope, sales_service, mixpanel_service) {

  $scope.products = [];

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
      mixpanel_service.trackEvent('Sales items fetched');
    });

    $rootScope.$emit("featured", true);

  })();
}

salesController.$inject = ['$scope', '$rootScope', 'sales_service', 'mixpanel_service'];
var soleinsiderApp = angular.module('soleinsiderApp', []);

soleinsiderApp.config(['$httpProvider',
  function($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  }
]);

function storeController($scope, $rootScope, store_service, mixpanel_service) {
  $scope.app_name = app_name;
  $scope.page_title = page_title;
  $scope.products = [];
  $scope.category = "Best Sellers";
  $scope.page = 10;
  $scope.searchStr = "nike";

  $scope.buyProduct = function(product) {
    window.open(product.clickUrl, '_blank', 'location=yes');
  };

  $scope.getMenu = function() {
    store_service.getMenu().then(function(data) {
      data.sort(orderByNameAscending);
      $scope.menu = data;
    }, function(err) {
      window.console.log(err);
    });
  };

  $scope.getDefaultItems = function() {
    store_service.getDefaultItems().then(function(data) {
      $scope.products = data;
      $scope.showLoading = false;
      mixpanel_service.trackEvent('Get default sneaker store items');
    }, function(err) {
      window.console.log(err);
    });
  };

  $scope.getCache = function(functionName) {
    var retrievedObject = localStorage.getItem(functionName);
    if (typeof retrievedObject === 'string' || typeof retrievedObject == undefined) {
      $scope.showLoading = false;
      return JSON.parse(retrievedObject);
    } else {
      return false;
    }
  };

  $scope.setCache = function(functionName, data) {
    localStorage.setItem(functionName, JSON.stringify(data));
  };

  $scope.search = function(search) {
    $scope.showLoading = true;
    $scope.page = 10;
    $scope.searchStr = search;
    $scope.category = $scope.searchStr.replace("_", " ");
    var products = $scope.getCache(search);

    if (products !== false) {
      $scope.products = products;
      $('#content-container').toggleClass('active');
      $('#sidemenu').toggleClass('active');
      setTimeout(function() {
        $('#sidemenu-container').toggleClass('active');
      }, 500);
      $scope.showLoading = false;
    } else {
      $scope.completeSearch(search);
    }
  };

  $scope.completeSearch = function(search) {

    $('#content-container').toggleClass('active');
    $('#sidemenu').toggleClass('active');
    setTimeout(function() {
      $('#sidemenu-container').toggleClass('active');
    }, 500);

    store_service.search(search).then(function(data) {
      $scope.products = data;
      $scope.setCache(search, data);
      $scope.showLoading = false;
      mixpanel_service.trackEvent('Get new sneaker store products from menu');
    }, function(err) {
      window.console.log(err);
    });
  };

  function orderByNameAscending(a, b) {
    if (a.name == b.name) {
      return 0;
    } else if (a.name > b.name) {
      return 1;
    }

    return -1;
  };

  $scope.paginate = function() {

    $("html, body").animate({
      scrollTop: 0
    }, 10);

    $scope.showLoading = true;
    $scope.page = $scope.page + 20;
    var post = "search=" + $scope.searchStr;
    post += "&offset=" + $scope.page;

    store_service.paginate(post).then(function(data) {
      $scope.products = data;
      $scope.showLoading = false;
      mixpanel_service.trackEvent('Sneaker store pagination');
    }, function(err) {
      window.console.log(err);
    });
  }

  $scope.init = (function() {
    $scope.getMenu();
    $scope.getDefaultItems();
    $rootScope.$emit("featured", true);
  })();
}

storeController.$inject = ['$scope', '$rootScope', 'store_service', 'mixpanel_service'];
function storeFinderController($scope, $rootScope, store_finder_service, mixpanel_service) {
  
  $scope.stores = false;
  $scope.search = '';

  $scope.storeSearch = function(zipcode) {
    var post = "zipcode=" + zipcode;
    store_finder_service.search(post).then(
      function(data) {
        if (data.length == 0 || data.hasOwnProperty('error')) {
          $scope.stores = [];
        } else {
          var stores = [];
          for (var i =0; i < data.businesses.length; i++) {
            if (data.businesses[i].image_url) {
              stores.push(data.businesses[i]);
              console.log(data.businesses[i]);
            } 
          }
          $scope.stores = stores;
        }
      }, function(err) {
        alert(err);
      });
  };

  $scope.init = (function() {
    $rootScope.$emit("featured", false);
  })();
}

storeFinderController.$inject = ['$scope', '$rootScope', 'store_finder_service', 'mixpanel_service'];
function twitterWatcherController($scope, $rootScope, twitter_service, mixpanel_service) {

  $scope.showConfirmation = false;
  $scope.member_id = localStorage.getItem("member_id");

  $scope.twitterAccounts = function() {
    twitter_service.getTwitterAccounts().then(
      function(data) {
        $scope.accounts = data;
      }, function(err) {
        alert(err);
      });
  };

  $scope.getMemberTwitterWatching = function() {
    var post = "member_id=" + $scope.member_id;
    twitter_service.getMemberTwitterWatching(post).then(
      function(data) {
        $scope.watching = data;
      }, function(err) {
        alert(err);
      });
  };

  $scope.addToWatch = function(feed) {
    if ($scope.member_id == "false" || $scope.member_id == 0 || $scope.member_id == null) {
      $scope.showerror = true;
      $scope.errorMessage = "You must be logged for this feature";
      return;
    }

    var post = "member_id=" + localStorage.getItem("member_id");
    post += "&feed_id=" + feed.id;

    twitter_service.addToWatch(post).then(
      function(data) {
        $scope.showConfirmation = true;
        $scope.getMemberTwitterWatching();
      }, function(err) {
        alert(err);
      });
  };

  $scope.removeFromWatch = function(feed) {
    var post = "member_id=" + localStorage.getItem("member_id");
    post += "&feed_id=" + feed.id

    twitter_service.removeFromWatch(post).then(
      function(data) {
        $scope.showConfirmation = true;
        $scope.getMemberTwitterWatching();
      }, function(err) {
        alert(err);
      });
  };

  $scope.init = (function() {
    $scope.twitterAccounts();
    $scope.getMemberTwitterWatching();
    $rootScope.$emit("featured", false);
  })();
}

twitterWatcherController.$inject = ['$scope', '$rootScope', 'twitter_service', 'mixpanel_service'];
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

    return {

      getAccount: function(post) {
        return self.getAccount(post);
      },

      updateAccount: function(post) {
        return self.updateAccount(post);
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
soleinsiderApp.factory('cache_service', ['$rootScope', '$q', '$http',
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

    self.request = function(endpoint, post) {
      url = "/mobile/" + endpoint;
      self.makePost(url).then(
        function(data) {
          self.setCache(endpoint, data);
          $rootScope.$broadcast(endpoint, data);
          return data;
        }, function(err) {
          alert(err);
        });
    };


    self.getCache = function(endpoint, post) {

      var retrievedObject = localStorage.getItem(endpoint);
      if (typeof retrievedObject === 'string' || typeof retrievedObject == undefined) {
        data = JSON.parse(retrievedObject);
        $rootScope.$broadcast(endpoint, data);
        return data;
      } else {
        url = "/mobile/" + endpoint;
        self.makePost(url).then(
          function(data) {
            self.setCache(endpoint, data);
            $rootScope.$broadcast(endpoint, data);
            return data;
          }, function(err) {
            alert(err);
          });
      }

    };

    self.setCache = function(endpoint, data) {
      localStorage.setItem(endpoint, JSON.stringify(data));
    };

    self.closePanel = function() {
      $('#content-container').toggleClass('active');
      $('#sidemenu').toggleClass('active');
      setTimeout(function() {
        $('#sidemenu-container').toggleClass('active');
      }, 500);
    };

    return {
      /**
       * Make Post request
       * @param  {[type]} endpoint [description]
       * @param  {[type]} post     [description]
       * @return ngpromise         [description]
       */
      request: function(endpoint, post) {

        if (soleinsider.cache == true) {
          return self.getCache(endpoint, post);
        } else {
          return self.request(endpoint, post);
        }

      },

      closePanel: function() {
        return self.closePanel();
      }
    };

  }
]);
soleinsiderApp.factory('clothing_store_service', ['$rootScope', '$q', '$http',
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

    self.getMenu = function() {
      return self.makePost('/clothing/getMenu');
    };

    self.search = function(search) {
      var post = "search=" + search;
      return self.makePost('/clothing/search', post);
    };

    self.paginate = function(post) {
      return self.makePost('/clothing/paginate', post);
    };

    self.getDefaultItems = function() {
      return self.makePost('/clothing/getDefaultItems', '');
    };

    return {
      getMenu: function() {
        return self.getMenu();
      },

      search: function(search) {
        return self.search(search);
      },

      getDefaultItems: function() {
        return self.getDefaultItems();
      },
      paginate: function(post) {
        return self.paginate(post);
      }
    };
  }
]);

soleinsiderApp.factory('comments_service', ['util_service', '$rootScope', '$q', '$http',
  function(util_service, $rootScope, $q, $http) {

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

    return {

      leaveComment: function(post) {
        return self.leaveComment(post);
      },

      getComments: function(post) {
        return self.getComments(post);
      }
    };

  }
]);
soleinsiderApp.factory('instagram_service', ['$rootScope', '$q', '$http',
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

    self.getInstagramImages = function() {
      return self.makePost('/mobile/instagram');
    };

    return {
      getImages: function() {
        return self.getInstagramImages();
      }
    };
  }
]);
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
      init: function() {

      },

      login: function(post) {
        return self.login(post);
      },

      createAccount: function(post) {
        return self.createAccount(post);
      }
    };

  }
]);
soleinsiderApp.factory('mixpanel_service',  ['$rootScope',
  function() {

    var self = this;

    self.trackEvent = function(event) {
      mixpanel.track("Mobile App: " + event);
    };

    return {
      trackEvent: function(event) {
        return self.trackEvent(event);
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

    return {

      getFeeds: function() {
        return self.getFeeds();
      },
    };

  }
]);
soleinsiderApp.factory('release_service', ['util_service', '$rootScope', '$q', '$http',
  function(util_service, $rootScope, $q, $http) {

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
      return self.makePost('/mobile/releaseDatesFormatted');
    };

    self.getPastReleases = function() {
      return self.makePost('/mobile/pastReleaseDates').then(
        function(data) {
          $rootScope.$broadcast('getPastReleases', data);
        }, function(err) {
          alert(err);
        });
    };

    self.addReminder = function(product, member_id) {

      var data = "product_id=" + product.id;
      data += "&member_id=" + member_id;

      return self.makePost('/mobile/addReleaseAlert', data);
    };

    self.getMyReleases = function() {
      var data = "member_id=" + localStorage.getItem("member_id");

      return self.makePost('/mobile/getMyReleases', data).then(
        function(data) {
          $rootScope.$broadcast('getMyReleases', data);
        }, function(err) {
          alert(err);
        });
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

      getPastReleases: function() {
        return self.getPastReleases();
      },

      getReleases: function() {
        return self.getReleases();
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
soleinsiderApp.factory('restock_service', ['util_service', '$rootScope', '$q', '$http',
  function(util_service, $rootScope, $q, $http) {

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

      return self.makePost('/mobile/getAvailabilityHistory').then(

        function(data) {
          $rootScope.$broadcast('getPastRestocks', data);
        }, function(err) {
          alert(err);
        });
    };

    self.getRestocks = function() {
      return self.makePost('/mobile/productsChecks').then(

        function(data) {
          $rootScope.$broadcast('getRestocks', data);
        }, function(err) {
          alert(err);
        });
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
soleinsiderApp.factory('store_finder_service', ['$rootScope', '$q', '$http',
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

    self.search = function(post) {
      return self.makePost('/mobile/storeLocationSearch', post);
    };

    return {
      search: function(post) {
        return self.search(post);
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

    self.getMenu = function() {
      return self.makePost('/store/getMenu');
    };

    self.search = function(search) {
      var post = "search=" + search;
      return self.makePost('/store/search', post);
    };

    self.paginate = function(post) {
      return self.makePost('/store/paginate', post);
    };

    self.getDefaultItems = function() {
      return self.makePost('/store/getDefaultItems', '');
    };

    return {
      getMenu: function() {
        return self.getMenu();
      },

      search: function(search) {
        return self.search(search);
      },

      getDefaultItems: function() {
        return self.getDefaultItems();
      },
      paginate: function(post) {
        return self.paginate(post);
      }
    };
  }
]);
soleinsiderApp.factory('twitter_service', ['$rootScope', '$q', '$http',
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


    self.getTwitterAccounts = function() {
      return self.makePost('/mobile/getTwitterFeeds');
    };

    self.getMemberTwitterWatching = function(post) {
      return self.makePost('/mobile/getMemberTwitterWatching', post);
    };

    self.addToWatch = function(post) {
      return self.makePost('/mobile/watchTwitterAccount', post);
    }
    self.removeFromWatch = function(post) {
      return self.makePost('/mobile/removeMemberTwitterWatching', post);
    }

    return {
      init: function() {

      },

      getTwitterAccounts: function() {
        return self.getTwitterAccounts();
      },
      getMemberTwitterWatching: function(post) {
        return self.getMemberTwitterWatching(post);
      },
      addToWatch: function(post) {
        return self.addToWatch(post);
      },
      removeFromWatch: function(post) {
        return self.removeFromWatch(post);
      }

    };

  }
]);
soleinsiderApp.factory('util_service', ['$http', '$q',
  function($http, $q) {

    var api = soleinsider.base_url;

    self.request = function(endpoint, post) {

      post = (!post) ? {} : post;
      if (!endpoint) {
        window.alert("bad endpoint");
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

    return {
      /**
       * Make Post request
       * @param  {[type]} endpoint [description]
       * @param  {[type]} post     [description]
       * @return ngpromise         [description]
       */
      request: function(endpoint, post) {
        return self.request(endpoint, post);
      }
    };

  }
]);
