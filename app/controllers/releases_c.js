function releasesController($scope, $rootScope, release_service, cache_service)
{
	$scope.releases = [];
    $scope.showmsg = false;
    $scope.showerror = false;
    $scope.errorMessage = "";

	$scope.getReleases = function(){
        $scope.showLoading = true;
        $scope.releases  = cache_service.request("releaseDates");
	};

    $scope.addReminder = function(product){

        member_id = localStorage.getItem("member_id");
        if (member_id == "false" || member_id == 0 || member_id == null ) {
             $scope.showerror = true;
             $scope.errorMessage = "You must be logged for reminders";
             return;
        } else{
            $scope.showerror = true;
             $scope.errorMessage = "Reminder added for " + product.name;
        }

        release_service.addReminder(product,member_id).then(
            function (data) {
               $scope.showmsg = true;
               $scope.sneakerName = product.name;
            },
            function (err) {
                alert(err);
            }
        );
    }

    $scope.init = (function ()
    {	
    	$scope.getReleases();

        // Listeners
        $rootScope.$on('releaseDates', function(e, data) {
            $scope.releases = data;
            $scope.showLoading = false;
  
        });

    })();

}