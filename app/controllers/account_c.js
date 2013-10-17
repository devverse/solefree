function accountController($scope, $rootScope,util_service)
{

	$scope.updateAccount = function(account){
		var post = "member_id=" + soleinsider.member_id;
			post += "username=" + account.username;
			post += "phone=" + account.phone;
			post += "carrier=" + account.carrier;
	};

	$scope.getAccount = function(){
		var post = "member_id=" + soleinsider.member_id;
		util_service.request(post).then(function (data) {
			$scope.account = data;
		}, function (err) {
			window.console.log(err);
		});
	};


    $scope.init = (function ()
    {	
    	$scope.getAccount();	
    })();
}