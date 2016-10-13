/**
 * @anthor an
 */
var qiuZhi_FAQ=(function($){
/**
 * 
 * @param {Object} gride 九宫格父控件
 * @param {Object} array 元素数组，包括图标和标题
 */
var createGride = function(gride,array) {

		//数组遍历
		array.forEach(
			/**
			 * 创建子元素
			 * @param {Object} map 数组元素
			 * @param {Object} index 数组序号
			 * @param {Object} array 数组
			 */
			function(map, index, array) {
			var li = document.createElement('li');//子元素
			var bgColor=null;//获取背景色
			if(array.length<=3){//数组小于等于3，每行3个图标
				li.className = "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4";
			}else{//数组大于3，每行四个图标
				li.className = "mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3";
			}
			//子控件的innerHTML
			li.innerHTML = '<a href="#">' +
				'<img class="mui-icon circular-square" src="' + map.imgUrl 
				+'" style="background-color:'+bgColor
				+';"></img>' +
				'<small class="mui-media-body">' + map.description + '</small>' +
				'</a>';
			/**
			 * 子控件加载点击监听事件
			 */
			events.fireToNewPage('myFAQ.html','sendData',li,map.description);
			//父控件加载子控件
			gride.appendChild(li)
		})
	}

	/**
	 * 创建子控件数组
	 * @param {Object} chars 底部标题 数组
	 * @param {Object} imgUrls 图片Url 数组
	 * @param {Object} urls 跳转页面Url数组
	 */
	var createArray = function(chars, imgUrls,urls) {
		var array=new Array();
		//遍历
		for(i = 0; i < chars.length; i++) {
			var value = {
				description: chars[i],
				imgUrl:imgUrls[i],
				tarUrl:urls[i]
			}
			array.push(value)
		}
		console.log(JSON.stringify(array))
		return array;
	}
	
	var createFAQItem=function(title,words,time,imgUrl){
		var item=new Object();
		item.title=title;
		item.words=words;
		item.time=time;
		item.imgUrl=imgUrl;
		return item;
	}
	var createFAQData=function(len){
		var data=new Array();
		var titles=['海量资源等你来拿','有关美食制作的问题，欢迎问我','家居达人快戳进来','美食佳肴由你定'];
		var words=['如果你是养生达人、健身教练，欢迎入住问啊，与网友分享您的健康生活观。',
		'你来问啊，赶紧来问啊，不来问我走啦',
		'懂室内设计,懂楼房装修，懂家居收纳，那就赶紧入驻问啊',
		'如果您是懂烘培、懂烹调的美食达人，抓紧机会，快来分享您的美食制作经验'];
		var times=['一小时前'];
		var imgUrls=['../../image/FAQ/faq0.png',,'../../image/FAQ/faq2.png','../../image/FAQ/faq3.png']
		for(i=0;i<len;i++){
			var item=createFAQItem(titles[i%titles.length],words[i%words.length],times[i%times.length],imgUrls[i%imgUrls.length]);
			data.push(item);
		}
		console.log(JSON.stringify(data));
		return data;
	}
	/**
	 * 创建求知问答列表
	 * @param {Object} itemId 父控件
	 * @param {Object} data 数据
	 */
	var createQiuZhiFAQList=function(itemId,data){
		var item=document.getElementById(itemId);
		data.forEach(function(cell,index,data){
			var li=document.createElement('li');
			li.className='mui-table-view-cell';
			li.innerHTML=createQiuZhiLiInner(cell);
			events.jumpPage(li,'FAQDetail.html');
			item.appendChild(li);
		})
	}
	/**
	 * 子选项
	 * @param {Object} cell
	 */
	var createQiuZhiLiInner=function(cell){
		var img=null;
		if(cell.imgUrl!=null){
			img='<img class="mui-pull-right img-width25" src="'+cell.imgUrl+'">'
		}else{
			img='';
		}
		return '<a href="#">'
			            +img
			            +'<div class="mui-media-body">'
			                +cell.title
			                +'<p class="mui-ellipsis">'+cell.words+'</p>'
			                +'<p>'+cell.time+'</p>'
			            +'</div>'
			        +'</a>'
	}
	return{
		createGride:createGride,//创建9宫格
		createArray:createArray,//创建9宫格数据
		createFAQItem:createFAQItem,//创建单个item
		createFAQData:createFAQData,//创建求知问答问答数据
		createQiuZhiFAQList:createQiuZhiFAQList,//创建求知问答列表
		createQiuZhiLiInner:createQiuZhiLiInner//创建cell的innerHTML
	}
})(mui)
