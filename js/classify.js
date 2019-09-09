var baseURL = "http://134.175.154.93:6677";
function reloadData(){
	var url = baseURL+"/category/findAllCategory";
	$.get(url,function(response){
		$("#classify_tb1 tbody").empty();
		response.data.forEach(function(item){
			var newtr = $(`<tr>
					<td><input type="checkbox" value="`+item.id+`"></td>
					<td>`+item.name+`</td>
					<td>`+item.num+`</td>
					<td>`+item.parentId+`</td>
					<td>
						<a class="btn_del" href="javascript:void(0)">删除</a>
						<a class="btn_upd" href="javascript:void(0)">修改</a>
						<a class="btn_details" href="javascript:void(0)">详情</a>
					</td>
				</tr>
				`);
			$("#classify_tb1 tbody").append(newtr);

		});

	});
}

$(function(){
	reloadData();
	
})