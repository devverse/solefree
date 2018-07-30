document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

  var permissions = cordova.plugins.permissions;

  var permissionsList = [
    permissions.VIBRATE,
    permissions.READ_CALENDAR,
    permissions.WRITE_CALENDAR,
    permissions.ACCESS_NETWORK_STATE
  ];

  permissionsList.forEach(function(permission) {
    permissions.hasPermission(permission, function( status ){
      if ( status.hasPermission ) {
        alert("Yes has this permission");
      }
      else {
        permissions.requestPermissions(permission, function() {
          alert("sucessfully requested");
        }, function() {
          alert("error in requested");
        });
      }
    });
  });


}
