$(function(){
	// 为栏目绑定事件

	$("ul.left_nav").on("click","li",function(){

		var url = $(this).attr("url");
		$("#wrapper").load(url);
	});
	$("li").hover(function () {
	    $(this).attr("background:#009788");
	});
	$(".left_nav").on('click',"li",function(){
        $(this).addClass("current").siblings().removeClass("current");
    });
	
    $("li:first").trigger("click");//触发button的click事件

});
