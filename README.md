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
			script_tag.src = "https://raw.githubusercontent.com/csenguptaacn/demos.lout/main/CustServicePortal_lout.js";
			
			document.body.appendChild(script_tag);
			document.body.appendChild(serverScript);
			}
    </script>
  </body>
</html>
