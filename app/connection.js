document.addEventListener("offline", onOffline, false);

function onOffline() {
  $.jnoty("You are browsing offline", {
    theme: 'success'
  });
};
