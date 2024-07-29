<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
  
        <div id='targetlout'>Welcome, I am Afeela Hoster</div>
     <script src="https://sonyhondamobility01--devpro1.sandbox.my.site.com/CustServicePortal/lightning/lightning.out.js"></script>
     <script type='text/javascript'>
	function initEmbeddedMessaging() {
		try {
			embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'
 
			embeddedservice_bootstrap.init(
				'00DD4000000HsJ5',
				'MIAW_BOt',
				'https://sonyhondamobility01--devpro1.sandbox.my.site.com/ESWMIAWBOt1712677727186',
				{
					scrt2URL: 'https://sonyhondamobility01--devpro1.sandbox.my.salesforce-scrt.com'
				}
			);
		} catch (err) {
			console.error('Error loading Embedded Messaging: ', err);
		}
	};
	
	  window.addEventListener("onEmbeddedMessagingReady", e => {
        //log event
        console.log("onEmbeddedMessagingReady event triggered");
        
        //Set invisible prechat field
        embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields({
            "User_Id" : "af1287254218",
            "SessionId" : "cs455737297432"
        });
    });
	
</script>
<script type='text/javascript' src='https://sonyhondamobility01--devpro1.sandbox.my.site.com/ESWMIAWBOt1712677727186/assets/js/bootstrap.min.js' onload='initEmbeddedMessaging()'></script>
  </body>
</html>
