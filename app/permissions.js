document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  alert('onDeviceReady 2nd');

  var permissions = cordova.plugins.permissions;

  alert(permissions);
  permissions.hasPermission(permissions.VIBRATE, function( status ){
    if ( status.hasPermission ) {
      alert("Yes :D ");
    }
    else {
      alert("No :( ");
    }
  });
}
