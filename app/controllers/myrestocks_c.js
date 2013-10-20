function myRestocksController($scope, $rootScope,restock_service)
{
	$scope.restocks = [];
    
	$scope.getRestocks = function(){

         member_id = localStorage.getItem("member_id");
 
        if (member_id == "false" || member_id == 0 || member_id == null ){
             $scope.showerror = true;
             $scope.errorMessage = "You must be logged to view your restocks";
             return;
        }


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