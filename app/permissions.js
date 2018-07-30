document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

  var permissions = cordova.plugins.permissions;

  function successCallback() {

  };

  function errorCallback() {

  };

  permissions.hasPermission(permissions.VIBRATE, function(status) {
    if (status.hasPermission) {
      alert("VIBRATE");
    } else {
      permissions.requestPermissions(permissions.VIBRATE, successCallback, errorCallback);
    }
  });

  permissions.hasPermission(permissions.READ_CALENDAR, function(status) {
    if (status.READ_CALENDAR) {
      alert("READ_CALENDAR");
    } else {
      permissions.requestPermissions(permissions.READ_CALENDAR, successCallback, errorCallback);
    }
  });

  permissions.hasPermission(permissions.WRITE_CALENDAR, function(status) {
    if (status.WRITE_CALENDAR) {
      alert("WRITE_CALENDAR");
    } else {
      permissions.requestPermissions(permissions.WRITE_CALENDAR, successCallback, errorCallback);
    }
  });

  permissions.hasPermission(permissions.ACCESS_NETWORK_STATE, function(status) {
    if (status.ACCESS_NETWORK_STATE) {
      alert("ACCESS_NETWORK_STATE");
    } else {
      permissions.requestPermissions(permissions.ACCESS_NETWORK_STATE, successCallback, errorCallback);
    }
  });

  permissions.hasPermission(permissions.ACCESS_NOTIFICATION_POLICY, function(status) {
    if (status.ACCESS_NOTIFICATION_POLICY) {
      alert("ACCESS_NOTIFICATION_POLICY");
    } else {
      permissions.requestPermissions(permissions.ACCESS_NOTIFICATION_POLICY, successCallback, errorCallback);
    }
  });
}
