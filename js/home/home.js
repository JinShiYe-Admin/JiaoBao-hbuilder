/**
 * @anthor an
 */
/**
 * 创建心情广场界面
 * @param {Object} item 绑定的父控件
 * @param {Object} listData 数据
 */
var createList = function(item, listData) {
		listData.forEach(function(cellData, index, listData) {
			var li = document.createElement('li');
			li.className = "mui-table-view-cell";
			li.innerHTML = '<div>' +
				'<b style="color: #F0AD4E;"><img src="' + cellData.headImg + '" align="middle" class="padding-right-12"/>' + cellData.name + '</b>' +
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
/**
 * 创建求知精选 model
 * @param {Object} title
 * @param {Object} words
 * @param {Object} imgsArray
 */
var createSiftedItem = function(title, words, imgsArray) {
	var item = new Object()
	item.title = title;
	item.words = words;
	item.imgs = imgsArray;
	return item;
}
/**
 * 模拟服务器传回的数据
 * @param {Object} len
 */
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
/**
 * 增加单个数据
 * @param {Object} array
 */
var addItem = function(array) {
	var item = createSiftedItem('2016年9月30日(第111期)', '这期主要介绍了啥呢，我也不知道', ['../image/home/u118.png', '../image/home/u131.png']);
	array.push(item)
}
/**
 * 精选列表
 * @param {Object} item
 * @param {Object} siftedList
 */
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
			div.className="mui-table-view-cell  cell-width-67 align-center  sifted-border-top"
			div.innerHTML=getSiftedForthHTML(sifted)
			break;
			default:
			break;
		}
		item.appendChild(div)
	})
}
/**
 * cell的innerHTML
 * @param {Object} item
 */
var getSiftedCommonHTML=function(item){
	return '<b>'+item.title+'<b></br>'
		+'<p>'+item.words+'</p></br>'
		+'<img class="img-size" src="'+item.imgs[0]+'"/>';
}
/**
 * cell的innerHTML
 * @param {Object} item
 */
var getSiftedForthHTML=function(item){
	return '<b>'+item.title+'</b></br>'
		+'<p>'+item.words+'</p></br>'
		+'<img class="img-size-half" src="'+item.imgs[0]+'"/>'
		+'<img class="img-size-half" src="'+item.imgs[1]+'"/>';
}
/**
 * 
 * @param {Object} imgUrl
 * @param {Object} title
 */
var createRecommendItemObject=function(imgUrl,title){
	var item=new Object();
	item.img=imgUrl;
	item.title=title;
	return item;
}
/**
 * 创建求知推荐Data
 */
var createRecommendDataList=function(){
	var titles=['小学','初中','高中','家教','科普','专家','专栏','其他']
	var imgUrls=['../image/home/u219.png','../image/home/u221.png',
	'../image/home/u227.png','../image/home/u229.png',
	'../image/home/u240.png','../image/home/u242.png',
	'../image/home/u244.png','../image/home/u221.png']
	var arrays=new Array();
	titles.forEach(function(title,index,titles){
		arrays.push(createRecommendItemObject(imgUrls[index],title));
	})
	return arrays;
}
/**
 * 创建求知推荐界面
 * @param {Object} item 
 * @param {Object} array
 */
var createRecommendView=function(item,arrays){
	arrays.forEach(function(arr,index,arrays){
		var div=document.createElement('div')
		switch(index){
			case 0:
			case 4:
			div.className='mui-table-view-cell  mui-col-xs-3 mui-col-sm-3 sifted-border-top'
			break;
			default:
			div.className='mui-table-view-cell  mui-col-xs-3 mui-col-sm-3 recommend-border'
			break;
		}
		div.innerHTML='<a href="#">' +
				'<img class="mui-icon recommend-img" src="' + arr.img + '"></img>' +
				'<div class="mui-media-body">' + arr.title + '</div>' +
				'</a>';
		item.appendChild(div)		
	})
	
}
