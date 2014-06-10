function rssController($scope, $rootScope,cache_service)
{
	$scope.rssFeeds = [];

	$scope.getSales = function(){
		cache_service.request('rssFeeds');
	};

    $scope.init = (function ()
    {	
    	$scope.getSales();

         $rootScope.$on('rssFeeds', function(e, data) {
            $scope.rssFeeds = data;
        });

        $rootScope.$emit("featured", true); 
    })();
}