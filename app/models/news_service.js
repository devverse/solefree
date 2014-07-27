soleinsiderApp.factory('news_service', ['$rootScope', '$q', '$http',
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

    self.getFeeds = function() {
      return self.makePost('/mobile/rssFeeds');
    };

    return {

      getFeeds: function() {
        return self.getFeeds();
      },
    };

  }
]);