<!DOCTYPE html>
<html>
<head>
<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=UTF-8">
<style>
div {padding:3px;}
label {padding:2px;}
input {padding:2px;}
</style>
</head>

<!--  ----------------------------------------------------------------------  -->
<!--  NOTE: Please add the following <FORM> element to your page.             -->
<!--  ----------------------------------------------------------------------  -->
<body>
<form action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DQL000003Reaj" method="POST">

<input type=hidden name="oid" value="00DQL000003Reaj">
<input type=hidden name="retURL" value="https://www.shm-afeela.com/en/subscribe/">

<!--  ----------------------------------------------------------------------  -->
<!--  NOTE: These fields are optional debugging elements. Please uncomment    -->
<!--  these lines if you wish to test in debug mode.                          -->
<!--  <input type="hidden" name="debug" value=1>                              -->
<!--  <input type="hidden" name="debugEmail"                                  -->
<!--  value="c.sengupta@accenture.com">                                       -->
<!--  ----------------------------------------------------------------------  -->
<div>
<label for="email">Email</label><input  id="email" maxlength="80" name="email" size="20" type="text" /><br>
</div>
<div>
<label for="first_name">First Name</label><input  id="first_name" maxlength="40" name="first_name" size="20" type="text" /><br>
</div>
<div>
<label for="last_name">Last Name</label><input  id="last_name" maxlength="80" name="last_name" size="20" type="text" /><br>
</div>
<div>
<label for="country">Country</label>
<!--<input  id="country" maxlength="40" name="country" size="20" type="text" /><br>-->

<select id="country" name="country">
  <option value="Japan">Japan</option>
  <option value="USA">USA</option>
  <option value="India">India</option>
  <option value="UK">UK</option>
</select>
<br>
</div>

<div>
<label for="zip">Zip</label><input  id="zip" maxlength="20" name="zip" size="20" type="text" /><br>
</div>
<div class="newsletter">
<label>Receive Emails Newsletter:</label>
<input id="00NQL000009itMz" name="00NQL000009itMz" type="checkbox" value="1" /><br>
</div>

<input type="submit" name="submit">

</form>
</body>
</html>
