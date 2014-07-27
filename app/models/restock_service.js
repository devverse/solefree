soleinsiderApp.factory('restock_service', ['util_service', '$rootScope', '$q', '$http',
  function(util_service, $rootScope, $q, $http) {

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

    self.getMyRestocks = function() {


      var data = "member_id=" + localStorage.getItem("member_id");


      return self.makePost('/mobile/getMyRestocks', data).then(

        function(data) {
          $rootScope.$broadcast('getMyRestocks', data);
        }, function(err) {
          alert(err);
        });

    };

    self.getPastRestocks = function() {

      return self.makePost('/mobile/getAvailabilityHistory').then(

        function(data) {
          $rootScope.$broadcast('getPastRestocks', data);
        }, function(err) {
          alert(err);
        });
    };

    self.getRestocks = function() {
      return self.makePost('/mobile/productsChecks').then(

        function(data) {
          $rootScope.$broadcast('getRestocks', data);
        }, function(err) {
          alert(err);
        });
    };

    self.addAlert = function(product) {

      member_id = localStorage.getItem("member_id");
      var data = "product_id=" + product.id;
      data += "&member_id=" + member_id;
      return self.makePost('/mobile/addRestockAlert', data);
    };

    self.deleteRestock = function(product) {

      member_id = localStorage.getItem("member_id");
      var data = "product_id=" + product.id;
      data += "&member_id=" + member_id;
      return self.makePost('/mobile/deleteRestock', data).then(
        function(data) {
          $rootScope.$broadcast('deleteRestock', data);
        }, function(err) {
          alert(err);
        });
    };

    return {

      getRestocks: function() {
        return self.getRestocks();
      },

      getPastRestocks: function() {
        return self.getPastRestocks();
      },

      addAlert: function(product) {
        return self.addAlert(product);
      },

      getMyRestocks: function() {
        return self.getMyRestocks();
      },

      deleteRestock: function(product) {
        return self.deleteRestock(product);
      }
    };

  }
]);