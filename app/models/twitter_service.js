soleinsiderApp.factory('twitter_service', ['$rootScope', '$q', '$http', function($rootScope, $q, $http) {

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


    self.getTwitterAccounts = function(){
        return self.makePost('app/twitter/getTwitterAccounts');
    };

    self.getMyTwitterWathing = function(,post){
        return self.makePost('app/twitter/getMyTwitterWathing',post);
    };

    self.addToWatch = function(post){
        return self.makePost('app/twitter/addToWatch',post);
    }
    self.removeFromWatch = function(post){
        return self.makePost('app/twitter/removeFromWatch',post);
    }

 	return {
		init : function()
		{

		},

        getTwitterAccounts : function(){
            return self.getTwitterAccounts();
        },
        getMyTwitterWathing : function(post){
            return self.getMyTwitterWathing(post);
        },
        addToWatch : function(post){
            return self.addToWatch(post);
        },
        removeFromWatch : function(post){
            return self.removeFromWatch(post);
        }

	};

}]);