function pastRestocksController($scope, $rootScope, restock_service)
{
	$scope.restocks = [];

	$scope.getPastRestocks = function(){

		restock_service.getPastRestocks();
	};

    $scope.init = (function ()
    {	
    	$scope.getPastRestocks();

        $rootScope.$on('getPastRestocks', function(e, data) {
            $scope.past_restocks = data;
        });

    })();

}