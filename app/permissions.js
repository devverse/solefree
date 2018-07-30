document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

  var permissions = cordova.plugins.permissions;

  var list = [
    permissions.VIBRATE,
    permissions.READ_CALENDAR,
    permissions.WRITE_CALENDAR,
    permissions.ACCESS_NETWORK_STATE
  ];

  permissions.hasPermission(list, callback, null);

  function error() {
    console.warn('Camera or Accounts permission is not turned on');
  }

  function success(status) {
    if (!status.hasPermission) {

      permissions.requestPermissions(
        list,
        function(status) {
          if (!status.hasPermission) error();
        },
        error);
    }
  }
}
