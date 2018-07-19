var badge = {
  increase: function() {

  }
}

window.badge = badge;

document.addEventListener("deviceready", onDeviceReadyBadge, false);

function onDeviceReadyBadge() {
    window.badge = cordova.plugins.notification.badge;
    cordova.plugins.notification.badge.configure({ autoClear: true });
}
