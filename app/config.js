var url = window.location.href;

if (url.indexOf("localhost") != -1) {
	var serviceURL = "http://localhost/dev/soleinsider/site/public";
} else{
	var serviceURL = "http://soleinsider.com/public";
}

var admin_url = 'app/';
var app_name = "Sole Insider";
var page_title = "Sole Insider";

var soleinsider = {};
soleinsider.base_url = serviceURL;
soleinsider.username =   "";
soleinsider.member_id =  '';
soleinsider.cache = true;
soleinsider.show_featured = true;
soleinsider.version = "4.3";
soleinsider.version_type = "free";
soleinsider.member_type = "free";

if (soleinsider.version_type == "free"){
	soleinsider.showads = false;
} else{
	soleinsider.showads = false;
}