function myReleasesController($scope, $rootScope, release_service)
{
	$scope.releases = [];
    $scope.showerror = false;
    $scope.errorMessage = "";

	$scope.getMyReleases = function(){

         member_id = localStorage.getItem("member_id");
        if (member_id == "false" || member_id == 0 || member_id == null ){
             $scope.showerror = true;
             $scope.errorMessage = "You must be logged to view your releases";
             return;
        }

		release_service.getMyReleases();
	};

     $scope.deleteRelease = function(product){
        release_service.deleteRelease(product);
    };


    $scope.init = (function ()
    {	
       
    	$scope.getMyReleases();

        // Listeners

        $rootScope.$on('getMyReleases', function(e, data) {
            $scope.releases = data;
        });

         $rootScope.$on('deleteRelease', function(e, data) {
            $scope.getMyReleases();
        });
        
    })();

}