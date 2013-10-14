function pastReleasesController($scope, $rootScope, release_service, cache_service)
{
	$scope.releases = [];

	$scope.getReleases = function(){
        $scope.releases  = cache_service.request("pastReleaseDates");
	};

    $scope.init = (function ()
    {	
    	$scope.getReleases();	

        $rootScope.$on('pastReleaseDates', function(e, data) {
            $scope.releases = data;
        });


    })();

}