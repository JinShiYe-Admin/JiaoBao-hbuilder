/**
 * 通知列表
 */
var noticelist = (function($) {

	/**
	 * 增加一项通知
	 * @param {Object} mElement 父元素
	 * @param {Object} data 内容数据，一个数组[unread,title,content,staff,time,from],是否显示未读（1-显示），标题，内容，人员，时间,来自
	 * @param {Object} accessory 附件数据数组
	 */
	var addItem = function(mElement, data, accessory) {
		var html = '';
		var htmlFrom = '';
		var htmlAccessory = '';

		var html1 = '';
		if(data[0] === 1) {
			html1 = '<div><img class="notice-unread" src="../../image/icon-unread.png" />';
		}
		var html2 = '<p class="notice-title">' + data[1] + '</p>';
		var html3 = '<font class="notice-content">' + data[2] + '</font>';
		var html4 = '<p class="notice-time">【' + data[3] + '】</p>';
		var html5 = '<p class="notice-time">' + data[4] + '</p>';
		if(data.length == 6) {
			htmlFrom = '<p class="notice-time">' + data[5] + '</p>';
		}
		var html6 = '<div class="notice-accessory">';
		$.each(accessory, function(index, element) {
			var html7 = '<img src="../../image/icon-accessory.png" />';
			var html8 = '<a>' + element + '</a><br />';
			htmlAccessory = htmlAccessory + html7 + html8;
		});

		html = html1 + html2 + html3 + html4 + html5 + htmlFrom + html6 + htmlAccessory + '</div></div>';

		var li = document.createElement('li');
		li.className = 'mui-table-view-cell';
		li.innerHTML = html;
		mElement.appendChild(li);
	}

	/**
	 * 增加一项已读人数和未读人数
	 * @param {Object} mElement
	 * @param {Object} read
	 * @param {Object} unread
	 */
	var addNum = function(mElement, read, unread) {
		var html = '';
		var html1 = '<div><a>' + read + '人已读</a><a style="margin-left: 30px;">' + unread + '人未读</a>'
		var html2 = '<span class="mui-icon mui-icon-forward mui-pull-right"></span></div>';

		html = html1 + html2;
		var li = document.createElement('li');
		li.className = 'mui-table-view-cell';
		li.innerHTML = html;
		mElement.appendChild(li);
	}

	return {
		addItem: addItem, //增加一项通知
		addNum: addNum //增加一项已读人数和未读人数
	}
})(mui);