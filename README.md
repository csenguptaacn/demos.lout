<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
  
        <div id='targetlout'>Welcome, I am Afeela Hoster -----!!!</div>
	<button onclick="login()">Load LOUT</button>

    <script>
        function login() {
		    var newdiv = document.createElement('div');
			newdiv.setAttribute("id", "lightningout");		
                         document.body.appendChild(newdiv);   
			
			
			$Lightning.use(
			'c:SampleAuraDepApp', // name of the Lightning app
			function () {
          // Callback once framework and app loaded
			$Lightning.createComponent(
            'c:sampleloutLWC', // top-level component of your app
            {}, // attributes to set on the component when created
            'lightningout', // the DOM location to insert the component
            function (cmp) {
        console.log("Component loaded:", cmp);
      },
      function (error) {
        console.error("Lightning Out Error:", error);
        alert("Error loading component: " + error.message);
      }
			);
			},
			'https://chandrangshu-dev-ed.my.site.com/louthoster'
      );
			}
    </script>
	<script src="https://chandrangshu-dev-ed.my.site.com/louthoster/lightning/lightning.out.js"></script>
	</body>
</html>
