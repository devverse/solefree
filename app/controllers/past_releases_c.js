function pastReleasesController($scope, $rootScope, release_service)
{
	$scope.releases = [];

	$scope.getReleases = function(){

		release_service.getPastReleases();
	};

    $scope.init = (function ()
    {	
    	$scope.getReleases();	

        $rootScope.$on('getPastReleases', function(e, data) {
            $scope.releases = data;
        });


    })();

}