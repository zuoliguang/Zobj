$(function(){
	$("#ECalendar_case1").ECalendar({
		 type:"date",
		 skin:"#233",
		 offset:[0,2]
	});
	
	$("#ECalendar_case2").ECalendar({
		 type:"time",
		 offset:[0,2]
	});

	$("#ECalendar_case3").ECalendar({
		 type:"time",
		 stamp:false,
		 skin:5,
		 format:"yyyy-mm-dd hh:ii",
		 callback:function(v,e) {
			 $(".callback span").html(v)
		 }
	});
})
