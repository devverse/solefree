function homeController($scope, $rootScope)
{
    $scope.init = (function ()
    {
    	$rootScope.$emit("featured", false);
    	$rootScope.$emit("showback_button", false);
    	window.removeBannerAd();
    })();
}