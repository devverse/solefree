function restocksController($scope, $rootScope, restock_service, mixpanel_service) {
    
  $scope.restocks = [];
  $scope.showmsg = false;
  $scope.showerror = false;
  $scope.errorMessage = "";

  $scope.getRestocks = function() {
    $scope.showLoading = true;
    restock_service.getRestocks();
  };

  $scope.addReminder = function(product) {
    member_id = localStorage.getItem("member_id");

    if (member_id == "false" || member_id == 0 || member_id == null) {
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
      $scope.showerror = true;
      $scope.errorMessage = "You must be logged for watching restocks";
      return;
    }

    restock_service.addAlert(product, member_id).then(
      function(data) {

        if (data.status == 'limit') {
          $("html, body").animate({
            scrollTop: 0
          }, "slow");
          $scope.showmsg = false;
          $scope.showerror = true;
          $scope.errorMessage = "Free accounts can only watch 6 restocks. Please purchase SoleInsider Premium in the app store for unlimited Watching";
          $("html, body").animate({
            scrollTop: 0
          }, "slow");
        } else {
          $scope.showmsg = true;
          $scope.success_message = "You are now watching " + product.name;
          $scope.showerror = false;
          $().toastmessage('showSuccessToast', "You are now watching " + product.name);
          mixpanel_service.trackEvent('Sneaker restock reminder added');
        }
      },
      function(err) {
        alert(err);
      }
    );
  }

  $scope.init = (function() {
    $scope.getRestocks();

    $rootScope.$on('productsChecks', function(e, data) {
      $scope.restocks = data;
      $scope.showLoading = false;
      mixpanel_service.trackEvent('Sneaker restocks fetched');
    });

    $rootScope.$emit("featured", false);
  })();

}