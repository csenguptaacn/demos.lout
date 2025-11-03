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
        identityToken: "eyJraWQiOiJtb2JpbGVVc2VyVmVyaWZpY2F0aW9uIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJNb2JpbGVVc2VyU2V0dXBWZXJpZmljYXRpb25Jc3N1ZXIiLCJzdWIiOiJhNzNmZWNkMS02ZjkzLTRkM2MtYThhNS05NjAzNDIxMmFjOTMiLCJleHAiOjE3NjIxODIwNDEsImlhdCI6MTc2MjE3ODQ0MX0.le0CwOxHcTRoWH44Tm9wwNgkAFInjJRPEuTpw4WM37yE8Vg-_jfBuTneK53odI3qbq5MuWCK6n-06GlMCkN3bUVSzhPgQiJIsb3py932GUyIVKOV5bxJ0t6-a7QX7BX31jyF_L_-3Ls-bJHjnUFoAA2dSDAszb2YKigsCojGb0HUD3bRtVvH4gIiVHcjKATDFl0IJvmZMWY6lqN6WKVvjpKBsUKfPWIkDjcrS-hUl9de6akNkkjXJaS3lHIAlFTfaRDeTJJLQuY_8JcM1YSnrPeqbptBAiRZu3a1EPZiG-Ts2lsQKCD55OrON6n06GJRCbKUBdFcL3CPfoeuKAGRiQ"
      });
   	  embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields( {
         "CS_AfeelaId" : "a73fecd1-6f93-4d3c-a8a5-96034212ac93"
      });
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
