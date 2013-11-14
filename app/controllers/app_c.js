function appController($scope, $rootScope,app_service)
{

	$scope.message = "";
    $scope.ads = "";
    $scope.showads = soleinsider.showads;

	$scope.getMessages = function(){
		app_service.getMessages().then(
            function (data) {

            	if (data.length > 0){
            		var index = Math.floor((Math.random()*data.length));
            		$scope.message = data[index].message;
            	}

            },
            function (err) {
              
            }
        );
	};

	$scope.getAds = function(){
        app_service.getAds().then(
            function (data) {

                if (data.length > 0){
                    var index = Math.floor((Math.random()*data.length));
                    $scope.ads = data[index].content;
                }

            },
            function (err) {
              
            }
        );
	};

    $scope.init = (function ()
    {	
    	$scope.getMessages();
    	//$scope.getAds();	
    })();
}