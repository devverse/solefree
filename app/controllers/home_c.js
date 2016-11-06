function homeController($scope, $rootScope)
{
    $scope.init = (function ()
    {
	    $rootScope.$emit("featured", false);
	    $rootScope.$emit("showback_button", true);
	    window.showBannerAd();
	    window.randomInterstitial();
    })();
}