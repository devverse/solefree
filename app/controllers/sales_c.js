function salesController($scope, $rootScope,sales_service)
{

	$scope.products = [];

	$scope.getSales = function(){

		sales_service.getSales();
          
	};

    $scope.sendPurchaseLink = function(product){
        //product_service.sendPurchaseLink(product);
    };

    $scope.init = (function ()
    {	
    	$scope.getSales();

         $rootScope.$on('getSales', function(e, data) {
            $scope.sales = data;
        });

    })();

}