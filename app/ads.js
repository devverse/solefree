// for Android
admobid = {
    banner: 'ca-app-pub-0083160636450496/6391719559',
    interstitial: 'ca-app-pub-0083160636450496/7728851959'
};

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() { 
    // setTimeout(function() { 
    // navigator.splashscreen.hide(); 
    // deviceReady = true;
    // }, 2000); 
    alert('deviceready test');
    window.analytics.startTrackerWithId('UA-18545304-13');
    alert('Starting analyitcs');
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
    var random = Math.floor((Math.random() * 10) + 1);

    if (random == 1 || random == 2) {
        localStorage.setItem("adCount", 1);
        prepareInterstitial();
    }

}

document.addEventListener('prepareInterstitial', prepareInterstitial, false);