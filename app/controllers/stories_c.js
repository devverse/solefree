function storiesController($scope, $rootScope, $location)
{
	$scope.stories = [
		{ 'link' : 'jordan-1', 'name': 'Air Jordan 1' },
		{ 'link' : 'jordan-2', 'name': 'Air Jordan 2' },
		{ 'link' : 'jordan-3', 'name': 'Air Jordan 3' },
		{ 'link' : 'jordan-4', 'name': 'Air Jordan 4' },
		{ 'link' : 'jordan-5', 'name': 'Air Jordan 5' },
		{ 'link' : 'jordan-6', 'name': 'Air Jordan 6' },
		{ 'link' : 'jordan-7', 'name': 'Air Jordan 7' },
		{ 'link' : 'jordan-8', 'name': 'Air Jordan 8' },
		{ 'link' : 'jordan-9', 'name': 'Air Jordan 9' },
		{ 'link' : 'jordan-10', 'name': 'Air Jordan 10' },
		{ 'link' : 'jordan-11', 'name': 'Air Jordan 11' },
		{ 'link' : 'jordan-12', 'name': 'Air Jordan 12' },
		{ 'link' : 'jordan-13', 'name': 'Air Jordan 13' },
		{ 'link' : 'jordan-14', 'name': 'Air Jordan 14' },
		{ 'link' : 'jordan-15', 'name': 'Air Jordan 15' },
		{ 'link' : 'jordan-16', 'name': 'Air Jordan 16' },
		{ 'link' : 'jordan-17', 'name': 'Air Jordan 17' },
	];

	$scope.view = function(event, story) {
		event.preventDefault();
		$location.path(story.link);

		$("html, body").animate({
	      scrollTop: 0
	    }, 10);

	};

    $scope.init = (function ()
    {
	    $rootScope.$emit("featured", false);
	    $rootScope.$emit("showback_button", true);
	    window.showBannerAd();
	    window.randomInterstitial();
    })();
}