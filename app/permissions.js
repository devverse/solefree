document.addEventListener("deviceready", onDeviceReadyPermissions, false);

function onDeviceReadyPermissions() {
  var permissions = cordova.plugins.permissions;

  var permissionsList = [
    permissions.VIBRATE,
    permissions.READ_CALENDAR,
    permissions.WRITE_CALENDAR,
    permissions.ACCESS_NETWORK_STATE,
    permissions.ACCESS_NOTIFICATION_POLICY
  ];

  permissionsList.forEach(function(permission) {
    permissions.hasPermission(permission, function(status) {
      if (!status.hasPermission) {
        permissions.requestPermission(permission, function() {
          console.log("sucessfully requested");
        }, function() {
          console.log("error in requested");
        });
      }
    });
  });
};
