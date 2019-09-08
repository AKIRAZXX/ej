$(".left_nav").on("click","li",function(){
	var url = $(this).attr("url");
	$("wrapper").load(url);
})