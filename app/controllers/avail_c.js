function availController($scope, $rootScope,sales_service,cache_service)
{

	$scope.products = [];

	$scope.getStillAvail = function(){  
        $scope.products  = cache_service.request("getStillAvail");
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