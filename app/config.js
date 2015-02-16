var url = window.location.href;

if (url.indexOf("localhost") != -1) {
  var serviceURL = "http://localhost/sole-web/public";
} else {
  var serviceURL = "http://soleinsider.com/public";
}

var admin_url = 'app/';
var app_name = "SoleInsider Free";
var page_title = "SoleInsider Free";

var soleinsider = {};
soleinsider.base_url = serviceURL;
soleinsider.username = "";
soleinsider.member_id = '';
soleinsider.cache = false;
soleinsider.show_featured = true;
soleinsider.version = "5";
soleinsider.version_type = "free";
soleinsider.member_type = "free";
soleinsider.build = "android";

if (soleinsider.version_type == "free") {
  soleinsider.showads = false;
} else {
  soleinsider.showads = false;
}
