soleinsiderApp.factory('comments_service', ['util_service','$rootScope', '$q', '$http', function(util_service,$rootScope, $q, $http) {

    var api = soleinsider.base_url;

    self.makePost = function (endpoint, post) {

        post = (!post) ? {} : post;
        if(!endpoint) {
            window.alert("Could not connect, please check your internet connection");
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

    return {

        getSales : function(){
            return self.getSales();
        },
    };

}]);