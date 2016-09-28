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
		var html1 = '<div class="offical-height">';
		var html2 = '<img class="offical-image" src="' + topData[0] + '">';
		var html3 = '<h4 class="offical-name">' + topData[1] + '</h4>';
		var html4 = '<font class="offical-content">';
		var html5 = topData[2];
		var html6 = '</font><br /><font class="offical-time">' + topData[3] + '</font></div>';
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
		var html1 = '<div class="offical-bottom-title">' + bottomData[0] + '</div>';
		var html2 = '<div class="offical-height"><img class="offical-image offical-bottom-image" src="' + bottomData[1] + '">';
		var html3 = '<font class="offical-name offical-bottom-department">' + bottomData[2] + '</font>';
		var html4 = '<div class="offical-bottom-content"><div class="offical-reply"><div>';

		var html = html1 + html2 + html3 + html4;

		mui.each(bottomReplyData, function(index, element) {
			var html9 = '';
			if(index > 0) {
				html9 = '<div class="offical-bottom-reply-content-line"></div>';
			}
			var html11 = '<div><font><p class="mui-icon mui-icon-contact"></p>';
			var html5 = '<font class="offical-bottom-reply-name">' + element[0] + '</font>';
			var html6 = '<font class="offical-bottom-reply-name">' + element[1] + '</font>';
			var html7 = '</font><br /><div class="offical-bottom-reply-content">';
			var html8 = '<font>' + element[2] + '</font></div></div>';
			htmlReply = htmlReply + html9 + html11 + html5 + html6 + html7 + html8;
		});

		var html10 = '</div><div class="offical-arrow"></div><div class=" offical-arrow offical-arrow2"></div></div></div>';
		html = html + htmlReply + html10;
		var li = document.createElement('li');
		li.className = 'mui-table-view-cell';
		li.innerHTML = html;
		//增加顶部
		mElement.appendChild(li);

	}

	return {
		addTop: addTop, //增加一条公告详情顶部数据
		addBottom: addBottom //增加一条公告详情底部数据
	}
})(mui);