function twitterController($scope, $rootScope,twitter_service)
{

    $scope.showConfirmation = false;

	$scope.twitterAccounts = function(){
		
        twitter_service.getTwitterAccounts().then(
        function(data) {
            $scope.accounts = data;
        }, function(err) {
            alert(err);
        });

	};

    $scope.getMemberTwitterWatching = function(){
         var post = "member_id=" + localStorage.getItem("member_id");
         twitter_service.getMemberTwitterWatching(post).then(
        function(data) {
            $scope.watching = data;
        }, function(err) {
            alert(err);
        });
    };

    $scope.addToWatch = function(feed){
        var post = "member_id=" + localStorage.getItem("member_id");
            post += "feed_id" + feed.id

        twitter_service.addToWatch(post).then(
        function(data) {
            $scope.showConfirmation = true;
        }, function(err) {
            alert(err);
        });
    };

    $scope.removeFromWatch = function(feed){
        var post = "member_id=" + localStorage.getItem("member_id");
            post += "feed_id" + feed.id

        twitter_service.removeFromWatch(post).then(
        function(data) {
            $scope.showConfirmation = true;
            $scope.getMemberTwitterWatching();
        }, function(err) {
            alert(err);
        });
    };

    $scope.init = (function ()
    {
        $scope.twitterAccounts();
        $scope.getMemberTwitterWatching();
        $rootScope.$emit("featured", false);
    })();

}