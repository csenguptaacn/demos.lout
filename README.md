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
                         document.body.appendChild(newdiv);   
			
			
			$Lightning.use(
			'c:CS_SHMLightningOutApp', // name of the Lightning app
			function () {
          // Callback once framework and app loaded
			$Lightning.createComponent(
            'c:CSMessagingSessionUtility', // top-level component of your app
            {
               'clientsessionid' : 'cs4557383492',
               'afeelaid' : '',
            }, // attributes to set on the component when created
            'lightningout', // the DOM location to insert the component
            function (cmp) {
              // callback when component is created and active on the page
				}
			);
			},
		'https://sonyhondamobility01--dev1.sandbox.my.site.com/afeelacss'
      );
			}
    </script>
	<script src="	https://sonyhondamobility01--dev1.sandbox.my.site.com/afeelacss/lightning/lightning.out.js"></script>
     </body>
</html>
