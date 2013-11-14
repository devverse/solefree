function couponsController($scope, $rootScope,coupons_service)
{

	$scope.getCoupons = function(){

	}

    $scope.init = (function ()
    {
    	$scope.getCoupons();
    })();

}