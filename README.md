<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
  
        <div id='targetlout'>Welcome, I am Afeela Hoster</div>
	<button onclick="login()">Login for LOUT</button>
<script type='text/javascript'>
   window.addEventListener("onEmbeddedMessagingReady", () => {
      console.log("Received the onEmbeddedMessagingReady event.");
      // Send your identity token to Salesforce.
      embeddedservice_bootstrap.userVerificationAPI.setIdentityToken({
        identityTokenType: "JWT",
        identityToken: "eyJraWQiOiJtb2JpbGVVc2VyVmVyaWZpY2F0aW9uIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJNb2JpbGVVc2VyU2V0dXBWZXJpZmljYXRpb25Jc3N1ZXIiLCJzdWIiOiJhNzNmZWNkMS02ZjkzLTRkM2MtYThhNS05NjAzNDIxMmFjOTMiLCJleHAiOjE3NjIxNTkxNjAsImlhdCI6MTc2MjE1NTU2MH0.sWKshHVGinMEuy9MFfLj7CpC70gkgDGn0I7uGmY6_GCE1FSJb8eTAro47bPu_DamiGIwHkEETKd9afMm4Bc4t8bExLw4qsxhly46vQYnH_v9Z6oLs-U8a8B15Uyzvb4H5cg4I00FDEow1DYNpH564mzHMnhu1Yt5NOsVmUHWq8_Ew8HxWpl0bXKdZGP3jIuZ5hwr09te5c3A68-KtnQ600Vx9WHgQHbJZIX-lhnRIahZCDNI-vXC6fX77uLjJNua2ndY5iLQjldxwio_2A5r9RVkEW9U_tYwORthk5brcng36W2c9lGkBxmGoBXWwasEtlTAjf4i5ZhBhpteEa0TTw"
      });
   	 // embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields( {
      //   "CS_AfeelaId" : "a73fecd1-6f93-4d3c-a8a5-96034212ac93"
    //  });
    });


	function initEmbeddedMessaging() {
		try {
			embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'

			embeddedservice_bootstrap.init(
				'00DQL000003Reaj',
				'MobileApp',
				'https://sonyhondamobility01--dev1.sandbox.my.site.com/ESWMobileApp1759489999007',
				{
					scrt2URL: 'https://sonyhondamobility01--dev1.sandbox.my.salesforce-scrt.com'
				}
			);
		} catch (err) {
			console.error('Error loading Embedded Messaging: ', err);
		}
	};
</script>
<script type='text/javascript' src='https://sonyhondamobility01--dev1.sandbox.my.site.com/ESWMobileApp1759489999007/assets/js/bootstrap.min.js' onload='initEmbeddedMessaging()'></script>


</body>
</html>
