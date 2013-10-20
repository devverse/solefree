function restocksController($scope, $rootScope,restock_service,cache_service)
{
	$scope.restocks = [];
    $scope.showmsg = false;
    $scope.showerror = false;
    $scope.errorMessage = "";
    
	$scope.getRestocks = function(){
        $scope.showLoading = true;
        $scope.restocks = cache_service.request("productsChecks"); 
	};

     $scope.addReminder = function(product){
        member_id = localStorage.getItem("member_id");

        if (member_id == "false" || member_id == 0 || member_id == null ){
             $scope.showerror = true;
             $scope.errorMessage = "You must be logged for watching restocks";
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
            $scope.showLoading = false;
        });

    })();

}