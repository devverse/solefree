function storyController($scope, $rootScope)
{
    $scope.init = (function ()
    {
    	$("html, body").animate({
	      scrollTop: 0
	    }, 10);

	    $rootScope.$emit("featured", false);
	    $rootScope.$emit("showback_button", true);
	    window.showBannerAd();
	    window.randomInterstitial();
    })();
}