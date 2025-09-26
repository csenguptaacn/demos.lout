 <html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body>
 
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

               'clientsessionid' : '',

               'afeelaid' : '',

            }, // attributes to set on the component when created

            'lightningout', // the DOM location to insert the component

            function (cmp) {

              // callback when component is created and active on the page

				}

			);

			},

		'https://sonyhondamobility01--dev1.sandbox.my.site.com/afeelachathost'

      );

			}
</script>
<script src="https://sonyhondamobility01--dev1.sandbox.my.site.com/afeelachathost/lightning/lightning.out.js">…
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

                'CS_AfeelaId' : 'af12345678',

				'CS_SessionId' : 'cs123456',

			'CS_Origin' : 'Mobile App'

            } );

        }

    );
</script>
<script type='text/javascript' src='https://sonyhondamobility01--dev1.sandbox.my.site.com/ESWECS1723011659341/assets/js/bootstrap.min.j… onload='initEmbeddedMessaging()'></script>
</body>
</html>

 
