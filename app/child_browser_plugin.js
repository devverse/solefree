document.addEventListener("deviceready", onDeviceReady, false);

var root = this;

/* When this function is called, PhoneGap has been initialized and is ready to roll */
function onDeviceReady()
{
	var cb = ChildBrowser.install();
	if(cb != null)
	{
		cb.onLocationChange = function(loc){ root.locChanged(loc); };
		cb.onClose = function(){root.onCloseBrowser()};
		cb.onOpenExternal = function(){root.onOpenExternal();};

		window.plugins.childBrowser.showWebPage("http://google.com");		
	}

	alert("deviceready!");
}

function onCloseBrowser()
{
	alert("In index.html child browser closed");
}

function locChanged(loc)
{
	alert("In index.html new loc = " + loc);
}

function onOpenExternal()
{
	alert("In index.html onOpenExternal");
}
