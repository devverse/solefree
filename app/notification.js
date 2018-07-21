document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  if ('Notification' in window) {
    var notInWindow = "yes";
    Notification.requestPermission(function(permission) {
      if (permission === 'granted') {
        var notification = new Notification('My title', {
          tag: 'message1',
          body: 'My body'
        });
      }
    });
  } else {
    var notInWindow = "no";
  }

  var notInWindownotification = "no";
  if (typeof cordova != "undefined" && typeof cordova.plugins.notification != "undefined") {
    var notInWindownotification = "yes";
    cordova.plugins.notification.local.schedule({
        title: 'My first notification',
        text: 'Thats pretty easy...',
        foreground: true
    });
  } else {
    var notInWindownotification = "no";
  }

  alert('Notification notInWindow ' + notInWindow);
  alert('cordova notification ' + notInWindownotification);
};
