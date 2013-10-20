function accountController($scope, $rootScope,account_service)
{

	$scope.confirmation = "";
	$scope.showConfirmation = false;

	$scope.updateAccount = function(account){
		var post = "member_id=" + soleinsider.member_id;
			post += "username=" + account.email;
			post += "phone=" + account.phone_number;
			post += "carrier=" + account.carrier;

			console.log(account);
	};


	$scope.getAccount = function(){
		var post = "member_id=" + 2;
		account_service.getAccount(post).then(function (data) {
			$scope.account = data;
		}, function (err) {
			window.console.log(err);
		});
	};

	$scope.clearCache = function(){	
		$scope.confirmation = "Cache has been cleared";
		$scope.showConfirmation = true;
    	localStorage.clear();
	};

    $scope.init = (function ()
    {	
    	$scope.getAccount();
    	$scope.showConfirmation = false;
    })();
}