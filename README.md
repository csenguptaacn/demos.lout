<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
  
        <div id='targetlout'>Welcome, I am Afeela Hoster</div>
	<button onclick="login()">Login for LOUT</button>

    <script>
        function login() {
		    var newdiv = document.createElement('div');
			newdiv.setAttribute("id", "lightningout");		
			//document.getElementById('targetlout').appendChild(newdiv); 
                         document.body.appendChild(newdiv);   
			
			/*var serverScript = document.createElement("script");
			serverScript.type = "text/javascript";
			serverScript.src = "https://sonyhondamobility01--devpro1.sandbox.my.site.com/CustServicePortal/lightning/lightning.out.js";*/
			
			$Lightning.use(
			'c:cs_SHMLightningOutApp', // name of the Lightning app
			function () {
          // Callback once framework and app loaded
			$Lightning.createComponent(
            'c:cs_MessagingSessionUtility', // top-level component of your app
            {
               'clientsessionid' : 'c12356',
               'afeelaid' : 'af1115678',
            }, // attributes to set on the component when created
            'lightningout', // the DOM location to insert the component
            function (cmp) {
              // callback when component is created and active on the page
				}
			);
			},
        'https://sonyhondamobility01--devpro1.sandbox.my.site.com/CustServicePortal'
      );
			}
    </script>
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
</script>
<script type='text/javascript' src='https://sonyhondamobility01--devpro1.sandbox.my.site.com/ESWMIAWBOt1712677727186/assets/js/bootstrap.min.js' onload='initEmbeddedMessaging()'></script>
  </body>
</html>
