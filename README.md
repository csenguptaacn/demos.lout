<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Salesforce Embedded Messaging</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        #embedded-messaging-container {
            width: 100%;
            height: 100vh; /* Full height */
        }
    </style>
</head>
<body>
    <div id="embedded-messaging-container"></div>

    <!-- Salesforce Embedded Messaging Script -->
    <script type="text/javascript">
        // Listen for when Embedded Messaging is ready
        window.addEventListener("onEmbeddedMessagingReady", () => {
            console.log("Embedded Messaging is ready.");
            
            // Send your identity token to Salesforce
            embeddedservice_bootstrap.userVerificationAPI.setIdentityToken({
                identityTokenType: "JWT",
                identityToken: "eyJraWQiOiJtb2JpbGVVc2VyVmVyaWZpY2F0aW9uIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJNb2JpbGVVc2VyU2V0dXBWZXJpZmljYXRpb25Jc3N1ZXIiLCJzdWIiOiJwYXJ0aGEuaGFsZGVyQGFjY2VudHVyZS5jb20iLCJleHAiOjE3NjA2MDgzNDQsImlhdCI6MTc2MDYwNDc0NH0.V18RWA3t033ua0S4BysGl1htmpVGCW8ZZIIOXWu035_U5mpcHhJer399YMyKXJvXLF3O6LuzQ8CkDeLABhWMHU6cWCmWMcnrwlzvD5HkBZR8T1LD7x6n79_tYgF3tZLUOgkmSBAOROPd9Ld8ZN-g12n0wzcto8KXqBID2q1uAY0yfQ8sZgzBiojnyeeosmnD0CxXnQ1IfLAdJkH9J-R4G3LJhC8RZcdlofVEbIFCBK4-xFksnub45z1SmofalWAL3SHddVdBDTkYz04RBKzgMBLAF_my53wm4SlhpBp_C519cZspxDtTNsn9hTCD7frweeMa1wa_CziAQLoTGpJndw"
            });
        });

        // Listen for expired identity token
        window.addEventListener("onEmbeddedMessagingIdentityTokenExpired", () => {
            console.log("Identity token expired. Refresh and set a new token.");
            // Refresh the identity token here
            // embeddedservice_bootstrap.userVerificationAPI.setIdentityToken({ ... });
        });

        // Initialize Embedded Messaging
        function initEmbeddedMessaging() {
            try {
                embeddedservice_bootstrap.settings.language = 'en_US';

                embeddedservice_bootstrap.init(
                    '00DQL000003Reaj', // Salesforce Org ID
                    'MobileApp', // Deployment Name
                    'https://sonyhondamobility01--dev1.sandbox.my.site.com/ESWMobileApp1759489999007', // Base URL
                    {
                        scrt2URL: 'https://sonyhondamobility01--dev1.sandbox.my.salesforce-scrt.com'
                    }
                );
            } catch (err) {
                console.error('Error loading Embedded Messaging: ', err);
            }
        }
    </script>

    <!-- Bootstrap script from Salesforce -->
    <script type="text/javascript" src="https://sonyhondamobility01--dev1.sandbox.my.site.com/ESWMobileApp1759489999007/assets/js/bootstrap.js" onload="initEmbeddedMessaging()">
    </script>
</body>
</html>
