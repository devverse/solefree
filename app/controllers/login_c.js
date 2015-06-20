function loginController($scope, $rootScope, login_service) {

  $scope.confirmation = "";
  $scope.showConfirmation = false;
  $scope.showLogin = true;

  $scope.toggleLogin = function() {
    member_id = localStorage.getItem("member_id");
    if (member_id == "false" || member_id == 0 || member_id == null) {
      $scope.showLogin = true;
    } else {
      $scope.username = localStorage.getItem("username");
      $scope.showLogin = false;
    }
  };

  $scope.logout = function() {
    localStorage.clear();
    $scope.toggleLogin();
  };

  $scope.login = function(account, $event) {
    $event.preventDefault();

    var post = "&username=" + account.email;
    post += "&password=" + account.password;

    login_service.login(post).then(function(data) {
      if (data !== "false" && data !== false && data.length !== 0) {
        localStorage.setItem("username", account.email);
        localStorage.setItem("member_id", data.id);
        $scope.toggleLogin();
        jQuery().toastmessage('showSuccessToast', "You are now logged in");
      } else {
        alert('error');
        jQuery().toastmessage('showErrorToast', "Incorrect username or password");
      }
    }, function(err) {

    });

  };

  $scope.validateEmail = function(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  $scope.validateAccount = function(account) {
    if (account.username.length == 0 || account.password.length == 0 || account.phone_number.length == 0 || $scope.validateEmail(account.username) == false) {
      return false;
    } else {
      return true;
    }
  };

  $scope.register = function(newaccount) {
    var validated = $scope.validateAccount(newaccount);

    if (!validated) {
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
      $().toastmessage('showErrorToast', "Incorrect information used");
      return;
    } else {

      var post = "&username=" + newaccount.username;
      post += "&password=" + newaccount.password;
      post += "&phone=" + newaccount.phone_number;
      post += "&carrier=" + newaccount.carrier;

      login_service.createAccount(post).then(function(data) {
        $scope.showConfirmation = true;
        if (data !== "false" && data !== false && data.length !== 0) {
          localStorage.setItem("username", newaccount.username);
          localStorage.setItem("member_id", data);
          $().toastmessage('showErrorToast', "Your account has been created");
          $scope.toggleLogin();
        } else {
          $().toastmessage('showErrorToast', "This username is already in use");
        }
      }, function(err) {
        window.console.log(err);
      });

    }
  }

  $scope.init = (function() {
    $scope.toggleLogin();
    $rootScope.$emit("featured", false);
  })();
}

loginController.$inject = ['$scope', '$rootScope', 'login_service'];