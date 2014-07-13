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

  $scope.login = function(account) {
    var post = "&username=" + account.username;
    post += "&password=" + account.password;
    post += "&member_type=" + soleinsider.member_type;

    login_service.login(post).then(function(data) {
      if (data !== "false" && data !== false && data.length !== 0) {
        localStorage.setItem("username", account.username);
        localStorage.setItem("member_id", data.id);
        $scope.toggleLogin();
      } else {
        $scope.showConfirmation = true;
        $scope.confirmation = "Incorrect username or password";
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
      $scope.showConfirmation = true;
      $scope.confirmation = "Incorrect information";
      return;
    } else {

      var post = "&username=" + newaccount.username;
      post += "&password=" + newaccount.password;
      post += "&phone=" + newaccount.phone_number;
      post += "&carrier=" + newaccount.carrier;
      post += "&member_type=" + soleinsider.member_type;

      login_service.createAccount(post).then(function(data) {
        $scope.showConfirmation = true;
        if (data !== "false" && data !== false && data.length !== 0) {
          localStorage.setItem("username", newaccount.username);
          localStorage.setItem("member_id", data);
          $scope.confirmation = "Your account has been created";
          $scope.toggleLogin();
        } else {
          $scope.confirmation = "This username is already in use";
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