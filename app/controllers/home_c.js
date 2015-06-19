function homeController($scope, $rootScope)
{
    $scope.init = (function ()
    {
    	$rootScope.$emit("featured", false);
    })();
}