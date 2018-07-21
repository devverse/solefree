var vibrate = function() {
  console.log('vibrate');
};

window.vibrate = vibrate;

document.addEventListener("deviceready", onDeviceReadyVibate, false);

function onDeviceReadyVibate() {
    if (typeof navigator.vibrate == "function") {
      window.vibrate = navigator.vibrate;
    }
};
