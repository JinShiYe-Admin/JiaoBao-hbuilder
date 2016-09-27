/**
 * 创建gride
 * @param {Object} array
 */
var createGirde = function(array) {
		var gride = document.body.querySelector(".mui-grid-9,.mui-grid-view")
		array.forEach(function(map, index, array) {
			console.log("字符串：" + map.key + "图标：" + map.value)
			var li = document.createElement('li')
			li.className = "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3";
			li.innerHTML = '<a href="#">' +
				'<img class="mui-icon" src="'+map.value+'"></img>' +
				'<div class="mui-media-body">' + map.key + '</div>' +
				'</a>';
			gride.insertBefore(li, gride.firstChild)
		})
	}
	/**
	 * 加载数据 创建Gride
	 * @param {Object} array
	 */
var putGrideData = function(array) {
		createGirde(array);
	}
	/**
	 * 数据 数据
	 */
var createArray = function() {
	var value = {
		key: "你好",
		value:"http://d26uhratvi024l.cloudfront.net/gsc/QL2YT7/c6/06/42/c60642dfee1c4b2bbbfa830327c6eeb7/images/公文主页/u38.png?token=00b0dee150e8bfe6d6cbc0b6bf28ebae"
	}
	var array = new Array();
	for(i = 0; i < 9; i++) {
		array.push(value);
	}
	console.log(JSON.stringify(array))
	return array;
}