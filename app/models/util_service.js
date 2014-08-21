soleinsiderApp.factory('util_service', ['$http', '$q',
  function($http, $q) {

    var api = soleinsider.base_url;

    self.request = function(endpoint, post) {

      post = (!post) ? {} : post;
      if (!endpoint) {
        window.alert("bad endpoint");
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

    return {
      /**
       * Make Post request
       * @param  {[type]} endpoint [description]
       * @param  {[type]} post     [description]
       * @return ngpromise         [description]
       */
      request: function(endpoint, post) {
        return self.request(endpoint, post);
      }
    };

  }
]);
