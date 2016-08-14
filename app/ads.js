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

    // setTimeout(function() { 
    //     analytics.startTrackerWithId('UA-18545304-13');
    // }, 4000); 
}

function showBannerAd() {
    if (typeof AdMob != 'undefined') {
        AdMob.createBanner({
            adId : admobid.banner,
            position : AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow : true
        });
    }
}

function removeBannerAd() {
	if (typeof AdMob != 'undefined') {
		AdMob.removeBanner();
	}
}

function prepareInterstitial() {
	if(typeof AdMob != 'undefined') {
	 	AdMob.prepareInterstitial({
           adId:admobid.interstitial, 
           autoShow: true
        });
	}
}

function randomInterstitial() {
    var random = Math.floor((Math.random() * 14) + 1);

    if (random == 1) {
        prepareInterstitial();
    }

}

document.addEventListener('prepareInterstitial', prepareInterstitial, false);