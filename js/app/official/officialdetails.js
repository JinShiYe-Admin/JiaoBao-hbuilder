/**
 * 公告详情
 */
var officialdetails = (function($) {

	/**
	 * 增加一条公告详情顶部数据
	 * @param {Object} mElement 父元素
	 * @param {Object} topData 顶部数据,一个数组[topImageUrl, topName, topContent, topTime]
	 */
	var addTop = function(mElement, topData) {
		var html1 = '<div class="mui-row"><div class=" mui-col-xs-2 mui-col-sm-2">';
		var html2 = '<div align=center><img class="offical-bottom-image" src="'+topData[0]+'"></div>';
		var html3 = '<div class="offical-name">'+topData[1]+'</div></div>';
		var html4 = '<div class="mui-col-xs-10 mui-col-sm-10">';
		var html5 = '<font class="offical-content">'+topData[2]+'</font><br />';
		var html6 = '<font class="offical-time">'+topData[3]+'</font></div></div>';

		var html = html1 + html2 + html3 + html4 + html5 + html6;

		var li = document.createElement('li');
		li.className = 'mui-table-view-cell';
		li.innerHTML = html;
		//增加顶部
		mElement.appendChild(li);
		var div = document.createElement('div');
		//增加分割线
		div.className = 'offical-bottom-reply-content-line';
		mElement.appendChild(div);
	}


	/**
	 * 增加一条公告详情底部数据
	 * @param {Object} mElement 父元素
	 * @param {Object} bottomData 底部数据，[bottomTitle,bottomImageUrl,bottomDepartment]，标题，部门头像，部门名称
	 * @param {Object} bottomReplyData 批复数据，[bottomReplyName,bottomReplyTime,bottomReplyContent]，批复人姓名，批复时间，批复内容
	 */
	var addBottom = function(mElement, bottomData, bottomReplyData) {
		var html = '';
		var htmlReply = '';

		var html1 = '<div class="mui-row"><div class="mui-col-xs-12 mui-col-sm-12">';
		var html2 = '<div class="offical-bottom-title">' + bottomData[0] + '</div></div>';
		var html3 = '<div class="mui-col-xs-2 mui-col-sm-2">';
		var html4 = '<div align=center><img class="offical-bottom-image" src="' + bottomData[1] + '"></div>';
		var html5 = '<div class="offical-bottom-department">' + bottomData[2] + '</div></div>';
		var html6 = '<div class="mui-col-xs-10 mui-col-sm-10"><div class="offical-reply"><div class="offical-arrow"></div><div class=" offical-arrow offical-arrow2"></div>';

		html = html1 + html2 + html3 + html4 + html5 + html6;

		mui.each(bottomReplyData, function(index, element) {
			var html7 = '';
			if(index > 0) {
				html7 = '<div class="offical-bottom-reply-content-line"></div>';
			}
			var html8 = '<div><font><p class="mui-icon mui-icon-contact"></p>';
			var html9 = '<font class="offical-bottom-reply-name">' + element[0] + '</font>';
			var html10 = '<font class="offical-bottom-reply-name">' + element[1] + '</font>';
			var html11 = '</font><br /><div class="offical-bottom-reply-content">';
			var html12 = '<font>' + element[2] + '</font></div></div>';
			htmlReply = htmlReply + html7 + html8 + html9 + html10 + html11 + html12;
		});

		var html13 = '</div></div></div>';

		html = html + htmlReply + html13;
		var li = document.createElement('li');
		li.className = 'mui-table-view-cell';
		li.innerHTML = html;
		mElement.appendChild(li);
	}

	return {
		addTop: addTop, //增加一条公告详情顶部数据
		addBottom: addBottom //增加一条公告详情底部数据
	}
})(mui);