var badge = function() {
  console.log('badge');
};

window.badge = badge;

document.addEventListener("deviceready", onDeviceReadyBadge, false);

function onDeviceReadyBadge() {
    window.badge = cordova.plugins.notification.badge;
    cordova.plugins.notification.badge.configure({ autoClear: true });
}
