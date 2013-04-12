var member_id = localStorage.getItem('member_id');

$('#myaccountpg').live('pageshow', function(event) {
  loginCheck();
	getAccount();
});


function getAccount(){
  
}

function loginCheck(){
  var member_id = localStorage.getItem('member_id');
  var username  = localStorage.getItem('username');

  if ( member_id == null ||  username == null || member_id === 'undefined' || username === 'undefined'){
    window.location.href = "index.html";
  }
}

function makePost(endPoint,formData){

 var results = "";

 $.ajax({
        type: "POST",
        url: serviceURL+endPoint,
        async: false,
        cache: false,
        data: formData,
        success: function(data) {
			results = jQuery.parseJSON(data);
		} // end sucess
    });

  return results;
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
 }