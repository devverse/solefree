function loginController($scope, $rootScope,login_service)
{

	$scope.confirmation = "";
	$scope.showConfirmation = false;

	$scope.login = function(account){
		var post = "&username=" + account.username;
		post += "&password=" + account.password;

		login_service.login(post).then(function (data) {


			$scope.showConfirmation = true;
			if (data !== "false" && data !== false && data.length !== 0){
				console.log(data);
				localStorage.setItem("username", account.username);
				localStorage.setItem("member_id", data.id);
				$scope.confirmation = "Your account have been logged in";
			} else{
				$scope.confirmation = "Incorrect username or password";
			}
		}, function (err) {
			
		});

	};

	$scope.register = function(newaccount){

		var post = "&username=" + newaccount.username;
			post += "&password=" + newaccount.password;
			post += "&phone=" + newaccount.phone_number;
			post += "&carrier=" + newaccount.carrier;

		login_service.createAccount(post).then(function (data) {
			$scope.showConfirmation = true;
			if (data !== "false" && data !== false && data.length !== 0){
				localStorage.setItem("username", newaccount.username);
				localStorage.setItem("member_id", data);
				$scope.confirmation = "Your account have been created";
			} else{
				$scope.confirmation = "This username is already in use";
			}
		}, function (err) {
			window.console.log(err);
		});


	}

    $scope.init = (function ()
    {
    	
    })();

}