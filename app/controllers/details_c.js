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