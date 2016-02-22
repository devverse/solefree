function storeFinderController($scope, $rootScope, store_finder_service) {
  
  $scope.stores = false;
  $scope.search = '';
  $scope.show_loading = false;

  $scope.openLink = function($event, link) {
    event.preventDefault();
    
    window.open(link, '_blank', 'location=yes');
  };

  $scope.storeSearch = function(zipcode) {
    $scope.show_loading = true;
    $scope.stores = false;

    var post = "zipcode=" + zipcode;
    store_finder_service.search(post).then(
      function(data) {
        if (data.length == 0 || data.hasOwnProperty('error')) {
          $scope.show_loading = false;
        } else {
          var stores = [];
          for (var i =0; i < data.businesses.length; i++) {
            if (data.businesses[i].image_url) {
              stores.push(data.businesses[i]);
            } 
          }
          $scope.stores = stores;
          $scope.show_loading = false;
        }
      }, function(err) {
        alert(err);
      });
  };

  $scope.init = (function() {
    $rootScope.$emit("featured", false);
    $rootScope.$emit("showback_button", false);
    window.showBannerAd();
  })();
}

storeFinderController.$inject = ['$scope', '$rootScope', 'store_finder_service'];