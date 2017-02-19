function hubController($scope, $rootScope, $routeParams, $location, hub_service)
{
	$scope.descriptions = {
		'yeezy' : '',
		'nike' : '',
		'jordan' : '',
		'adidas' : '',
		'puma' : '',
		'adidas' : ''

	};

	$scope.details = function(event) {
		event.preventDefault();
	};

	$scope.getHubPage = function(type) {
		$scope.hub = {};
		$scope.hub.type = type;

		var post = "&brand=" + type;
	    hub_service.getHub(post).then(function(data) {
	      $scope.formatData(data.news);
	      $scope.hub.releases = data.releases;
	    }, function(err) {
	      window.console.log(err);
	    });
	};

	 $scope.formatData = function(data) {
	    $scope.show_loading = false;
	    $scope.hub.news = [];

	    for (var x = 0; x < data.length; x++) {
	      var html, image;

	      html = $.parseHTML(data[x].description);

	      image = $(html).find('img:first');
	      
	      if (typeof image != "undefined") {
	        data[x].thumbnail = image.attr('src');
	      } else {
	        data[x].thumbnail = 'http://soleinsider.com/images/default.jpg';
	      }

	      $scope.hub.news.push(data[x]);
	    }
	};

	$scope.view = function(event, article) {
	    event.preventDefault();
	    localStorage.setItem("article", JSON.stringify(article));
	    $location.path('view');
	};

    $scope.init = (function ()
    {
	 	var type = $routeParams.type;   
	 	$scope.getHubPage(type);

	 	$rootScope.$emit("featured", false);
	    $rootScope.$emit("showback_button", true);
	    window.showBannerAd();
	    window.randomInterstitial();
    })();
}

myReleasesController.$inject = ['$scope', '$rootScope', '$location', 'hub_service'];