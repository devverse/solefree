function storiesController($scope, $rootScope, $location)
{
	$scope.scrollPosition = 0;

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
		{ 'link' : 'jordan-18', 'name': 'Air Jordan 18' },
		{ 'link' : 'jordan-18-5', 'name': 'Air Jordan 18.5' },
		{ 'link' : 'jordan-19', 'name': 'Air Jordan 19' },
		{ 'link' : 'jordan-20', 'name': 'Air Jordan 20' },
		{ 'link' : 'jordan-21', 'name': 'Air Jordan 21' },
		{ 'link' : 'jordan-22', 'name': 'Air Jordan 22' },
		{ 'link' : 'jordan-23', 'name': 'Air Jordan 23' },
		{ 'link' : 'jordan-24', 'name': 'Air Jordan 24' },
		{ 'link' : 'jordan-25', 'name': 'Air Jordan 25' },
		{ 'link' : 'jordan-26', 'name': 'Air Jordan 26' },
		{ 'link' : 'jordan-27', 'name': 'Air Jordan 27' },
		{ 'link' : 'jordan-28', 'name': 'Air Jordan 28' },
		{ 'link' : 'jordan-29', 'name': 'Air Jordan 29' },
		{ 'link' : 'jordan-30', 'name': 'Air Jordan 30' },
		{ 'link' : 'jordan-31', 'name': 'Air Jordan 31' },
	];

	$scope.view = function(event, story) {
		event.preventDefault();

      	$scope.scrollPosition = $("#pages_maincontent").scrollTop();
		localStorage.setItem("scrollPosition", $scope.scrollPosition);

		$location.path(story.link);
	};

    $scope.init = (function ()
    {
    	$("#pages_maincontent").animate({
	      scrollTop: localStorage.getItem('scrollPosition')
	    }, 10);

	    $rootScope.$emit("featured", false);
	    $rootScope.$emit("showback_button", true);
	    window.removeBannerAd();
	    window.randomInterstitial();
    })();
}