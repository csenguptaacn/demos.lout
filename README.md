<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
  
        <div id='targetlout'>Lightning Out Example-----!!!</div>
	<button onclick="login()">Load LOUT</button>

    <script>
        function login() {
		    var newdiv = document.createElement('div');
			newdiv.setAttribute("id", "lightningout");		
                         document.body.appendChild(newdiv);   
			
			
			$Lightning.use(
			'c:lout_webinquiryapp', // name of the Lightning app
			function () {
          // Callback once framework and app loaded
			$Lightning.createComponent(
            'c:loutwebinquirydev', // top-level component of your app
            {}, // attributes to set on the component when created
            'lightningout', // the DOM location to insert the component
            function (cmp) {
              // callback when component is created and active on the page
				}
			);
			},
		'https://chandrangshu-dev-ed.my.site.com'
      );
			}
    </script>
	<script src="https://chandrangshu-dev-ed.my.site.com/lightning/lightning.out.js"></script>
	</body>
</html>
