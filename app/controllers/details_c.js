function detailsController($scope, $rootScope, $location, $filter, comments_service, release_service) {

  $scope.comments = [];
  $scope.slideshow = [];

  $scope.buyEbayProduct = function(url) {
    window.open(url, '_blank', 'location=yes');
  };

  $scope.buyProduct = function(product) {
    window.open(product.link, '_blank', 'location=yes');
  };

  $scope.showComments = function() {
    $scope.commentDisplay = true;
    $scope.relatedDisplay = false;
  };

  $scope.showRelatedItems = function() {
    $scope.commentDisplay = false;
    $scope.relatedDisplay = true;
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

  $scope.numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  $scope.loadProduct = function() {
    $scope.showRelatedItems();
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
      });
    }
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
      toastr.error("You must be logged for reminders");
      return;
    }

    release_service.addReminder(product, member_id).then(
      function(data) {
        $scope.showmsg = true;
        $scope.showerror = false;
        $scope.sneakerName = product.name;
        $scope.addLocalNotification(product);
        toastr.success("Reminder saved for " + product.name);
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
  };

  $scope.submitComment = function(event) {
    event.preventDefault();

    var member_id = localStorage.getItem("member_id");

    var post = "member_id=" + member_id;
    post += "&product_id=" + $scope.product_id;
    post += "&comment=" + $scope.new_comment;

    comments_service.leaveComment(post).then(function(data) {
      toastr.success("Comment posted!");
      $scope.getComments();
      $scope.new_comment = "";
    }, function(err) {
      window.console.log(err);
    });
  };

  $scope.init = (function() {
    $rootScope.$emit("featured", false);
    $rootScope.$emit("showback_button", true);
    $scope.loadProduct();
    $scope.getSlideShow();
    $scope.getComments();
    window.removeBannerAd();
    $scope.build = soleinsider.build;
  })();

}

detailsController.$inject = ['$scope', '$rootScope', '$location', '$filter', 'comments_service', 'release_service'];