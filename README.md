<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
  
        <div id='targetlout'>Welcome, I am Afeela Hoster</div>
	<button onclick="login()">Login for LOUT</button>
<script type='text/javascript'>

    window.addEventListener("onEmbeddedMessagingReady", () => {

      console.log("Received the onEmbeddedMessagingReady event.");


      // Send your identity token to Salesforce.

      embeddedservice_bootstrap.userVerificationAPI.setIdentityToken({

        identityTokenType: "JWT",

        identityToken: "eyJraWQiOiJtb2JpbGVVc2VyVmVyaWZpY2F0aW9uIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJNb2JpbGVVc2VyU2V0dXBWZXJpZmljYXRpb25Jc3N1ZXIiLCJzdWIiOiJhNzNmZWNkMS02ZjkzLTRkM2MtYThhNS05NjAzNDIxMmFjOTMiLCJleHAiOjE3NjE4MjQ1NDAsImlhdCI6MTc2MTgyMDk0MH0.IZVom3g3KWqxetw2hMUFGzozx7PDS7AaSIusfeiJ6di-QC_ueKiVmTY7i7lQ58Q1M2v4Nm2H0hjXlV1Dj9RCKrcAfSP5F3veNbVHzpy-PUJkUB0TPaJJOoT_GfKjn60jAXjlxhNtr_iJNUOmv7kaomsfmYnKtiWw_cwiNp_M5rs68r_U_GplVLZkfaJXADmrTzxnEZWTEB4D0AieVTdPqhW8EJr2r1LdXmRGeJx7cFzBh0QZc0dO6I_loUn0Tpq46W3_kbstl7Kt-5GwoM0Jv6mVX9ODVJPRN44CqRnOM8ms46vKoj-_PZZ7eRuPdJ97RKewaLD4eJZmIL91krdBtg"

      });

   	  embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields( {

         "CS_AfeelaId" : "a73fecd1-6f93-4d3c-a8a5-96034212ac93"

      });

    });


     window.addEventListener("onEmbeddedMessagingIdentityTokenExpired", () => {

      console.log("Received the onEmbeddedMessagingIdentityTokenExpired event.");

      // Refresh the identity token and send it to Salesforce.

      /*embeddedservice_bootstrap.userVerificationAPI.setIdentityToken({

        identityTokenType: "JWT",

        identityToken:{JWT token provide},

      });*/

    });

	function initEmbeddedMessaging() {

		try {

			embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'
 
			embeddedservice_bootstrap.init(

				'00DQL000003Reaj',

				'MobileApp',

				'https://sonyhondamobility01--dev1.sandbox.my.site.com/ESWMobileApp1759489999007',

				{

					scrt2URL: 'https://sonyhondamobility01--dev1.sandbox.my.salesforce-scrt.com'

				}

			);

		} catch (err) {

			console.error('Error loading Embedded Messaging: ', err);

		}

	};
</script>
<script type='text/javascript' src='https://sonyhondamobility01--dev1.sandbox.my.site.com/ESWMobileApp1759489999007/assets/js/bootstrap.min.js%27' onload='initEmbeddedMessaging()'></script>
 </body>
</html>
