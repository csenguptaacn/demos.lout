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
        identityToken: "eyJraWQiOiJtb2JpbGVVc2VyVmVyaWZpY2F0aW9uIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJNb2JpbGVVc2VyU2V0dXBWZXJpZmljYXRpb25Jc3N1ZXIiLCJzdWIiOiJhNzNmZWNkMS02ZjkzLTRkM2MtYThhNS05NjAzNDIxMmFjOTMiLCJleHAiOjE3NjE4MjgyNjUsImlhdCI6MTc2MTgyNDY2NX0.HHLmSHPEnxUVfH2MPNPwsAlUAfxDXganE34yB-lioMsuym4aI_ZeFkm-gqaX712BOG3VvlKsc-lEYltkVMuMIN4--QE2GIKZIr52QaYUVzyS4G0bZsXv7lD_vA4oGX5tp9W7LaTKqaJ75J8hshnGGFvYuhHlULBxctNPaJlMI5Vf3fdYZfcyY6JjwDV28hQrOqdK015tc75txdf39QM9scjtuRnKfSbiXwutvsAA0Skgd6ShKQMc0BpCF5OUSH-vICd2R7wgEwzYx0wdzNHV8mRXBbZ20zTG33A0wQU4M-gclMbhoV_oAswySmcC-z1Rqb4qEWLg_OjEZJ8_7kWyyg"
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
