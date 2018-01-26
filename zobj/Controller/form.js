/*
* @Author: xiyou_zlg
* @Date:   2017-09-20 10:21:36
* @Last Modified by:   xiyou_zlg
* @Last Modified time: 2017-09-20 11:20:57
*/

var route = route || {};

$(function(){
	$('#showData').on('click', function() {
		var data = $("#formData").serializeArray();
		console.log(data);
	});
})