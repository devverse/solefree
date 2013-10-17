function myRestocksController($scope, $rootScope,restock_service)
{
	$scope.restocks = [];
    
	$scope.getRestocks = function(){
		restock_service.getMyRestocks();
	};

    $scope.init = (function ()
    {	

    	$scope.getRestocks();

        $rootScope.$on('getMyRestocks', function(e, data) {
            $scope.restocks = data;
        });

    })();

}