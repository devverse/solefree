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
  var random = Math.floor((Math.random() * 100) + 1);

  if (random === 2) {
    prepareInterstitial();
  }
}

document.addEventListener('prepareInterstitial', prepareInterstitial, false);
