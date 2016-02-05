// document.addEventListener("deviceready", function() {
// 	var customLocale = {};
// 	customLocale.title = "Rate SoleInsider";
// 	customLocale.message = "If you enjoy using SoleInsider, would you mind taking a moment to rate it? It won’t take more than a minute. Thanks for your support!";
// 	customLocale.cancelButtonLabel = "No, Thanks";
// 	customLocale.laterButtonLabel = "Remind Me Later";
// 	customLocale.rateButtonLabel = "Rate It Now";

// 	AppRate.preferences.openStoreInApp = true;
// 	AppRate.preferences.storeAppURL.ios = '799668898';
// 	AppRate.preferences.storeAppURL.android = 'market://details?id=com.sole.insider.free';
// 	AppRate.preferences.customLocale = customLocale;
// 	AppRate.preferences.displayAppName = 'SoleInsider';
// 	AppRate.preferences.usesUntilPrompt = 1;
// 	AppRate.preferences.promptAgainForEachNewVersion = false;
// 	AppRate.promptForRating();
// });

document.addEventListener("deviceready", function() {
	var now             = new Date().getTime(),
	    _5_sec_from_now = new Date(now + 10*1000);

	cordova.plugins.notification.local.schedule({
	    text: "Delayed Notification",
	    at: _5_sec_from_now,
	    led: "FF0000",
	    sound: null
	});


	var now             = new Date().getTime(),
	    _15_sec_from_now = new Date(now + 30*1000);

	cordova.plugins.notification.local.schedule({
	    text: "Delayed Notification",
	    at: _15_sec_from_now,
	    led: "FF0000",
	    sound: null
	});
});