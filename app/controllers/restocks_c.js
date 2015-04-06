function restocksController($scope, $rootScope, restock_service) {
    
  $scope.restocks = [];
  $scope.errorMessage = "";

  $scope.getRestocks = function() {
    $scope.showLoading = true;
    restock_service.getRestocks().then(function(data){
      $scope.restocks = data;
      $scope.showLoading = false;
    })
  };

  $scope.addReminder = function(product) {
    member_id = localStorage.getItem("member_id");

    if (member_id == "false" || member_id == 0 || member_id == null) {
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
      $().toastmessage('showErrorToast', "You must be logged for watching restocks");
      return;
    }

    restock_service.addAlert(product, member_id).then(
      function(data) {

        if (data.status == 'limit') {
          $("html, body").animate({
            scrollTop: 0
          }, "slow");
          $().toastmessage('showErrorToast', "You have reached the limit for watching restocks");
          $("html, body").animate({
            scrollTop: 0
          }, "slow");
        } else {
          $().toastmessage('showSuccessToast', "You are now watching " + product.name);
        }
      },
      function(err) {
        alert(err);
      }
    );
  }

  $scope.init = (function() {
    $scope.getRestocks();
    $rootScope.$emit("featured", false);
  })();

}

restocksController.$inject = ['$scope', '$rootScope', 'restock_service'];
