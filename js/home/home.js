/**
 * @anthor an
 */
/**
 * 创建心情广场界面
 * @param {Object} item 绑定的父控件
 * @param {Object} listData 心情广场数据
 */
var createList = function(item, listData) {
		//遍历
		listData.forEach(
			/**
			 * 子元素创建
			 * @param {Object} cellData 子元素
			 * @param {Object} index 子元素在数组中的序号
			 * @param {Object} listData 数组
			 */
			function(cellData, index, listData) {
			var li = document.createElement('li');//创建子元素
			li.className = "mui-table-view-cell";//设置类
			//子元素的innerHTML
			li.innerHTML = '<div>' +
				'<b style="color: #F0AD4E;"><img src="' + cellData.headImg + '" align="middle" class="padding-right-12"/>' + cellData.name + '</b>' +
				'<p class=" char-darkgray">' + cellData.words + '</p>' +
				'<div>' +
				//获取图片的innerHTML
				getPicInner(cellData) +
				'</div>' +
				'<p class="align-right">发表时间：' + 
				//获取时间
				cellData.time + '</p>' +
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
	 * 心情广场数据数组
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
	item.headImg = headImgUrl;//头像地址
	item.name = name;//名字
	item.words = words;//说了啥
	item.imgs = imgsArray;//图片 数组
	item.time = time;//时间
	return item;
}
/**
 * 创建求知精选 model
 * @param {Object} title 标题
 * @param {Object} words 详情
 * @param {Object} imgsArray 图片数组
 */
var createSiftedItem = function(title, words, imgsArray) {
	var item = new Object()
	item.title = title;//标题
	item.words = words;//详情
	item.imgs = imgsArray;//图片数组
	return item;
}
/**
 * 模拟服务器传回的数据
 * @param {Object} len 数组长度
 */
var createSiftedData = function(len) {
	var siftedList = new Array();
	if(len >= 5) {
		for(i = 0; i < 5; i++) {
			//加载元素
			addItem(siftedList)
		}
	} else {
		for(i = 0; i < len; i++) {
			//加载元素
			addItem(siftedList)
		}
	}
	return siftedList
}
/**
 * 增加单个数据
 * @param {Object} array 加入的目标数组
 */
var addItem = function(array) {
	var item = createSiftedItem('2016年9月30日(第111期)', '这期主要介绍了啥呢，我也不知道', ['../image/home/u118.png', '../image/home/u131.png']);
	array.push(item)
}
/**
 * 精选列表
 * @param {Object} item 精选父控件
 * @param {Object} siftedList 精选列表数据
 */
var createSiftedList=function(item,siftedList){
	console.log(JSON.stringify(siftedList))
	siftedList.forEach(function(sifted,index,siftedList){
		var div=document.createElement('div');//创建子控件
		//根据不同位置，设置不同样式
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
		//加载子控件
		item.appendChild(div)
	})
}
/**
 * cell的innerHTML
 * @param {Object} item 子元素
 */
var getSiftedCommonHTML=function(item){
	return '<b>'+item.title+'<b></br>'
		+'<p>'+item.words+'</p></br>'
		+'<img class="img-size" src="'+item.imgs[0]+'"/>';
}
/**
 * cell的innerHTML
 * @param {Object} item 第四个子元素
 */
var getSiftedForthHTML=function(item){
	return '<b>'+item.title+'</b></br>'
		+'<p>'+item.words+'</p></br>'
		+'<img class="img-size-half" src="'+item.imgs[0]+'"/>'
		+'<img class="img-size-half" src="'+item.imgs[1]+'"/>';
}
/**
 * 创建求知推荐
 * @param {Object} imgUrl 图片Url
 * @param {Object} title 标题
 */
var createRecommendItemObject=function(imgUrl,title){
	var item=new Object();
	item.img=imgUrl;//图片地址
	item.title=title;//标题
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
	//遍历标题
	titles.forEach(
		/**
		 * 数组加载子元素
		 * @param {Object} title
		 * @param {Object} index
		 * @param {Object} titles
		 */
		function(title,index,titles){
		arrays.push(createRecommendItemObject(imgUrls[index],title));
	})
	return arrays;
}
/**
 * 创建求知推荐界面
 * @param {Object} item  求知推荐父控件
 * @param {Object} array 求知推荐数组
 */
var createRecommendView=function(item,arrays){
	//遍历求知推荐数组
	arrays.forEach(
		/**
		 * 创建子元素
		 * @param {Object} arr 子元素
		 * @param {Object} index 在数组中的序列号
		 * @param {Object} arrays
		 */
		function(arr,index,arrays){
		var div=document.createElement('div');//设置子元素
		//根据位置不同 设置样式
		switch(index){
			case 0:
			case 4:
			div.className='mui-table-view-cell  mui-col-xs-3 mui-col-sm-3 sifted-border-top'
			break;
			default:
			div.className='mui-table-view-cell  mui-col-xs-3 mui-col-sm-3 recommend-border'
			break;
		}
		//设置innerHTML
		div.innerHTML='<a href="#">' +
				'<img class="mui-icon recommend-img" src="' + arr.img + '"></img>' +
				'<small class="mui-media-body">' + arr.title + '</small>' +
				'</a>';
		//加载子元素
		item.appendChild(div)		
	})
	
}
