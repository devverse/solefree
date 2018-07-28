var badge = {
  clear: function() {
    return;
  },
  increase: function() {
    return;
  },
  set: function() {
    return;
  }
}

window.badge = badge;

document.addEventListener("deviceready", onDeviceReadyBadge, false);

function onDeviceReadyBadge() {
    cordova.plugins.notification.badge.requestPermission(function (granted) {
      window.badge = cordova.plugins.notification.badge;
      cordova.plugins.notification.badge.configure({ autoClear: true });
    });
}
