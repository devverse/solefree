soleinsiderApp.factory('hub_service', ['$rootScope', '$q', '$http',
  function($rootScope, $q, $http) {

    var api = soleinsider.base_url;

    self.makePost = function(endpoint, post) {

      post = (!post) ? {} : post;
      if (!endpoint) {
        window.alert("Could not connect to database");
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

    self.getHub = function(data) {
      return self.makePost('/mobile/getHub', data);
    };

    return {
      getHub: function(data) {
        return self.getHub(data);
      },
    };

  }
]);