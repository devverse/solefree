var url = window.location.href;

if (url.indexOf("localhost") != -1) {
  var serviceURL = "http://localhost/soleinsider/public";
} else {
  var serviceURL = "http://soleinsider.com/public";
}

var admin_url = 'app/';
var app_name = "SoleInsider Free";
var page_title = "SoleInsider Free";

var soleinsider = {};
soleinsider.base_url = serviceURL;
soleinsider.username = "";
soleinsider.member_id = false;
soleinsider.cache = false;
soleinsider.show_featured = true;
soleinsider.version = "5";
soleinsider.build = "android";

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-bottom-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "1000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}