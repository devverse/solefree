document.addEventListener("offline", onOffline, false);

document.addEventListener("online", onOnline, false);

function onOffline() {
  $.jnoty("You are browsing offline", {
    theme: 'success'
  });
};

function onOnline() {
  $.jnoty("You are now back online", {
    theme: 'success'
  });
};
