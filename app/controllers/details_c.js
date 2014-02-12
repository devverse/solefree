function detailsController($scope, $rootScope,$location,$filter,comments_service,release_service)
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

    $scope.addReminder = function(product){

   
        member_id = localStorage.getItem("member_id");
        if (member_id == "false" || member_id == 0 || member_id == null ) {
             $scope.showerror = true;
             $scope.errorMessage = "You must be logged for reminders";
             return;
        } 

        release_service.addReminder(product,member_id).then(
            function (data) {
               $scope.showmsg = true;
               $scope.showerror = false;
               $scope.sneakerName = product.name;
               $().toastmessage('showSuccessToast',"Reminder saved for " + product.name);
            },
            function (err) {
                alert(err);
            }
        );
    }


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

    $scope.maskCommentUser = function(comment){
   
        alert(comment.email);
        //comment.email = comment.email.substring(0,position);
        return comment;
    };

	$scope.addToCalender = function(product){
         var startDate = new Date(product.release_date);
         var endDate = new Date(product.release_datee);
         var title = product.title;
         var location = "Home";
         var notes = product.title + " releasing on " + startDate;
         var success = function(message) { };
         var error = function(message) { };

         window.plugins.calendar.createEvent(title,location,notes,startDate,endDate,success,error);
	}; 

	$scope.getAds = function(){

	};

    $scope.submitComment = function(){
        var member_id = localStorage.getItem("member_id");

        var post = "member_id=" + member_id;
            post += "&product_id=" + $scope.product_id;
            post += "&comment=" + $scope.new_comment;

        comments_service.leaveComment(post).then(function (data) {
             $().toastmessage('showSuccessToast',"Comment saved!");
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