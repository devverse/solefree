function storeController($scope, $rootScope, menu_service) {
  $scope.init = (function() {
    menu_service.handleMenu();
    $rootScope.$emit("showback_button", false);
    window.randomInterstitial();
  })();
}

storeController.$inject = ['$scope', '$rootScope', 'menu_service'];
