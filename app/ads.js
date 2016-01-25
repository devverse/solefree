function onDeviceReady() { 
    setTimeout(function() { 
    navigator.splashscreen.hide(); 
    }, 2000); 
} 


var admobid = {};

// for Android
admobid = {
    banner: 'ca-app-pub-0083160636450496/6391719559',
    interstitial: 'ca-app-pub-0083160636450496/7728851959'
};

function showBannerAd() {
    return true;
    if (typeof AdMob != 'undefined') {
        AdMob.createBanner({
            adId : admobid.banner,
            position : AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow : true
        });
    }
}

function removeBannerAd() {
    return true;
	if (typeof AdMob != 'undefined') {
		AdMob.removeBanner();
	}
}

function prepareInterstitial() {
    return true;
	if(typeof AdMob != 'undefined') {
	 	AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow: false} );
	}
}


function showInterstitial() {
    return true;
    if(typeof AdMob != 'undefined') {
    	AdMob.showInterstitial();
    }
}

// document.addEventListener('prepareInterstitial', prepareInterstitial, false);