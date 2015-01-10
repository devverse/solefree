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