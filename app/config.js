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
