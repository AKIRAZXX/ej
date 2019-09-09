<<<<<<< HEAD
$(document).ready(function(){
})
=======

// var baseURL = "http://134.175.154.93:6677";
// // $(function(){
// // 	$("#tj").on("submit",function(){
// // 		//1、获取用户输入
// // 		var i_id = $("#id").val();
// // 		var i_name = $("#name").val();
// // 		var num = $("#num").val();
// // 		var parentId = $("#parentId").val();
// // 		console.log(i_id);
// // 			//2、异步提交给后台
// // 		var url =baseURL+"/category/insertCategory";
// // 		var date;
// // 		if(id){
// // 			data = "id="+i_id+"&name="+i_name+"&num="+num+"&parentId="+parentId;
// // 		} else {
// // 			data = "name="+i_name+"&num="+i_num+"&parentId="+parentId;
// // 		}
// // 		$.post(url,date,function(response){
// // 			reloadData();
// // 		})	 
// // 		event.preventDefault();
// // 	}


// // // 给添加按钮绑定事件
// // 		btn_add.onclick = function(){
// // 			document.querySelector("input[name=realname]").value = "";
// // 			document.querySelector("input[name=telephone]").value = "";
// // 			document.querySelector("input[name=id]").value = "";
			
// // 			//测试
// // 			// console.log(event.target.parentNode.nextElementSibling);
// // 			event.target.parentNode.nextElementSibling.className = "tjbd1";
// // 		}
// // 		btn_add.onblur = function(){
// // 			event.target.parentNode.nextElementSibling.className = "tjbd";
// // 		}
// // })

// //给添加绑定事件

// var btn_add = document.getElementById("btn_add");
// 		//tbody是一个类数组
// var tbody = document.getElementsByTagName("tbody")[0];

// 	document.forms[0].onsubmit = function(event){
// 		var id = document.querySelector("input[name=id]").value;
// 		var name = document.querySelector("input[name=name]").value;
// 		var num = document.queryselector("input[name=num").value;
// 		var parentId = document.querySlector("input[name=parentId]").value;

// 		var xhr = new XMLHttpRequest();
// 		xhr.open("POST",baseURL+"/category/insertCategory");
// 		xhr.responseType = "json";
// 		xhr.setRequestHeader("content-Type","application/x-www-form-urlencoded");
// 		var data;
// 		if(id){
// 			data = "id="+id+"&name="+name+"&num="+num+"&parentId="+parentId;
// 		} else {
// 			data = "name="+name+"&num="+num+"&parentId="+parentId;
// 		}

// 		xhr.send(data);

// 		xhr.onreadyStatechange = function(){
// 			if(this.readyState === 4){
// 				if(this.status === 200){
// 					if(this.response.status === 200){
// 						reloadData();
// 					} else {
// 						alert("接口异常");
// 					}
// 				}
// 			}
// 		}
// 		event.preventDefault();

// 	}
// // 给添加按钮绑定事件
// 		btn_add.onclick = function(){
// 			document.querySelector("input[name=realname]").value = "";
// 			document.querySelector("input[name=telephone]").value = "";
// 			document.querySelector("input[name=id]").value = "";
			
// 			//测试
// 			// console.log(event.target.parentNode.nextElementSibling);
// 			event.target.parentNode.nextElementSibling.className = "tjbd1";
// 		}
// 		btn_add.onblur = function(){
// 			event.target.parentNode.nextElementSibling.className = "tjbd";
// 		}
	


>>>>>>> 4116e0ce26c670bf4157745285c483e0baf39aed


