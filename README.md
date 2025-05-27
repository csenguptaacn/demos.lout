   <div id='targetlout'>Welcome, I am Afeela Hoster -----!!!</div>
<button onclick="login()">Login for LOUT</button>

<script>
    function login() {
	    var newdiv = document.createElement('div');
		newdiv.setAttribute("id", "lightningout");		
                     document.body.appendChild(newdiv);   
		
		
		$Lightning.use(
		'c:CS_SHMLightningOutApp', // name of the Lightning app
		function () {
      // Callback once framework and app loaded
		$Lightning.createComponent(
        'c:CSMessagingSessionUtility', // top-level component of your app
        {
           'clientsessionid' : 'csiuat59850',
           'afeelaid' : 'afuat543774b35668',
        }, // attributes to set on the component when created
        'lightningout', // the DOM location to insert the component
        function (cmp) {
          // callback when component is created and active on the page
			}
		);
		},
	'https://sonyhondamobility01--uat.sandbox.my.site.com/afeelachathost'
  );
		}
</script>
<script src="https://sonyhondamobility01--uat.sandbox.my.site.com/afeelachathost/lightning/lightning.out.js"></script>
<script type='text/javascript'>
	function initEmbeddedMessaging() {
		try {
			embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'

			embeddedservice_bootstrap.init(
				'00Dbc000003llL9',
				'ECS2',
				'https://sonyhondamobility01--uat.sandbox.my.site.com/ESWECS21744283724514',
				{
					scrt2URL: 'https://sonyhondamobility01--uat.sandbox.my.salesforce-scrt.com'
				}
			);
		} catch (err) {
			console.error('Error loading Embedded Messaging: ', err);
		}
	};
	window.addEventListener(
    "onEmbeddedMessagingReady", () => {
        embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields( {
            'CS_AfeelaId' : '',
			'CS_SessionId' : 'csiuat59850'
        } );
    }
);
</script> 
</script>
<script type='text/javascript' src='https://sonyhondamobility01--uat.sandbox.my.site.com/ESWECS21744283724514/assets/js/bootstrap.min.js' onload='initEmbeddedMessaging()'></script>
