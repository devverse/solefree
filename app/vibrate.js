var vibrate = function() {
  console.log('vibrate');
};

window.vibrate = vibrate;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    window.vibrate = navigator.vibrate;
}
