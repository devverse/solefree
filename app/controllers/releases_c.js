function releasesController($scope, $rootScope, $filter, $location, release_service, menu_service) {

  var last_product_id = false;

  $scope.coming = [];
  $scope.releases = [];
  $scope.showmsg = false;
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

    if (product.coming_soon === '1' &&  last_product_id != product.id) {
      last_product_id = product.id
      $scope.coming.push(product);
    } else if (last_product_id == product.id) {
      return;
    } else {
      return product;
    }
  };

  $scope.init = (function() {
    $scope.getReleases();
    //$rootScope.$emit("featured", true);
    $rootScope.$emit("showback_button", false);
    menu_service.handleMenu();
    // menu_service.handleSwiper();
  })();
}

releasesController.$inject = ['$scope', '$rootScope', '$filter', '$location', 'release_service', 'menu_service'];
