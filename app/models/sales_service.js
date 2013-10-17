soleinsiderApp.factory('sales_service', ['$rootScope', '$q', '$http', function($rootScope, $q, $http) {

	var api = soleinsider.base_url;

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


     self.getSales = function(){

        return self.makePost('/mobile/getSales').then(

        function(data) {
            $rootScope.$broadcast('getSales', data);
        }, function(err) {
            alert(err);
        });
    };

    self.getStillAvail = function(){

        return self.makePost('/mobile/getStillAvail').then(

        function(data) {
            $rootScope.$broadcast('getStillAvail', data);
        }, function(err) {
            alert(err);
        });

    };

 	return {
		init : function()
		{

		},

         getSales : function(){
            return self.getSales();
        },

        getStillAvail : function(){
            return self.getStillAvail();
        }

	};

}]);