function socialController($scope, $rootScope) {

  $scope.openLink = function($event, url) {
  	$event.preventDefault();
    window.open(url, '_blank', 'location=yes');
  };

  $scope.init = (function() {
	$rootScope.$emit("featured", false);
    window.showBannerAd();
  })();
}

socialController.$inject = ['$scope', '$rootScope'];