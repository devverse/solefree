var vibrate = function() {
  console.log('vibrate');
};

window.vibrate = vibrate;

document.addEventListener("deviceready", onDeviceReadyVibate, false);

function onDeviceReadyVibate() {
    window.vibrate = navigator.vibrate;
};
