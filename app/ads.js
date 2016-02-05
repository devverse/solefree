var deviceReady = false;
var admobid = {};

function onDeviceReady() { 
    setTimeout(function() { 
    navigator.splashscreen.hide(); 
    deviceReady = true;
    }, 2000); 
}

// for Android
admobid = {
    banner: 'ca-app-pub-0083160636450496/6391719559',
    interstitial: 'ca-app-pub-0083160636450496/7728851959'
};

function showBannerAd() {
    if (typeof AdMob != 'undefined' && deviceReady == true) {
        AdMob.createBanner({
            adId : admobid.banner,
            position : AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow : true
        });
    }
}

function removeBannerAd() {
	if (typeof AdMob != 'undefined' && deviceReady == true) {
		AdMob.removeBanner();
	}
}

function prepareInterstitial() {
	if(typeof AdMob != 'undefined' && deviceReady == true) {
	 	AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow: false} );
	}
}


function showInterstitial() {
    if(typeof AdMob != 'undefined' && deviceReady == true) {
    	AdMob.showInterstitial();
    }
}

document.addEventListener('prepareInterstitial', prepareInterstitial, false);