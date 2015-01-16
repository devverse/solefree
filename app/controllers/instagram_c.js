function instagramController($scope, $rootScope, instagram_service, mixpanel_service) {

  $scope.images = [];

  $scope.getImages = function() {
    instagram_service.getImages().then(
      function(data) {
        $scope.images = data;
        mixpanel_service.trackEvent('Instagram feed fetched');
      }, function(err) {
        alert(err);
      });
  };

  $scope.init = (function() {
    $scope.getImages();
    $rootScope.$emit("featured", false);
  })();
}

instagramController.$inject = ['$scope', '$rootScope', 'instagram_service', 'mixpanel_service'];