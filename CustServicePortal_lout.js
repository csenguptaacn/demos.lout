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