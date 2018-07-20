document.addEventListener("offline", onOffline, false);

function onOffline() {
  $.jnoty("You are no longer online", {
    theme: 'success'
  });
};
