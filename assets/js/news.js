$('#newspg').live('pageshow', function(event) {
	getFeeds();
});


function getFeeds(){
  var feeds = makePost("rssFeeds",'');
  $( "#feedtemplate" ).tmpl( feeds ).appendTo("#feedlist");
   $('#feedlist').listview('refresh');


   $( "#feedtemplate2" ).tmpl( feeds ).appendTo("#feedlist2");
   $( "#feedlist2" ).find(":jqmData(role=collapsible)").collapsible();
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