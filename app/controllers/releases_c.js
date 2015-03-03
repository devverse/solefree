function releasesController($scope, $rootScope, $filter, $location, release_service, mixpanel_service) {

  $scope.coming = [];
  $scope.last_product_id = false;
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
  })();
}

releasesController.$inject = ['$scope', '$rootScope', '$filter', '$location', 'release_service', 'mixpanel_service'];