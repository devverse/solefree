document.addEventListener("deviceready", onDeviceReadyNotification, false);

function onDeviceReadyNotification() {
  if ('Notification' in window) {
    Notification.requestPermission(function(permission) {
      if (permission === 'granted') {
        var notification = new Notification('My title', {
          tag: 'message1',
          body: 'My body'
        });
      }
    });
  }

  alert('addLocalNotification');
};

alert('onDeviceReadyNotification');
