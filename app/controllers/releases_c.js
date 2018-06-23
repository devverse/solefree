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

    State.formData.releases.then(
      function(data) {
        $scope.releases = data;
        $scope.show_loading = false;

        var randomProduct =  data[Math.floor(Math.random() * data.length)];
        $scope.header = randomProduct.image;

      }, function(err) {
        alert(err);
      });
  };


  $scope.init = (function() {
    getReleases();
    //$rootScope.$emit("featured", true);
    $rootScope.$emit("showback_button", false);
    menu_service.handleMenu();
    // menu_service.handleSwiper();


  })();
}

releasesController.$inject = ['$scope', '$rootScope', '$filter', '$location', 'release_service', 'menu_service', 'State'];
