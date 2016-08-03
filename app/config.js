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
soleinsider.version = "6.4.4";
soleinsider.build = "android";
soleinsider.localhost = (url.indexOf("localhost") != -1 ? true :  false);

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-bottom-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "2200",
  "timeOut": "2200",
  "extendedTimeOut": "2200",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

window.analytics.startTrackerWithId('UA-18545304-13');
alert('Starting analyitcs');