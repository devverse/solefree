soleinsiderApp.factory('mixpanel_service',  ['$rootScope',
  function() {

    var self = this;

    self.trackEvent = function(event) {
      mixpanel.track("Mobile App: " + event);
    };

    return {
      trackEvent: function(event) {
        return self.trackEvent(event);
      }
    };
  }
]);
