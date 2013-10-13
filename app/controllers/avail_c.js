function availController($scope, $rootScope,sales_service)
{

	$scope.products = [];

	$scope.getStillAvail = function(){
		sales_service.getStillAvail();    
	};

    $scope.sendPurchaseLink = function(product){
        //product_service.sendPurchaseLink(product);
    };

    $scope.init = (function ()
    {	
    	$scope.getStillAvail();

         $rootScope.$on('getStillAvail', function(e, data) {
            $scope.products = data;
        });

    })();

}