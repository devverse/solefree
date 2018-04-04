function storeController($scope, $rootScope, menu_service) {

  $scope.init = (function() {
    menu_service.handleMenu();
  })();
}

storeController.$inject = ['$scope', '$rootScope', 'menu_service'];
