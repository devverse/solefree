// for Android
admobid = {
    banner: 'ca-app-pub-0083160636450496/6391719559',
    interstitial: 'ca-app-pub-0083160636450496/7728851959'
};

function onDeviceReady() { 
    setTimeout(function() { 
    navigator.splashscreen.hide(); 
    deviceReady = true;
    }, 2000); 
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
    alert('prepareInterstitial');
	if(typeof AdMob != 'undefined') {
	 	AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow: false} );
	}
}

function showInterstitial() {
    alert('showInterstitial');
    if(typeof AdMob != 'undefined') {
        AdMob.isInterstitialReady(function(isready) {
    	   if(isready) {
                AdMob.showInterstitial();
            }
        });
    }
}

function randomInterstitial() {
    var random = Math.floor(Math.random() * 2) + 1;

    if (random == 2) {
        localStorage.setItem("adCount", 1);
        prepareInterstitial();
        showInterstitial();
    }

}

document.addEventListener('prepareInterstitial', prepareInterstitial, false);