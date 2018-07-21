// for Android
admobid = {
  banner: 'ca-app-pub-0083160636450496/6391719559',
  interstitial: 'ca-app-pub-0083160636450496/7728851959'
};

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  setTimeout(function() {
    analytics.startTrackerWithId('UA-18545304-13');
  }, 4000);

  admob.setOptions({
    publisherId: "ca-app-pub-0083160636450496/6391719559", // Required
    interstitialAdId: "cca-app-pub-0083160636450496/7728851959",
    autoShowInterstitial: true,
    autoShowBanner: true
  });
}

function showBannerAd() {
  return;
  if (typeof admob != 'undefined') {
    admob.createBannerView();
  }
}

function removeBannerAd() {
  return;
  if (typeof admob != 'undefined') {
    admob.destroyBannerView();
  }
}

function prepareInterstitial() {
  if (typeof admob != 'undefined') {
    admob.requestInterstitialAd();
  }
}

function randomInterstitial() {
  var random = Math.floor((Math.random() * 30) + 1);

  if (random === 1) {
    prepareInterstitial();
  }
}

document.addEventListener('prepareInterstitial', prepareInterstitial, false);

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

var url = window.location.href;
var serviceURL = "http://soleinsider.com/public";

var admin_url = 'app/';
var app_name = "SoleInsider";
var page_title = "SoleInsider";

var soleinsider = {};
soleinsider.base_url = serviceURL;
soleinsider.username = "";
soleinsider.member_id = false;
soleinsider.cache = false;
soleinsider.show_featured = true;
soleinsider.version = "7.0.0";
soleinsider.build = "android";
soleinsider.localhost = (url.indexOf("localhost") != -1 ? true :  false);

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  window.StatusBar.overlaysWebView(false);
}

var badge = {
  increase: function() {

  }
}

window.badge = badge;

document.addEventListener("deviceready", onDeviceReadyBadge, false);

function onDeviceReadyBadge() {
    window.badge = cordova.plugins.notification.badge;
    cordova.plugins.notification.badge.configure({ autoClear: true });
}

document.addEventListener("offline", onOffline, false);

function onOffline() {
  $.jnoty("You are browsing offline", {
    theme: 'success'
  });
};

document.addEventListener("deviceready", function() {
	var customLocale = {};
	customLocale.title = "Rate SoleInsider";
	customLocale.message = "If you enjoy using SoleInsider, would you mind taking a moment to rate it? It won’t take more than a minute. Thanks for your support!";
	customLocale.cancelButtonLabel = "No, Thanks";
	customLocale.laterButtonLabel = "Remind Me Later";
	customLocale.rateButtonLabel = "Rate It Now";

	AppRate.preferences.openStoreInApp = true;
	AppRate.preferences.storeAppURL.ios = '799668898';
	AppRate.preferences.storeAppURL.android = 'market://details?id=com.sole.insider.free';
	AppRate.preferences.customLocale = customLocale;
	AppRate.preferences.displayAppName = 'SoleInsider';
	AppRate.preferences.usesUntilPrompt = 3;
	AppRate.preferences.promptAgainForEachNewVersion = true;
	AppRate.promptForRating(false);
});

document.addEventListener("deviceready", onDeviceReadyNotification, false);

function onDeviceReadyNotification() {
  cordova.plugins.notification.local.schedule({
    title: 'My first notification',
    text: 'Thats pretty easy...',
    foreground: true
  });
};
