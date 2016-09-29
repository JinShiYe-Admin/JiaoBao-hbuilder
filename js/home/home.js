var createList=function(item,listData){
	listData.forEach(function(cellData,index,listData){
		var li=document.createElement('li');
		li.className="mui-table-view-cell";
		li.innerHTML='<div class="padding">'
							+'<h4 style="color: #F0AD4E;"><img src="'+cellData.headImg+'" align="middle" class="padding-right-12"/>'+cellData.name+'</h4>'
							+'<p class=" char-darkgray">'+cellData.words+'</p>'
							+'<div>'
							+getPicInner(cellData)
							+'</div>'
							+'<p class="align-right">发表时间：'+cellData.time+'</p>'
						+'</div>'	
		item.appendChild(li);				
	})
}
var getPicInner=function(cellData){
	if(cellData.imgs){
		var imgHTML='';
		cellData.imgs.forEach(function(img,index,imgs){
			imgHTML+='<img class="img-width-33" src="'+img+'"/>'
		})
		return imgHTML
	}else{
		return null
	}
}
var createMoodList=function(){
	var item1=createMoodItem('../image/home/u74.png','不二青春','今天心情很糟糕考试没有考好，继续努力','2016.09.29',[]);
	var item2=createMoodItem('../image/home/u70.png','梦的时间海','今天心情不错哦，哎呦不错哦，就是不错哦，靠的不错哦，看来我的努力没有白费是的啊，人生就要这样，样式大概是这样哒，总之总之','2016.09.30',['../image/home/u99.png','../image/home/u101.png','../image/home/u103.png'])
	var moodList=new Array();
	console.log('第一个'+item1.imgs)
	console.log('第二个'+item2.imgs)
	moodList.push(item1);
	moodList.push(item2);
	return moodList;
}

var createMoodItem=function(headImgUrl,name,words,time,imgsArray){
	var item=new Object();
	item.headImg=headImgUrl;
	item.name=name;
	item.words=words;
	item.imgs=imgsArray;
	item.time=time;
	return item;
}

