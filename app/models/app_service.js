soleinsiderApp.factory('app_service', ['$rootScope', '$q', '$http', function($rootScope, $q, $http) {

	var api = serviceURL;

	self.makePost = function (endpoint, post) {

        post = (!post) ? {} : post;
        if(!endpoint) {
            window.alert("Could not connect to database");
            return;
        }

        var deferred = $q.defer();
        $http.post(api + endpoint, post).success(function (data) {


            if(data) {
                if(data == 'false') {
                    data = [];
                }
                deferred.resolve(data);
            } else {
                deferred.reject("Data was rejected: " + post);
            }
        });
        return deferred.promise;

    };

    self.getMessages = function(){
    	return self.makePost('/mobile/getMessages');
    };

    self.getAds = function(){
        return self.makePost('/mobile/getAds');
    };
 
	return {

		init : function()
		{ 

		},

		getMessages : function(){
			return self.getMessages();
		},

        getAds : function(){
            return self.getAds();
        }

       

	};

}]);