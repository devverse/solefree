soleinsiderApp.factory('cache_service', ['$rootScope', '$q', '$http', function($rootScope, $q, $http) {
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


	self.getCache = function(endpoint, post){

		 var retrievedObject = localStorage.getItem(endpoint);

        if (typeof retrievedObject === 'string' || typeof retrievedObject == undefined){
          data =  JSON.parse(retrievedObject);
          $rootScope.$broadcast(endpoint, data);
          return data;
        } else{
           url = "/mobile/" + endpoint;
           self.makePost(url).then(
	        function(data) {
	        	self.setCache(endpoint,data);
	            $rootScope.$broadcast(endpoint, data);
	            return data;
	        }, function(err) {
	            alert(err);
	        });
        }

	};


	self.setCache = function(endpoint,data){	
		 localStorage.setItem(endpoint, JSON.stringify(data));
	};

	return {
		/**
		 * Make Post request
		 * @param  {[type]} endpoint [description]
		 * @param  {[type]} post     [description]
		 * @return ngpromise         [description]
		 */
		request : function(endpoint, post) {
			return self.getCache(endpoint,post);
		}
	};

}]);