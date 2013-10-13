var url = window.location.href;

if (url.indexOf("localhost") != -1) {
	var serviceURL = "http://localhost/dev/restock/site/public";
} else{
	var serviceURL = "http://soleinsider.com/public/mobile";
}


var app_name = "High End";
var page_title = "High End";

var soleinsider = {};
soleinsider.base_url = serviceURL;
soleinsider.username =   "";
soleinsider.member_id =  1;