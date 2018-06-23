function releasesController($scope, $rootScope, $filter, $location, release_service, menu_service) {

  $scope.coming = [];
  $scope.last_product_id = false;
  $scope.releases = [];
  $scope.showmsg = false;
  $scope.showerror = false;
  $scope.errorMessage = "";
  $scope.show_loading = true;
  $scope.show_coming = false;
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

  $scope.getReleases = function() {
    $scope.show_loading = true;

    release_service.getReleases().then(
      function(data) {
        $scope.releases = data;
        $scope.show_loading = false;
        $scope.releaseAddedAlert(data);
      }, function(err) {
        alert(err);
      });
  };

  $scope.getComingSoon = function() {
    release_service.getComingSoon().then(
      function(data) {
        $scope.coming = data;
        $scope.show_coming = true;
      }, function(err) {
        alert(err);
      });
  };

   $scope.filterReleases = function(product) {
    var releaseDate, today;

    product.showBuyLink = false;

    if (product.link.length > 2) {
      product.showBuyLink = true;
    }

    releaseDate = moment(product.release_date, "MMMM Do, YYYY").format('L');
    today = moment().format('L');

    if (today === releaseDate) {
      product.releasing_today = true;
    } else {
      product.releasing_today = false;
    }

    if (product.coming_soon === '1' && $scope.last_product_id != product.id) {
      $scope.last_product_id = product.id
      $scope.coming.push(product);
    } else if ($scope.last_product_id == product.id) {
      return;
    } else {
      return product;
    }
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
        toastr.success("Reminder added for " + product.name);
      },
      function(err) {
        alert(err);
      }
    );
  };

  $scope.releaseAddedAlert = function(data) {

    if (localStorage.getItem('release-date-id') == null) {
      localStorage.setItem('release-date-id', 4420);
    }

    var newReleases = 0;
    var newHigh = 0;
    var currentHigh = parseInt(localStorage.getItem('release-date-id'));

    for (var key in data) {
      for (var x = 0; x < data[key].length; x++) {
        if (data[key][x].id > currentHigh) {
          newHigh = data[key][x].id;
          currentHigh = newHigh
          newReleases++;
        }
      }
    }

    if (newReleases > 0) {
      toastr.success(newReleases + " New Releases Added");
      localStorage.setItem('release-date-id', newHigh);
    }
  };

  $scope.init = (function() {
    $scope.getReleases();
    //$rootScope.$emit("featured", true);
    $rootScope.$emit("showback_button", false);
    menu_service.handleMenu();
    // menu_service.handleSwiper();

    // set initial limit to say 30.
    $scope.renderLimit = 30;
    // bind this function with directive.
    $scope.updateLimit = function(value){
      if(value == 'bottom'){
        console.log('updateLimit xxx');
        $scope.contValue += 1;
        $scope.renderLimit += 30;
        console.log('here!!');
      }
    };

  })();
}

releasesController.$inject = ['$scope', '$rootScope', '$filter', '$location', 'release_service', 'menu_service'];
