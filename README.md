<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
        <h1>My External Page</h1>
        <div id="lightning-out"></div>
        <script src="https://chandrangshu-dev-ed.my.salesforce.com/lightning/lightning.out.js"></script>
        <script>
            $Lightning.use(
                'c:lout_webinquiryapp', // name of the Lightning Out app
                function () { // callback after the framework and app load
                    $Lightning.createComponent(
                        'c:lout_webinquiryform', // top-level component of the Lightning Out app
                        {}, // attributes to set on the component
                        'lightning-out', // DOM element ID where the component is inserted
                        function (cmp) { // callback after the component loads
                            console.log('The component was created.');
                        }
                    );
                },
                'https://SITE_DOMAIN/SITE_URL' // Experience Cloud site endpoint
            );
        </script>
    </body>
</html>
