/*
* @Author: xiyou_zlg
* @Date:   2017-09-20 10:21:36
* @Last Modified by:   xiyou_zlg
* @Last Modified time: 2017-09-20 11:20:57
*/

var route = route || {};

$(function(){
	$('#login').on('click', function() {
		var username = $("#username").val();
		var password = $("#password").val();
		var url = route.doLogin;

		// console.log(username);
		// console.log(password);
		// console.log(url);
		
		$.post(url, function(data){
			console.log(data);
		});
	});
})