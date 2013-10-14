function releasesController($scope, $rootScope, release_service, cache_service)
{
	$scope.releases = [];
    $scope.showmsg = false;
    $scope.showerror = false;

	$scope.getReleases = function(){
        $scope.releases  = cache_service.request("releaseDates");
	};

    $scope.addReminder = function(product){

        member_id = soleinsider.member_id;
        if (member_id == "false"){
             $scope.showerror = true;
             return;
        }

        release_service.addReminder(product,member_id).then(
            function (data) {
               $scope.showmsg = true;
               $scope.showerror = false;
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
        });
        
    })();

}