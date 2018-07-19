function accountController($scope, $rootScope, $route, account_service, menu_service) {

  $scope.confirmation = "";
  $scope.showConfirmation = false;
  $scope.showError = false;

  $scope.updateAccount = function($event, account) {
    $event.preventDefault();

    member_id = localStorage.getItem("member_id");
    if (member_id == "false" || member_id == 0 || member_id == null) {
      $.jnoty("Your must be logged in to update your account", {
        theme: 'error'
      });
      return false;
    }

    var post = "member_id=" + member_id;
    post += "&username=" + account.email;
    post += "&phone=" + account.phone_number;
    post += "&carrier=" + account.carrier;

    if($("input[name='profile']:checked").is(':checked')) {
      post += "&profile=" + $("input[name='profile']:checked").val();
    }

    account_service.updateAccount(post).then(function(data) {
      $.jnoty("Your account has been udpated", {
        theme: 'success'
      });
      $route.reload();
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

    $.jnoty("Cache has been cleared", {
      theme: 'success'
    });
    localStorage.clear();

    localStorage.setItem("member_id", member_id);
    localStorage.setItem("username", username);
  };

  $scope.init = (function() {
    $scope.getAccount();
    $scope.showConfirmation = false;
    $rootScope.$emit("featured", false);
    $rootScope.$emit("showback_button", true);
    menu_service.handleMenu();
  })();
}
