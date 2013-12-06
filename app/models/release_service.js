soleinsiderApp.factory('release_service', ['util_service','$rootScope', '$q', '$http', function(util_service,$rootScope, $q, $http) {

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

    self.getReleases = function(){
        return self.makePost('/mobile/releaseDatesFormatted');
    };

    self.getPastReleases = function(){
        return self.makePost('/mobile/pastReleaseDates').then(
        function(data) {
            $rootScope.$broadcast('getPastReleases', data);
        }, function(err) {
            alert(err);
        });
    };

    self.addReminder = function(product,member_id){

        var data = "product_id=" + product.id;
            data += "&member_id=" + member_id;
        

        return self.makePost('/mobile/addReleaseAlert',data);
    };

    self.getMyReleases = function(){
        var data = "member_id=" + localStorage.getItem("member_id");

          return self.makePost('/mobile/getMyReleases',data).then(
        function(data) {
            $rootScope.$broadcast('getMyReleases', data);
        }, function(err) {
            alert(err);
        });

    };

    self.coporNot = function(data){
        return self.makePost('/mobile/coporNot',data);
    };

    self.deleteRelease = function(product){

        member_id = localStorage.getItem("member_id");
        var data = "product_id=" + product.id;
            data += "&member_id=" + member_id;
        return self.makePost('/mobile/deleteRelease',data).then(
        function(data) {
            $rootScope.$broadcast('deleteRelease', data);
        }, function(err) {
            alert(err);
        });
    };


    return {

        getPastReleases : function(){
             return self.getPastReleases();
        },

        getReleases : function(){
            return self.getReleases();
        },

        addAlert: function(product){
            return self.addAlert(product);
        },

        addReminder :function(product,member_id){
            return self.addReminder(product,member_id);
        },

        getMyReleases : function(){
            return self.getMyReleases();
        },

        coporNot : function(post){
            return self.coporNot(post);
        },

        deleteRelease : function(product){
            return self.deleteRelease(product);
        }
    };

}]);