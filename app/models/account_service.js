soleinsiderApp.factory('account_service', ['$rootScope', '$q', '$http',
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

    self.getAccount = function(post) {
      return self.makePost('/mobile/accountInfo', post);
    };

    self.updateAccount = function(post) {
      return self.makePost('/mobile/updateAccount', post);
    };

    return {

      getAccount: function(post) {
        return self.getAccount(post);
      },

      updateAccount: function(post) {
        return self.updateAccount(post);
      }
    };
  }
]);
