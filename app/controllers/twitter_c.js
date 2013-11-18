function twitterController($scope, $rootScope,cache_service)
{
	$scope.twittterAccounts = function(){
		$scope.accounts  = cache_service.request("getTwittterAccounts");
	}

    $scope.init = (function ()
    {
    	$scope.twittterAccounts();
    })();

}