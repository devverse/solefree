function instagramController($scope,$rootScope,instagram_service){

	$scope.pictures = [];
	
	$scope.search = function(){

	};

	$scope.getPost = function(){
		instagram_service.getPost(function(){

		});
	};

	$scope.init = function(){
		$scope.getPost();
	}();
}