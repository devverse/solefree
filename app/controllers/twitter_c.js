function twitterController($scope, $rootScope,twitter_service)
{
    $scope.tweets = false;
 
	$scope.getLatestTweets = function(){
        twitter_service.getLatestTweets().then(
        function(data) {
            $scope.accounts = data;
        }, function(err) {
            alert(err);
        });
	};

    $scope.init = (function ()
    {
        $scope.getLatestTweets();
        $rootScope.$emit("featured", true);
    })();
}