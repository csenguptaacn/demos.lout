<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <div>Afeela Hoster</div>
    <div id="lightningout"></div>

    <script src="https://sonyhondamobility01--devpro1.sandbox.my.site.com/CustServicePortal/lightning/lightning.out.js"></script>
    <script>
      $Lightning.use(
        'c:cs_SHMLightningOutApp', // name of the Lightning app
        function () {
          // Callback once framework and app loaded
          $Lightning.createComponent(
            'c:cs_MessagingSessionUtility', // top-level component of your app
            {}, // attributes to set on the component when created
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
