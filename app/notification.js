document.addEventListener("deviceready", onDeviceReadyNotification, false);

function onDeviceReadyNotification() {
  cordova.plugins.notification.local.schedule({
    title: 'My first notification',
    text: 'Thats pretty easy...',
    foreground: true
  });
};
