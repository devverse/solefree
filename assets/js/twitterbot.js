var member_id = localStorage.getItem('member_id');

function loginCheck(){

  var member_type = localStorage.getItem('member_type');
  var member_id = localStorage.getItem('member_id');
  var username  = localStorage.getItem('username');

  if ( member_id == null ||  member_type == 'guest' || username == null || member_id === 'undefined' || username === 'undefined'){
     $(".hideBtn").remove();

  }

}

$('#twitterpg').live('pageshow', function(event) {
  getTwitterFeeds();
	getMyTwitterFeeds();
});

$('.addToWatchList').live('click',function(event){
    var element = $(event.target);
    var twitter_id = element.attr('data-twitter-id');
    addToWatchList(twitter_id);
});

$('.watchBtn').live('click',function(event){

    var twitter_ids = [];
    $('input[type=checkbox]').each(function () {
           if (this.checked) {
              twitter_ids.push($(this).val());
           }
    });

    var data = {
        'twitter_ids' : twitter_ids,
        'member_id' : member_id
    };

    makePost("twitterWatch",data);

});


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

function addToWatchList(twitter_id){
  
}

function getTwitterFeeds(){
    var feeds = makePost("getTwitterFeeds",'');
    $( "#twitterTemplate" ).tmpl( feeds ).appendTo("#twitterlist");
    loginCheck();
    //$(".button").button();

}

function getMyTwitterFeeds(){
    var releases = makePost("getMyTwitterFeeds",'');
    //$( "#myTwitterTemplate" ).tmpl( releases ).appendTo("#mytwitterlist");
    //$(".button").button();
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