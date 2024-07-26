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
			
			var serverScript = document.createElement("script");
			serverScript.type = "text/javascript";
			serverScript.src = "https://sonyhondamobility01--devpro1.sandbox.my.site.com/CustServicePortal/lightning/lightning.out.js";
			
			var script_tag = document.createElement('script');
			script_tag.type = 'text/javascript';
			//script_tag.src = "https://raw.githubusercontent.com/csenguptaacn/demos.lout/main/CustServicePortal_lout.js";
			script_tag.text='alert('Just loaded some script')';
			document.body.appendChild(script_tag);
			document.body.appendChild(serverScript);
			}
    </script>
     <script src="https://sonyhondamobility01--devpro1.sandbox.my.site.com/CustServicePortal/lightning/lightning.out.js"></script>
    <script>
      $Lightning.use(
        'c:cs_SHMLightningOutApp', // name of the Lightning app
        function () {
          // Callback once framework and app loaded
          $Lightning.createComponent(
            'c:cs_MessagingSessionUtility', // top-level component of your app
            {
               'clientsessionid' : 'c12356',
               'afeelaid' : 'af11156',
            }, // attributes to set on the component when created
            'lightningout', // the DOM location to insert the component
            function (cmp) {
              // callback when component is created and active on the page
            }
          );
        },
        'https://sonyhondamobility01--devpro1.sandbox.my.site.com/CustServicePortal'
      );
    </script>
  </body>
</html>
