var inmobi_conf = {
    siteid : "4028cba631d63df10131e1d3191d00cb", // your Property ID
    slot: 15,
    test: true,
    manual: true,
    autoRefresh: 60,
    targetWindow : "_blank", // default "_top"
    onError : function(code)
    {
      if(code == "nfr")
      {
        console.log("Error getting the ads!");
      }
    }
  };

  document.addEventListener("deviceready", onDeviceReady, false);

  function onDeviceReady() {
    alert('device ready');
    $.getScript("inmobi.js", function(){
      showAds();
    });
  }

  function showAds()
  {
    var adsElement = document.getElementById('ads');
    _inmobi.getNewAd(adsElement);
  }

  alert('ads');