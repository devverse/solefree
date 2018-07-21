document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  if ('Notification' in window) {

    alert("notification defined");
    Notification.requestPermission(function(permission) {
      alert("notification ask permission");
      if (permission === 'granted') {
        var notification = new Notification('My title', {
          tag: 'message1',
          body: 'My body'
        });
      } else {
        alert("notification no permission");
      }

      var notification = new Notification('My title 2sdas', {
        tag: 'message2',
        body: 'My body asdadsd'
      });
    });
  } else {
    alert("notification is not defined");
  }

  // var notInWindownotification = "no";
  // if (typeof cordova != "undefined" && typeof cordova.plugins.notification != "undefined") {
  //   var notInWindownotification = "yes";
  //   cordova.plugins.notification.local.schedule({
  //       title: 'My first notification',
  //       text: 'Thats pretty easy...',
  //       foreground: true
  //   });
  // } else {
  //   var notInWindownotification = "no";
  // }
  //
  // alert('Notification notInWindow ' + notInWindow);
  // alert('cordova notification ' + notInWindownotification);
};

onDeviceReady();
