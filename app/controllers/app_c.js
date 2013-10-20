function appController($scope, $rootScope,app_service)
{

	$scope.message = "";

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

	};

    $scope.init = (function ()
    {	
    	$scope.getMessages();
    	$scope.getAds();	
    })();
}