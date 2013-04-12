var url = window.location.href;

if (url.indexOf("localhost") != -1) {
	var serviceURL = "http://localhost/restock/site/public/mobile/";
} else{
	var serviceURL = "http://soleinsider.com/public/mobile/";
}
