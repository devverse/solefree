function restocksController($scope, $rootScope,restock_service,cache_service)
{
	$scope.restocks = [];
    $scope.showmsg = false;
    
	$scope.getRestocks = function(){
        $scope.restocks = cache_service.request("productsChecks"); 
	};

     $scope.addReminder = function(product){
        member_id = soleinsider.member_id;
        if (member_id == "false"){
             $scope.showerror = true;
             return;
        }

        restock_service.addAlert(product,member_id).then(
            function (data) {
               $scope.showmsg = true;
               $scope.sneakerName = product.name;
               $scope.showerror = false;
            },
            function (err) {
                alert(err);
            }
        );
    }

    $scope.init = (function ()
    {	
    	$scope.getRestocks();

        $rootScope.$on('productsChecks', function(e, data) {
            $scope.restocks = data;
        });

    })();

}