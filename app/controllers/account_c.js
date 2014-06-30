function accountController($scope, $rootScope,account_service)
{

	$scope.confirmation = "";
	$scope.showConfirmation = false;
	$scope.version = soleinsider.version;
	$scope.version_type = soleinsider.version_type;
	
	$scope.updateAccount = function(account){
		var post = "member_id=" + soleinsider.member_id;
			post += "&username=" + account.email;
			post += "&phone=" + account.phone_number;
			post += "&carrier=" + account.carrier;

		account_service.updateAccount(post).then(function (data) {
			$().toastmessage('showSuccessToast',"Your account has been updated");
			$scope.confirmation = "Your account has been updated";
			$scope.showConfirmation = true;
		}, function (err) {
			window.console.log(err);
		});
	};


	$scope.getAccount = function(){
		var post = "member_id=" + soleinsider.member_id;
		account_service.getAccount(post).then(function (data) {
			$scope.account = data;
		}, function (err) {
			window.console.log(err);
		});
	};

	$scope.clearCache = function(){	
		member_id = localStorage.getItem("member_id");
		username = localStorage.getItem("username");

		$().toastmessage('showSuccessToast',"Cache has been cleared");
		$scope.confirmation = "Cache has been cleared";
		$scope.showConfirmation = true;
    	localStorage.clear();

    	localStorage.setItem("member_id", member_id);
		localStorage.setItem("username", username);
	};

    $scope.init = (function ()
    {	
    	$scope.getAccount();
    	$scope.showConfirmation = false;
    	$rootScope.$emit("featured", false);
    })();
}