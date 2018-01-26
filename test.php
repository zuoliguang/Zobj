<?php

// 测试 goto 操作
// goto z;
// echo 'Foo';
// z:
// echo 'jump';

?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>zobj</title>
	<script type="text/javascript" src="./zobj/index.js"></script>
	<script type="text/javascript">
		$(function(){
			var name = $('#test_name').val();
			console.log(name);
		});
	</script>
</head>
<body>
	<div id="tets">
		<div class="wwww">
			<input id="test_name" type="txt_name" name="txt_name" value="abcdefg" placeholder="测试">
		</div>
	</div>
</body>
</html>
