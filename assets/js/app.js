var member_id = localStorage.getItem('member_id');

function loginCheck(){

  var member_type = localStorage.getItem('member_type');
  var member_id = localStorage.getItem('member_id');

  var username  = localStorage.getItem('username');

  if ( member_id == null ||  member_type == 'guest' || username == null || member_id === 'undefined' || username === 'undefined'){
     $(".hideBtn").remove();
     $(".hiddenmessage").show();
     $(".showBtn").show();
     $(".button").button();

  }
}

$('div[data-role="page"]').on( 'pagebeforeshow',function(event){
  loadPanel();
  $(".button").button();
  
});

function loadPanel(){

  $('.panelDiv').load('panel.html', function() {  
  $( "#mypanel" ).trigger( "updatelayout" );
    //$(".panelList").listview("refresh");
  });
}


$('#twitterpg').live('pageinit', function(event) {
  getTwitterFeeds();
  //getMyTwitterFeeds();
});


$('#myreleasespg').live('pageinit', function(event) {
  getMyReleases();
});

$('#myrestockspg').live('pageinit', function(event) {
  getMyRestocks();
});


$('#releasespg').live('pageinit', function(event) {;
  getReleases();
});



$('#pastreleasespg').live('pageinit', function(event) {
  loginCheck();
  getPastReleases();
});


$('#productcheckspg').live('pageinit', function(event) {
  getProducts();
});

$('#availabilityhistorypg').live('pageinit', function(event) {
    loginCheck();
    getAvailabilityHistory();
});

$('#salespage').live('pageinit', function(event) {
    getSales();
});

$('#allsalespage').live('pageinit', function(event) {
    getallSales();
});

$('#newspg').live('pageinit', function(event) {
    getNewsFeed();
});

$('#stillavailpage').live('pageinit', function(event) {
    getStillAvail();
});

$("#createAccountBtn").live('click',function(event){
    var username = $(".createusername").val();
    var password = $('.createpassword').val();
    var confirm = $('.passwordconfirm').val();

    if (password !== confirm){
        alert("Passwords do not match");
        return;
    }

     if (password.length < 4){
        alert("Password must be longer than 4 characters");
        return;
    }

    return createAccount(username,password);
});

$('.addReleaseAlert').live('click',function(event){
    var element = $(event.target);
    var product_id = element.attr('data-product-id');
    addReleaseAlert(product_id);
});

$('.addRestockAlert').live('click',function(event){
    var element = $(event.target);
    var product_id = element.attr('data-product-id');
    addRestockAlert(product_id);
});

$('.sendLinkToPurchase').live('click',function(event){
    var element = $(event.target);
    var product_id = element.attr('data-product-id');
    sendLinkToPurchase(product_id);
});

$('.sendShopifyLinkToPurchase').live('click',function(event){
    var element = $(event.target);
    var sneaker_url = element.attr('data-sneaker-url');
    var sneaker_image = element.attr('data-sneaker-image');
    sendShopifyLinkToPurchase(sneaker_url,sneaker_image);
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


$('.watchTwitterBtn').live('click',function(event){


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
    console.log("here");

});



function getallSales(){
   var releases = makePost("getallSales",'');
    $( "#stillAvailTemplate" ).tmpl( releases ).appendTo("#saleslist");
    loginCheck();
    $(".button").button();
}

function getSales(){
    var releases = makePost("getSales",'');
    $( "#stillAvailTemplate" ).tmpl( releases ).appendTo("#saleslist");
     loginCheck();
    $(".button").button();
}

function getStillAvail(){
    var releases = makePost("getStillAvail",'');
    $( "#stillAvailTemplate" ).tmpl( releases ).appendTo("#stillavail");
     loginCheck();
    $(".button").button();
}

function getPastReleases(){
     var releases = makePost("pastReleaseDates",'');
     $( "#pastreleasesTemplate" ).tmpl( releases ).appendTo("#pastreleases")
}

function getReleases(){
   var releases = makePost("releaseDates",'');
     $( "#releasesTemplate" ).tmpl( releases ).appendTo("#releases")
     loginCheck();
     $(".button").button();
  }

  function getMyReleases(){
     var data = {
        'member_id' : member_id
    };

    var releases = makePost("getMyReleases",data);
     loginCheck();

     if (releases){
      $( "#releasesTemplate" ).tmpl( releases ).appendTo("#releases");
    }
  }


  function getMyRestocks(){
     var data = {
        'member_id' : member_id
    };

    var restocks = makePost("getMyRestocks",data);
     loginCheck();

     if (restocks){
       $( "#productsTemplate" ).tmpl( restocks ).appendTo("#productChecks");
    }
  }


  function getProducts(){
     var releases = makePost("productsChecks",'');
     $( "#productsTemplate" ).tmpl( releases ).appendTo("#productChecks");
      loginCheck();
     $(".button").button();

  }

  function createAccount(username,password){

    var data = {
        'username' : username,
        'password' : password,
        'phone' : $(".phone").val(),
        'carrier' : $(".carrier option:selected").val()
    };

    var member_id = makePost("createAccount",data);


    if (member_id !== false){
        localStorage.clear();
        localStorage.setItem('username', username);
        localStorage.setItem('member_id',member_id);
        localStorage.setItem('member_type',"member");
        location.href = 'index.html';
    }else{
        alert('Your account could be created, please try again');
    }

  }

   function getNewsFeed(){
       var news = makePost("rssFeeds",'');
       $( "#newsTemplate" ).tmpl( news ).appendTo("#news");
  }

  function addReleaseAlert(product_id){
    var data = {
        'product_id' : product_id,
        'member_id' : member_id
    };

   alert('You will be notified two hours before the shoe drops on release day.');
    makePost("addReleaseAlert",data);
  }

  function sendLinkToPurchase(product_id){
    var data = {
        'product_id' : product_id,
        'member_id' : member_id
    };
    alert('You have been email a link to purchase this item. Please check your spam folder');
    makePost("sendLinkToPurchase",data);

  }

   function addRestockAlert(product_id){
    var data = {
        'product_id' : product_id,
        'member_id' : member_id
    };
    
    alert('You will be notified as soon as the shoe becomes available online again.');
    makePost("addRestockAlert",data);
  }

  function sendShopifyLinkToPurchase(sneaker_url,sneaker_image){
     var data = {
        'sneaker_url' : sneaker_url,
        'sneaker_image' : sneaker_image,
        'member_id' : member_id
    };
    
    alert('You have been email a link to purchase this item. Please check your spam folder');
    var results = makePost("sendShopifyLinkToPurchase",data);
  }

  function getAvailabilityHistory(){
     var history = makePost("getAvailabilityHistory",'');
      $( "#availhistorytemplate" ).tmpl( history ).appendTo("#availhistory");
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