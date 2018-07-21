document.addEventListener("deviceready", onDeviceReadyNotification, false);

function onDeviceReadyNotification() {
  if ('Notification' in window) {
    var notInWindow = true;
    Notification.requestPermission(function(permission) {
      if (permission === 'granted') {
        var notification = new Notification('My title', {
          tag: 'message1',
          body: 'My body'
        });
      }
    });
  } else {
    var notInWindow = false;
  }

  if (typeof cordova.plugins.notification != "undefined") {
    var notInWindownotification = true;
    cordova.plugins.notification.local.schedule({
        title: 'My first notification',
        text: 'Thats pretty easy...',
        foreground: true
    });
  } else {
    var notInWindownotification = false;
  }

  alert('Notification notInWindow', notInWindow);
  alert('cordova notification', notInWindownotification);
};
