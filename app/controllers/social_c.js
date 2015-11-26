function socialController($scope, $rootScope) {

  $scope.init = (function() {
	$rootScope.$emit("featured", false);
    window.showBannerAd();
  })();
}

socialController.$inject = ['$scope', '$rootScope'];