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

    self.request = function(endpoint,post){

         url = "/mobile/" + endpoint;
           self.makePost(url).then(
            function(data) {
                self.setCache(endpoint,data);
                $rootScope.$broadcast(endpoint, data);
                return data;
            }, function(err) {
                alert(err);
        });
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

    self.closePanel = function(){ 
        $('#content-container').toggleClass('active');
        $('#sidemenu').toggleClass('active');
        setTimeout(function() {
            $('#sidemenu-container').toggleClass('active');
        }, 500);
    };

	return {
		/**
		 * Make Post request
		 * @param  {[type]} endpoint [description]
		 * @param  {[type]} post     [description]
		 * @return ngpromise         [description]
		 */
		request : function(endpoint, post) {

            if (soleinsider.cache == true){
                return self.getCache(endpoint,post);
            } else{
                return self.request(endpoint,post);
            }
		
		},

        closePanel : function(){
            return self.closePanel();
        }
	};

}]);