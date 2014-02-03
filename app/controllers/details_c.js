function detailsController($scope, $rootScope,$location,comments_service,release_service)
{

	$scope.comments = [];

	$scope.loadProduct = function(){
		product = JSON.parse(localStorage.getItem("product_details"));

		product.showBuyLink = false;

        if (product.link.length > 2){
           product.showBuyLink = true;
        }

        $scope.r = product;
        $scope.product_id = product.product_id;

	};

	 $scope.coporNot = function(product,status){

       var member_id = localStorage.getItem("member_id");

        if (status =="yes" && parseInt(product.yes_percentage) < 98){
            product.yes_percentage = parseInt(product.yes_percentage) + parseInt(3.2);
        } 

        if (status =="no" && parseInt(product.no_percentage) < 98){
             product.no_percentage = parseInt(product.no_percentage) + parseInt(3.2);
        }
        var post = "member_id=" + member_id;
            post += "&product_id=" + product.id;
            post += "&status=" + status;

        release_service.coporNot(post).then(function (data) {
            
        }, function (err) {
            window.console.log(err);
        });
    };

	$scope.getComments = function(product){
        
        var post = "&product_id=" + $scope.product_id;
        comments_service.getComments(post).then(function (data) {
            $scope.comments = data;
        }, function (err) {
            window.console.log(err);
        });
	};

	$scope.addToCalender = function(){

	};

	$scope.getAds = function(){

	};

    $scope.submitComment = function(){
        var member_id = localStorage.getItem("member_id");

        var post = "member_id=" + member_id;
            post += "&product_id=" + $scope.product_id;
            post += "&comment=" + $scope.new_comment;

        comments_service.leaveComment(post).then(function (data) {
            $scope.getComments();
            $scope.new_comment = "";
        }, function (err) {
            window.console.log(err);
        });
    };

    $scope.init = (function ()
    {
    	$rootScope.$emit("featured", false);
    	$scope.loadProduct();
        $scope.getComments();
    	$scope.getAds();
    })();

}