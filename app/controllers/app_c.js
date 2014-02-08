function appController($scope, $rootScope,app_service)
{

	$scope.message = "";
    $scope.ads = "";
    $scope.showads = soleinsider.showads;
    $scope.show_featured = soleinsider.show_featured;

    $scope.buyProduct = function(product){
        window.open(product.link, '_blank', 'location=yes');
    };

    $scope.getFeaturedProducts= function(){
        app_service.getFeaturedProducts().then(
            function (data) {
                $scope.featured = data;
            },
            function (err) {
              
            }
        );
    };

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
    	$scope.getFeaturedProducts();

        $rootScope.$on('featured', function(e,status) {
            $scope.show_featured = status;
        });

    })();
}