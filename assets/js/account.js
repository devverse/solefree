var member_id = localStorage.getItem('member_id');

$('#accountpg').live('pageshow', function(event) {
	getAccount();
});

$("#updateAccountBtn").click(function(e){
      updateAccount();
 });




function updateAccount(){

  if ($('.username').val().length < 4){
    alert('Please enter a valid username');
    return;
  }

   var data = {
        'member_id' : member_id,
        'username' : $('.username').val(),
        'phone' : $('.phone').val(),
        'carrier' : $("select").val()
    };

  
    var account = makePost("updateAccount",data);
}

function getAccount(){

   var data = {
        'member_id' : member_id
    };

   var account = makePost("accountInfo",data);
   $(".username").val(account.email);
   $(".phone").val(account.phone_number);
   $(".carrier option[value='"  + account.carrier +"']").attr("selected", "selected");
    $('select').selectmenu('refresh', true);
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