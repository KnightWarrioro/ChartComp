<?php  
	if ( isset( $_POST['myForm'] ) ){
		echo ("here");
	}
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<div>
		<form name="myForm" action="http://dev.myntra.com:3000/pagephp" method="GET">
			<table border="1">
				<tr>
					<td>URL : </td>
					<td><input type="text" name="url" class="url" id="url" placeholder="Enter Url of Data" required/> </td>
				</tr>
				<tr>
					<td>Select Chart type</td>
					<td>
					<select name = "chart_type" required>
		                <option value="">--Select--</option>
		                <option value="line">Line Graph</option>
		                <option value="bar">Bar Graph</option>
		                <option value="pie">Pie Chart</option>
	                </select>
	                </td>
				</tr>
				<tr>
					<td colspan="2"><input type="submit" value="Click Here!"></td>
				</tr>
			</table>

		</form>
	<div>
</body>
</html>