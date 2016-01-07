function moreController($scope, $rootScope) {

  $scope.init = (function() {
  	$rootScope.$emit("featured", false);
    $rootScope.$emit("showback_button", true);
  })();
}

socialController.$inject = ['$scope', '$rootScope'];