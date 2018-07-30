document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  alert('onDeviceReady');
  var permissions = cordova.plugins.permissions;

  var list = [
    permissions.VIBRATE,
    permissions.ACCESS_NETWORK_STATE,
    permissions.ACCESS_NOTIFICATION_POLICY,
    permission.WRITE_CALENDAR,
    permissions.READ_CALENDAR
  ];

  permissions.hasPermission(list, callback, null);

  function error() {
    alert('Camera or Accounts permission is not turned on');
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
