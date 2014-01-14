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
        return self.makePost('/mobile/getTwitterFeeds');
    };

    self.getMemberTwitterWatching = function(post){
        return self.makePost('/mobile/getMemberTwitterWatching',post);
    };

    self.addToWatch = function(post){
        return self.makePost('/mobile/watchTwitterAccount',post);
    }
    self.removeFromWatch = function(post){
        return self.makePost('/mobile/removeMemberTwitterWatching',post);
    }

 	return {
		init : function()
		{

		},

        getTwitterAccounts : function(){
            return self.getTwitterAccounts();
        },
        getMemberTwitterWatching : function(post){
            return self.getMemberTwitterWatching(post);
        },
        addToWatch : function(post){
            return self.addToWatch(post);
        },
        removeFromWatch : function(post){
            return self.removeFromWatch(post);
        }

	};

}]);