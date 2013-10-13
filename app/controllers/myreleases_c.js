function myReleasesController($scope, $rootScope, release_service)
{
	$scope.releases = [];

	$scope.getMyReleases = function(){

		release_service.getMyReleases()
	};

    $scope.init = (function ()
    {	
       
    	$scope.getMyReleases();

        // Listeners

        $rootScope.$on('getMyReleases', function(e, data) {
            $scope.releases = data;
        });
        
    })();

}