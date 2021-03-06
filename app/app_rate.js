document.addEventListener("deviceready", function() {
	var customLocale = {};
	customLocale.title = "Rate SoleInsider";
	customLocale.message = "Are you enjoying SoleInsider? Take a moment to rate it";
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
