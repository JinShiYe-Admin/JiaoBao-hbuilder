/**
 * @anthor sym
 */
/**
 * 创建动态界面
 * @param {Object} item 绑定的父控件
 * @param {Object} listData 数据
 */
var createList = function(item, listData) {
		listData.forEach(function(cellData, index, listData) {
			var li = document.createElement('li');
			li.className = "mui-table-view-cell";
			li.innerHTML = '<div>' +
				'<div class="box " style="float:left ">' +
				'<img src="' + cellData.headImg + '"align="middle"  />' + '<b style = "font-size:16px">' + '孟浩' + '</b>' +
				'</div>' +
				'<div style = "font-size:16px">' + cellData.name + '<p class= "content">' + cellData.words + '</p>' + '</div>' +
				'<div>' + //获取图片的innerHTML
				getPicInner(cellData) +
				'</div>' + '<p class="align-right">发表时间：' +
				//获取时间
				cellData.time + '</p>'

			'</div>'

			item.appendChild(li);
		})
	}
	/**
	 * 图片显示 
	 * @param {Object} cellData
	 */
var getPicInner = function(cellData) {
		if(cellData.imgs) {
			var imgHTML = '';
			cellData.imgs.forEach(function(img, index, imgs) {
				imgHTML += '<img class="cell-width-33" src="' + img + '"/>'
			})
			return imgHTML
		} else {
			return null
		}
	}
	/**
	 * 创建数据
	 * 模拟服务器收到的数据
	 */
var createMoodList = function() {
		var item1 = createMoodItem('../image/home/u74.png', '2015级3班', '今天心情很糟糕考试没有考好，继续努力', '2016.09.29', []);
		var item2 = createMoodItem('../image/home/u70.png', '2015级3班', '今天心情不错哦，哎呦不错哦，就是不错哦，靠的不错哦，看来我的努力没有白费是的啊，人生就要这样，样式大概是这样哒，总之总之哎呦不错哦，就是不错哦', '2016.09.30', ['../image/home/u99.png', '../image/home/u101.png', '../image/home/u103.png'])
		var moodList = new Array();
		console.log('第一个' + item1.imgs)
		console.log('第二个' + item2.imgs)
		moodList.push(item1);
		moodList.push(item2);
		return moodList;
	}
	/**
	 * 创建心情广场model
	 * @param {Object} headImgUrl 头像地址
	 * @param {Object} name 名字
	 * @param {Object} words 说了啥
	 * @param {Object} time 时间
	 * @param {Object} imgsArray 所携带图片
	 */
var createMoodItem = function(headImgUrl, name, words, time, imgsArray) {
	var item = new Object();
	item.headImg = headImgUrl;
	item.name = name;
	item.words = words;
	item.imgs = imgsArray;
	item.time = time;
	return item;
}