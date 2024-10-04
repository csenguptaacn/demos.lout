<html>
<head>
<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=UTF-8">
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<style>
div {padding:3px;}
label {padding:2px;}
input {padding:2px;}
div .newsletter{visibility:hidden}
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input[type=submit]:hover {
  background-color: #45a049;
}
div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
</head>
<!--  ----------------------------------------------------------------------  -->
<!--  NOTE: Please add the following <META> element to your page <HEAD>.      -->
<!--  If necessary, please modify the charset parameter to specify the        -->
<!--  character set of your HTML page.                                        -->
<!--  ----------------------------------------------------------------------  -->
<script src="https://www.google.com/recaptcha/api.js"></script>
<script>
//function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 
//function recaptcha_callback(){
//$('.button').prop("disabled", false);
//}

function callValidation(){

  if(grecaptcha.getResponse().length == 0){

            alert('Please click the reCAPTCHA checkbox');

            return false;

        }

        return true;

    }

</script>
 
<!--  ----------------------------------------------------------------------  -->
<!--  NOTE: Please add the following <FORM> element to your page.             -->
<!--  ----------------------------------------------------------------------  -->
<body>
<h1>WEB TO LEAD FORM</h1>
<form action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DD4000000HsJ5" method="POST">
 
<input type=hidden name='captcha_settings' value='{"keyname":"TestKey","fallback":"true","orgId":"00DD4000000HsJ5","ts":""}'>
<input type=hidden name="oid" value="00DD4000000HsJ5">
<input type=hidden name="retURL" value="http://google.com">
 
<!--  ----------------------------------------------------------------------  -->
<!--  NOTE: These fields are optional debugging elements. Please uncomment    -->
<!--  these lines if you wish to test in debug mode.                          -->
<!--  <input type="hidden" name="debug" value=1>                              -->
<!--  <input type="hidden" name="debugEmail"                                  -->
<!--  value="siddhartha.katiyar@accenture.com">                               -->
<!--  ----------------------------------------------------------------------  -->
 
<label for="first_name">First Name</label><input  id="first_name" maxlength="40" name="first_name" size="20" type="text" /><br>
 
<label for="last_name">Last Name</label><input  id="last_name" maxlength="80" name="last_name" size="20" type="text" /><br>
 
<label for="email">Email</label><input  id="email" maxlength="80" name="email" size="20" type="text" /><br>
 
<label for="company">Company</label><input  id="company" maxlength="40" name="company" size="20" type="text" /><br>
 
<label for="city">City</label><input  id="city" maxlength="40" name="city" size="20" type="text" /><br>
 
<label for="state">State/Province</label><input  id="state" maxlength="20" name="state" size="20" type="text" /><br>
 
<div class="g-recaptcha" data-sitekey="6LdUhEkqAAAAAD3c_DaFDSP29kw6Ej6bMnwo1KMk"></div><br>
<input type="submit" name="submit" id="submitBtn" disabled="true" class="button" onclick="return callValidation();" >
 
</form>
</body>
</html>
