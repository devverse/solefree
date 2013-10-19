function appController($scope, $rootScope,app_service)
{

	$scope.message = "follow us on twitter";

	$scope.getMessages = function(){

	};

	$scope.getAds = function(){

	};

    $scope.init = (function ()
    {	
    	$scope.getMessages();
    	$scope.getAds();	
    })();
}