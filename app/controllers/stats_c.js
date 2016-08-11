function statsController($scope, $rootScope, account_service) {

  $scope.stats = false;

  $scope.getStats = function() {
  	$scope.show_loading = true

    var member_id = localStorage.getItem("member_id");
    if (member_id == "false" || member_id == 0 || member_id == null) {
      $().toastmessage('showErrorToast', "You need to be logged to view your stats");
      return false;
    }

  	var post = "member_id=" + member_id;

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