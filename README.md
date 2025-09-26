<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
  
        <div id='targetlout'>AFEELA CHAT HOSTER</div>
<script type='text/javascript'>
	function initEmbeddedMessaging() {
		try {
			embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'

			embeddedservice_bootstrap.init(
				'00DQL000003Reaj',
				'ECS',
				'https://sonyhondamobility01--dev1.sandbox.my.site.com/ESWECS1723011659341',
				{
					scrt2URL: 'https://sonyhondamobility01--dev1.sandbox.my.salesforce-scrt.com'
				}
			);
		} catch (err) {
			console.error('Error loading Embedded Messaging: ', err);
		}
	};
		 window.addEventListener(
        "onEmbeddedMessagingReady", () => {
            embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields( {
                'CS_AfeelaId' : '01993c61-befc-712c-b772-09f27cd25e77',
				'CS_Origin' : 'Mobile App'
            } );
        }
    );
</script>
<script type='text/javascript' src='https://sonyhondamobility01--dev1.sandbox.my.site.com/ESWECS1723011659341/assets/js/bootstrap.min.js' onload='initEmbeddedMessaging()'></script>

	</body>
</html>
