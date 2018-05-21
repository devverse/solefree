soleinsiderApp.factory('release_service', [ '$rootScope', '$q', '$http',
  function($rootScope, $q, $http) {

    var api = soleinsider.base_url;

    self.cachedReleases = [];
    self.cachedComingSoon = [];
    self.expiration = 0;

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
      if (moment().unix() > self.expiration) {
        self.cachedReleases = [];
      }

      if (self.cachedReleases.length == 0) {
        return false;
      }

      return self.cachedReleases;
    };

    self.setCachedReleases = function(releases) {
      self.expiration = moment().unix() + 1800;
      self.cachedReleases = releases;
    };

    self.getCachedComingSoon = function() {
      if (moment().unix() > self.expiration) {
        self.cachedComingSoon = [];
      }

      if (self.cachedComingSoon.length == 0) {
        return false;
      }

      return self.cachedReleases;
    };

    self.setCachedComingSoon = function(releases) {
      self.expiration = moment().unix() + 3600;
      self.cachedComingSoon = releases;
    };

    self.getComingSoon = function() {
      return self.makePost('/mobile/getComingSoon');
    };

    self.getReleases = function() {
      return self.makePost('/mobile/releaseDatesUnformatted');
    };

    self.getPastReleases = function() {
      return self.makePost('/mobile/pastReleaseDates');
    };

    self.addReminder = function(product, member_id) {

      var data = "product_id=" + product.id;
      data += "&member_id=" + member_id;

      return self.makePost('/mobile/addReleaseAlert', data);
    };

    self.getMyReleases = function() {
      var data = "member_id=" + localStorage.getItem("member_id");

      return self.makePost('/mobile/getMyReleases', data);
    };

    self.sneakerRating = function(data) {
      return self.makePost('/mobile/coporNot', data);
    };

    self.deleteRelease = function(product) {
      member_id = localStorage.getItem("member_id");
      var data = "product_id=" + product.id;
      data += "&member_id=" + member_id;
      return self.makePost('/mobile/deleteRelease', data).then(
        function(data) {
          $rootScope.$broadcast('deleteRelease', data);
        }, function(err) {
          alert(err);
        });
    };

    self.getSlideShow = function(data) {
      return self.makePost('/mobile/getSlideShow', data);
    };

    self.getRelatedItems = function(name) {
      var data = "product_name=" + name;
      return self.makePost('/mobile/getRelatedItems', data).then(
        function(data) {
          $rootScope.$broadcast('getRelatedItems', data);
        }, function(err) {
          alert(err);
        });
    };

    self.getRelatedItems = function(name, product_id) {
      var data = "keywords=" + name;
      data += "&product_id=" + product_id;
      return self.makePost('/ebay/getRelatedProducts', data);
    };

    return {

      getCachedReleases: function() {
        return self.getCachedReleases();
      },

      setCachedReleases: function(releases) {
        return self.setCachedReleases(releases);
      },

      getCachedComingSoon: function() {
        return self.getCachedComingSoon();
      },

      setCachedComingSoon: function(releases) {
        return self.setCachedComingSoon(releases);
      },

      getPastReleases: function() {
        return self.getPastReleases();
      },

      getReleases: function() {
        return self.getReleases();
      },

      getComingSoon: function() {
        return self.getComingSoon();
      },

      addAlert: function(product) {
        return self.addAlert(product);
      },

      addReminder: function(product, member_id) {
        return self.addReminder(product, member_id);
      },

      getMyReleases: function() {
        return self.getMyReleases();
      },

      sneakerRating: function(post) {
        return self.sneakerRating(post);
      },

      deleteRelease: function(product) {
        return self.deleteRelease(product);
      },

      getSlideShow: function(post) {
        return self.getSlideShow(post);
      },

      getRelatedItems: function(name, product_id) {
        return self.getRelatedItems(name, product_id);
      }
    };

  }
]);
