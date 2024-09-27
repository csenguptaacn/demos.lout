<html>
<head>
<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=UTF-8">
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

<body>
  <h1>WEB TO LEAD FORM</h1>
<form action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DQL000003Reaj" method="POST">

<input type=hidden name="oid" value="00DQL000003Reaj">
<input type=hidden name="retURL" value="https://www.shm-afeela.com/en/subscribe/">

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


<input type="submit" name="submit">

</form>
</body>
</html>
