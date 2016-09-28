/**
 * @author an
 * 轮播图  加载图片
 * @param {Object} imgUrls
 */
var addImg=function(imgUrls,titles){
	var group=document.body.querySelector(".mui-slider-group,.mui-slider-loop")
	addDiv(imgUrls[imgUrls.length-1],group)
	imgUrls.forEach(function(imgUrl,index,imgUrls){
		var div=document.createElement('div');
		div.className="mui-slider-item"
		div.innerHTML='<a href="#">'
		      	+'<img src="'+imgUrl+'">'
		      	 +'<p class="mui-slider-title">'+titles[index]+'</p>'
		      +'</a>'
		group.appendChild(div);
	})
	addDiv(imgUrls[0],group)
}
/**
 * 加载底部条状物
 * @param {Object} imgUrls
 */
var addStrip=function(imgUrls){
	var strip=document.body.querySelector(".mui-slider-indicator,.mui-text-right");
	for(i=0;i<imgUrls.length;i++){
		var div=document.createElement('div');
		
		if(i==0){
			div.className="mui-indicator mui-active"
		}else{
			div.className="mui-indicator"
		}
		strip.appendChild(div);
	}
}
/**
 * 加载第一条和最后一条数据
 * @param {Object} imgUrl
 * @param {Object} group
 */
var addDiv=function(imgUrl,group){
	var div=document.createElement('div');
	div.className="mui-slider-item mui-slider-item-duplicate"
		div.innerHTML='<a href="#">'
		        +'<img src="'+imgUrl+'">'
		      +'</a>';
	group.appendChild(div);
}
/**
 * 这个其实没啥用
 */
var getImgArray=function(){
	var imgArray=new Array();
	imgArray.push("http://d26uhratvi024l.cloudfront.net/gsc/QL2YT7/c6/06/42/c60642dfee1c4b2bbbfa830327c6eeb7/images/首页/u292.png?token=82cf791ab80eba58c459b69c95bbad80")
	imgArray.push("http://d26uhratvi024l.cloudfront.net/gsc/QL2YT7/c6/06/42/c60642dfee1c4b2bbbfa830327c6eeb7/images/首页/u294.png?token=ad4fb2bed5e47362402ff10a1f1a93c8")
	imgArray.push("http://dxlfb468n8ekd.cloudfront.net/gsc/QL2YT7/c6/06/42/c60642dfee1c4b2bbbfa830327c6eeb7/images/首页/u296.png?token=b8b738b07243e670a9fd7b551287b3da")
	return imgArray;
}
