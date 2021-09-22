<html>
<body>
<table border="1">
<?php
foreach ($_GET as $name => $value) {
?><tr><td><?=$name;?></td><td><?=$value;?></td></tr>   
<?php
}
?>
</table>
</body>
</html>