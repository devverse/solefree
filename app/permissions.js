document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

  var permissions = cordova.plugins.permissions;

  var permissionsList = [
    permissions.VIBRATE,
    permissions.READ_CALENDAR,
    permissions.WRITE_CALENDAR,
    permissions.ACCESS_NETWORK_STATE,
    permissions.ACCESS_NOTIFICATION_POLICY
  ];

  permissionsList.forEach(function(permission) {
    permissions.hasPermission(permission, function( status ){
      if ( status.hasPermission ) {
        alert("Yes has this permission");
      }
      else {
        permissions.requestPermission(permission, function() {
          alert("sucessfully requested");
        }, function() {
          alert("error in requested");
        });
      }
    });
  });


}
