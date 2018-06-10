soleinsiderApp.factory('store_service', ['$rootScope', '$q', '$http',
  function($rootScope, $q, $http) {

    var api = serviceURL;

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

    self.search = function(search) {
      var post = "search=" + search;
      return self.makePost('/store/search', post);
    };

    self.paginate = function(post) {
      return self.makePost('/store/paginate', post);
    };

    return {
      search: function(search) {
        return self.search(search);
      },
      paginate: function(post) {
        return self.paginate(post);
      }
    };
  }
]);
