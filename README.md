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
        identityToken: "yJraWQiOiJtb2JpbGVVc2VyVmVyaWZpY2F0aW9uIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJNb2JpbGVVc2VyU2V0dXBWZXJpZmljYXRpb25Jc3N1ZXIiLCJzdWIiOiJhNzNmZWNkMS02ZjkzLTRkM2MtYThhNS05NjAzNDIxMmFjOTMiLCJleHAiOjE3NjE4MjY3NzIsImlhdCI6MTc2MTgyMzE3Mn0.yGGjkT6pJJpArccBM-4oo5voEbWHT8t5MYAJPVvXMsJgqhrxDFjs7uYwi219wrtS9tODOU2ncxmITLGegbU6yfZO3EdStNSo4vJuZY2IW6k4HOjLTtPciEITbw1Y9iWnP2Eei1W-uyJ8EU73ggCv2OIl6pMNYTdbXDHxE_W9ZDyFagrAnVs_pWu5R79tfYuIJka-QeHkTZtnOvS-874YCvGl7WjKn5Ie6vRddaZbsOz-fJtahUXIsAf5-BaJPH0Wq0udtcMknBmWUHJcYnSaW4ya-CvR3lUd6u6iR7K4fbIz1IML0lPFQNS0ORJz2U8M4xTCyrdDhgVrLSkPt9Zmww"
      });
   	  embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields( {
         "CS_AfeelaId" : "a73fecd1-6f93-4d3c-a8a5-96034212ac93"
      });
    });


     window.addEventListener("onEmbeddedMessagingIdentityTokenExpired", () => {
      console.log("Received the onEmbeddedMessagingIdentityTokenExpired event.");
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
<script type='text/javascript' src='https://sonyhondamobility01--dev1.sandbox.my.site.com/ESWMobileApp1759489999007/assets/js/bootstrap.min.js%27' onload='initEmbeddedMessaging()'></script>
 </body>
</html>
