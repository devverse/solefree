// for Android
admobid = {
    banner: 'ca-app-pub-0083160636450496/6391719559',
    interstitial: 'ca-app-pub-0083160636450496/7728851959'
};

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() { 
    // setTimeout(function() { 
    //     navigator.splashscreen.hide(); 
    //     deviceReady = true;
    // }, 2000); 

    setTimeout(function() { 
        analytics.startTrackerWithId('UA-18545304-13');
    }, 4000);

    admob.setOptions({
        publisherId:          "ca-app-pub-0083160636450496/6391719559",  // Required
        interstitialAdId:     "cca-app-pub-0083160636450496/7728851959",
        autoShowInterstitial: true,
        autoShowBanner: true

    });
}

function showBannerAd() {
    if (typeof admob != 'undefined') {
        admob.createBanner();
    }
}

function removeBannerAd() {
	if (typeof admob != 'undefined') {
		admob.removeBanner();
	}
}

function prepareInterstitial() {
	if(typeof admob != 'undefined') {
	 	admob.prepareInterstitial();
	}
}

function randomInterstitial() {
    var random = Math.floor((Math.random() * 14) + 1);

    if (random == 1) {
        prepareInterstitial();
    }

}

document.addEventListener('prepareInterstitial', prepareInterstitial, false);