//公告预览
(function() {

	var nameArr = new Array('王晓明', '刘若彤', '李烨', '张倩倩', '宋子轩');//名字
	var titleArr = new Array('关于近期举行校园活动的通知', '关于“元旦联欢”汇演', '关于“教职工乒乓球比赛”', '关于“九年级男子篮球赛”', '关于近期举行校园活动的通知');//名字
	var imgArr = new Array('../../image/document_headimg.png', '../../image/headimg2.png');//头像
	var contentArr = new Array('领导好：由于工作需要，请帮忙给恩施客服陈秋艳建立代理商平台帐号，请加急处理，着急使用，谢谢...', '新招南片数据员账号申请：姓名：李真，联系方式：17733124553，申请客服平台（serv.108800.net）账号,，可将原南片数据王兆玉账号修改为新入职人员姓名，后提供给我，谢谢，请公司协助处理。...');//内容
	
	for(var i = 0; i < 100; i++) {
		var j = i % nameArr.length;
		var k = i%30+1;
		var dic = {};
		dic.name = nameArr[j];//名字
		dic.title = titleArr[j];
		dic.headimg = imgArr[i % 2];//头像
		dic.content = contentArr[i % 2];//内容
		dic.red = i < 3 ? '../../image/red_point.png': '../../image/white_point.png';//前三个有红点
		dic.time = '2016-9-' + k ;//时间
		datasource.data.push(dic);

	}
	var table = document.body.querySelector('.mui-table-view');
	var cells = document.body.querySelectorAll('.mui-table-view-cell');
	for(var i = 0; i < 10; i++) {
		var dic = datasource.data[i];
		var noticelist;
		var users = JSON.parse(localStorage.getItem('$noticeIndex') || '[]');
		console.log('quanju的值为：'+users);
		if (users==1) {
			noticelist = '						<div>\
							<div style="float:left">\
								<img class="document-headimg" src="'+dic.headimg+'" /><img class="document-redpoint" src="'+ dic.red+'" /><br/><br/><br/>\
								<font style="text-align: center;font-size: 14px;">' + dic.name + '</font>\
							</div>\
							<font class="document-content">' + dic.title + '\
							</font>\
							<font class="document-content">' + dic.content + '\
							</font>\
							<p class="document-time">' + dic.time + '</p>\
						</div>';
		} else{
			noticelist = '						<div>\
							<div style="float:left">\
								<img class="document-headimg" src="'+dic.headimg+'" /><img class="document-redpoint" src="'+ dic.red+'" /><br/><br/><br/>\
								<font style="text-align: center;font-size: 14px;">' + dic.name + '</font>\
							</div>\
							<font class="document-content">' + dic.content + '\
							</font>\
							<p class="document-time">' + dic.time + '</p>\
						</div>';
		}
		var li = document.createElement('li');
		li.className = 'mui-table-view-cell';
		li.innerHTML = noticelist;
		table.appendChild(li);
	}

})();