function releasesController($scope, $rootScope, release_service, cache_service)
{
	$scope.releases = [];
    $scope.showmsg = false;
    $scope.showerror = false;
    $scope.errorMessage = "";

    $scope.coporNot = function(product,status){


       var member_id = localStorage.getItem("member_id");

        if (status =="yes" && parseInt(product.yes_percentage) < 98){
            product.yes_percentage = parseInt(product.yes_percentage) + parseInt(3.2);
        } 

        if (status =="no" && parseInt(product.no_percentage) < 98){
             product.no_percentage = parseInt(product.no_percentage) + parseInt(3.2);
        }
        var post = "member_id=" + member_id;
            post += "&product.id=" + product.id;
            post += "&status=" + status;

        release_service.coporNot(post).then(function (data) {
            
        }, function (err) {
            window.console.log(err);
        });
    };

	$scope.getReleases = function(){
        $scope.showLoading = true;
        release_service.getReleases().then(
        function(data) {
            $scope.releases = data;
            console.log(data);
        }, function(err) {
            alert(err);
        });
    
       

	};

    $scope.addReminder = function(product){

        member_id = localStorage.getItem("member_id");
        if (member_id == "false" || member_id == 0 || member_id == null ) {
             $scope.showerror = true;
             $scope.errorMessage = "You must be logged for reminders";
             return;
        } else{
            $scope.showerror = true;
             $scope.errorMessage = "Reminder added for " + product.name;
        }

        release_service.addReminder(product,member_id).then(
            function (data) {
               $scope.showmsg = true;
               $scope.sneakerName = product.name;
            },
            function (err) {
                alert(err);
            }
        );
    }

    $scope.init = (function ()
    {	
    	$scope.getReleases();



    })();

}