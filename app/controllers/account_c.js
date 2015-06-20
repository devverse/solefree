function accountController($scope, $rootScope, account_service) {

  $scope.confirmation = "";
  $scope.showConfirmation = false;
  $scope.version = soleinsider.version;
  $scope.showError = false;

  $scope.updateAccount = function(account) {
    member_id = localStorage.getItem("member_id");
    if (member_id == "false" || member_id == 0 || member_id == null) {
      $().toastmessage('showErrorToast', "You need to be logged to update your account");
      return false;
    }

    var post = "member_id=" + soleinsider.member_id;
    post += "&username=" + account.email;
    post += "&phone=" + account.phone_number;
    post += "&carrier=" + account.carrier;

    account_service.updateAccount(post).then(function(data) {
      $().toastmessage('showSuccessToast', "Your account has been udpated");
    }, function(err) {
      window.console.log(err);
    });
  };

  $scope.getAccount = function() {
    member_id = localStorage.getItem("member_id");
    if (member_id == "false" || member_id == 0 || member_id == null) {
      $scope.showError = true;
      return;
    }

    var post = "member_id=" + member_id;
    account_service.getAccount(post).then(function(data) {
      $scope.account = data;
      $scope.showError = false;
    }, function(err) {
      window.console.log(err);
    });
  };

  $scope.clearCache = function() {
    member_id = localStorage.getItem("member_id");
    username = localStorage.getItem("username");

    $().toastmessage('showSuccessToast', "Cache has been cleared");
    localStorage.clear();

    localStorage.setItem("member_id", member_id);
    localStorage.setItem("username", username);
  };

  $scope.init = (function() {
    $scope.getAccount();
    $scope.showConfirmation = false;
    $rootScope.$emit("featured", false);
  })();
}

accountController.$inject = ['$scope', '$rootScope', 'account_service'];
