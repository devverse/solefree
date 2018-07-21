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

  $scope.addReminder = function(event, product) {
    event.preventDefault();
    $scope.addLocalNotification(product);
  };

  $scope.addLocalNotification = function(product) {

    var formatted = moment(product.release_date, 'MMMM Do, YYYY').format("ddd MMM DD YYYY 08:00") + ' GMT-0500 (EST)';
    formattedDate = new Date(formatted);


    alert(formattedDate);

    if (typeof cordova != "undefined") {
      alert("cordova defined!");
      alert(typeof cordova.plugins.notification)
      // cordova.plugins.notification.local.schedule({
      //   id: product.id,
      //   title: "Sneaker Release",
      //   text: product.name + " Releasing Today",
      //   at: formattedDate,
      //   led: "FF0000",
      //   sound: null,
      //   icon: "file://icons/push/logo.png"
      // });

      cordova.plugins.notification.local.schedule({
          title: 'My first notification',
          text: 'Thats pretty easy...',
          foreground: true
      });

      $.jnoty("Reminder saved for " + product.name, {
        theme: 'success'
      });

      window.vibrate(200);
    } else {
      $.jnoty("Failed to add reminder for " + product.name, {
        theme: 'error'
      });
      window.vibrate(200);
    }


  };

  $scope.sneakerRating = function(event, product, status) {
    event.preventDefault();

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
    }, function(err) {});
    window.vibrate(200);
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

    if (window.plugins) {
       window.plugins.socialsharing.share(
        '#SoleInsider ' + product.name,
        product.name,
        'http://soleinsider.com/products/' + product.image,
        null);
    } else {
      $.jnoty("Failed to share " + product.name, {
        theme: 'error'
      });
    }
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
      $.jnoty("Comment Left Successfully", {
        theme: 'success'
      });
      $scope.getComments();
      $scope.new_comment = "";
      window.vibrate(5);
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
