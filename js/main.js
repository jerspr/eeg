var obj = {
	init: function(){
		obj.stickitHeader();
	},
	stickitHeader: function(){
		$('.nav').stickit({extraHeight: 0});
	}
}
$(document).ready(function(){
	obj.init();
});
