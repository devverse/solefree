function instagramController($scope, $rootScope, instagram_service) {

  $scope.images = [];
  $scope.show_loading = true;

  $scope.menu = [
    {'hash' : 'adidasboost', 'name' : 'Adidas'},
    {'hash' : 'lebrons', 'name' : 'Lebrons'},
    {'hash' : 'jordans', 'name' : 'Jordans'},
    {'hash' : 'Yeezyboost', 'name' : 'Yeezy'},
    {'hash' : 'soleinsider', 'name' : 'SoleInsider'},
    {'hash' : 'Supreme', 'name' : 'Supreme'},
    {'hash' : 'Kith', 'name' : 'Kith'},
    {'hash' : 'walklikeus', 'name' : 'Walk Like Us'},
    {'hash' : 'Sneakerhead', 'name' : 'Sneakerhead'},
  ];

  $scope.getImagesByHash = function(hash) {
    $scope.images = [];
    $scope.show_loading = true;
    
    var data = "hash=" + hash;
    instagram_service.getImagesByHash(data).then(
      function(data) {
        $scope.images = data;
        $scope.show_loading = false;
      }, function(err) {
        alert(err);
      });
  };

  $scope.getImages = function() {
    instagram_service.getImages().then(
      function(data) {
        $scope.images = data;
        $scope.show_loading = false;
      }, function(err) {
        alert(err);
      });
  };

  $scope.init = (function() {
    $scope.getImages();
    $rootScope.$emit("featured", false);
    window.showBannerAd();
  })();
}

instagramController.$inject = ['$scope', '$rootScope', 'instagram_service'];