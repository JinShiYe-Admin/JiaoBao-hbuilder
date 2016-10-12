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
var createQiuZhiFAQList=function(itemId,data){
	var item=document.getElementById(itemId);
	data.forEach(function(cell,index,data){
		var li=document.createElement('li');
		li.className='mui-table-view-cell mui-media';
		li.innerHTML=createQiuZhiLiInner(cell);
		jumpPage(li,'FAQDetail.html');
		item.appendChild(li);
	})
}
var createQiuZhiLiInner=function(cell){
	var img=null;
	if(cell.imgUrl!=null){
		img='<img class="mui-pull-right" src="'+cell.imgUrl+'">'
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
