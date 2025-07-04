<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
	<style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f6f9;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        #lightning-out {
            background: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 600px;
            box-sizing: border-box;
        }

        h1 {
            text-align: center;
            color: #2c3e50;
            font-size: 24px;
            margin-bottom: 20px;
        }

        /* Optional: Style input fields and buttons inside the Lightning component */
        lightning-input,
        lightning-button {
            margin-top: 10px;
            margin-bottom: 10px;
            display: block;
        }
    </style>    
    </head>
    <body>
        <h1>LIGHTNING OUT EXAMPLE</h1>
        <div id="lightning-out"></div>
	    <script src="https://chandrangshu-dev-ed.my.site.com/louthoster/lightning/lightning.out.js"></script>
        <script>
            $Lightning.use(
                'c:SampleAuraDepApp', // name of the Lightning Out app
                function () { // callback after the framework and app load
                    $Lightning.createComponent(
                        'c:sampleloutLWC', // top-level component of the Lightning Out app
                        {}, // attributes to set on the component
                        'lightning-out', // DOM element ID where the component is inserted
                        function (cmp) { // callback after the component loads
                            console.log('The component was created.');
                        }
                    );
                },
                'https://chandrangshu-dev-ed.my.site.com/louthoster'  // Experience Cloud site endpoint
            );
        </script>
    </body>
</html>
