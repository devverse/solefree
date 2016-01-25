function statsController($scope, $rootScope, account_service) {

  $scope.stats = false;

  $scope.getStats = function() {
  	$scope.show_loading = true

  	var post = "member_id=" + soleinsider.member_id;
    account_service.getStats(post).then(
      function(data) {
        $scope.stats = data[0];
        $scope.show_loading = false;
      }, function(err) {
        alert(err);
      });
  };

  $scope.init = (function() {
  	$scope.getStats();
  	$rootScope.$emit("featured", false);
    $rootScope.$emit("showback_button", true);
  })();
}

socialController.$inject = ['$scope', '$rootScope', 'account_service'];