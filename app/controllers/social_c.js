function socialController($scope, $rootScope) {

  $scope.openLink = function($event, url) {
  	$event.preventDefault();
    window.open(url, '_blank', 'location=yes');
  };

  $scope.init = (function() {
	$rootScope.$emit("featured", false);
	$rootScope.$emit("showback_button", true);
    window.showBannerAd();
  })();
}

socialController.$inject = ['$scope', '$rootScope'];