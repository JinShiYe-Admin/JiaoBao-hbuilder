/**
 * @anthor an
 */
/**
 * @param {Object} item 绑定的父控件
 * @param {Object} listData 数据
 */
var createList = function(item, listData) {
		listData.forEach(function(cellData, index, listData) {
			var li = document.createElement('li');
			li.className = "mui-table-view-cell";
			li.innerHTML = '<div>' +
				'<h4 style="color: #F0AD4E;"><img src="' + cellData.headImg + '" align="middle" class="padding-right-12"/>' + cellData.name + '</h4>' +
				'<p class=" char-darkgray">' + cellData.words + '</p>' +
				'<div>' +
				getPicInner(cellData) +
				'</div>' +
				'<p class="align-right">发表时间：' + cellData.time + '</p>' +
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
		var item1 = createMoodItem('../image/home/u74.png', '不二青春', '今天心情很糟糕考试没有考好，继续努力', '2016.09.29', []);
		var item2 = createMoodItem('../image/home/u70.png', '梦的时间海', '今天心情不错哦，哎呦不错哦，就是不错哦，靠的不错哦，看来我的努力没有白费是的啊，人生就要这样，样式大概是这样哒，总之总之', '2016.09.30', ['../image/home/u99.png', '../image/home/u101.png', '../image/home/u103.png'])
		var moodList = new Array();
		console.log('第一个' + item1.imgs)
		console.log('第二个' + item2.imgs)
		moodList.push(item1);
		moodList.push(item2);
		return moodList;
	}
	/**
	 * 创建object
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
var createSiftedItem = function(title, words, imgsArray) {
	var item = new Object()
	item.title = title;
	item.words = words;
	item.imgs = imgsArray;
	return item;
}
var createSiftedData = function(len) {
	var siftedList = new Array();
	if(len >= 5) {
		for(i = 0; i < 5; i++) {
			addItem(siftedList)
		}
	} else {
		for(i = 0; i < len; i++) {
			addItem(siftedList)
		}
	}
	return siftedList
}

var addItem = function(array) {
	var item = createSiftedItem('2016年9月30日(第111期)', '这期主要介绍了啥呢，我也不知道', ['../image/home/u118.png', '../image/home/u131.png']);
	array.push(item)
}
var createSiftedList=function(item,siftedList){
	console.log(JSON.stringify(siftedList))
	siftedList.forEach(function(sifted,index,siftedList){
		var div=document.createElement('div');
		switch(index){
			case 0:
			console.log("0"+JSON.stringify(sifted))
			div.className="mui-table-view-cell  mui-col-xs-4 mui-col-sm-4 sifted-border-top  "
			div.innerHTML=getSiftedCommonHTML(sifted)
			break;
			case 1:
			case 2:
			case 4:
			div.className="mui-table-view-cell  mui-col-xs-4 mui-col-sm-4 align-center sifted-border-top sifted-border-left"
			div.innerHTML=getSiftedCommonHTML(sifted)
			break;
			case 3:
			div.className="mui-table-view-cell  cell-width-67 align-center sifted-border-right sifted-border-top"
			div.innerHTML=getSiftedForthHTML(sifted)
			break;
			default:
			break;
		}
		item.appendChild(div)
	})
}
var getSiftedCommonHTML=function(item){
	return '<h4>'+item.title+'<h4></br>'
		+'<p>'+item.words+'</p></br>'
		+'<img class="img-size" src="'+item.imgs[0]+'"/>';
}
var getSiftedForthHTML=function(item){
	return '<h4>'+item.title+'<h4></br>'
		+'<p>'+item.words+'</p></br>'
		+'<img class="img-size-half" src="'+item.imgs[0]+'"/>'
		+'<img class="img-size-half" src="'+item.imgs[1]+'"/>';
}
