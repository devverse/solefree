
soleinsiderApp.factory('State', function($q, $http){
  var api = soleinsider.base_url;

  self.makePost = function(endpoint, post) {

    post = (!post) ? {} : post;
    if (!endpoint) {
      window.alert("Could not connect, please check your internet connection");
      return;
    }

    var deferred = $q.defer();
    $http.post(api + endpoint, post).success(function(data) {
      if (data) {
        if (data == 'false') {
          data = [];
        }
        deferred.resolve(data);
      } else {
        deferred.reject("Data was rejected: " + post);
      }
    });
    return deferred.promise;

  };

  self.getCachedReleases = function() {
    return self.makePost('/mobile/releaseDatesUnformatted');
  };

  return {
    formData:{
      releases: self.getCachedReleases()
    },
  };
});
