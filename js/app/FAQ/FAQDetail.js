/**
 * 创建单个回答的model
 * @param {Object} imgUrl 头像
 * @param {Object} name 名字
 * @param {Object} time 时间
 * @param {Object} words 回答
 * @param {Object} comNo 回复数目
 * @param {Object} likeNo 赞数
 */
var createFAQAnswerlItem=function(imgUrl,name,time,words,comNo,likeNo){
	var item=new Object();
	item.imgUrl=imgUrl;
	item.name=name;
	item.time=time;
	item.words=words;
	item.comNo=comNo;
	item.likeNo=likeNo;
	console.log(JSON.stringify(item))
	return item;
}
/**
 * 创建数据 模拟服务器返回的数据
 * @param {Object} answerNo 数据列表item的数目
 */
var createFAQAnswerData=function(answerNo){
	var data=new Array();
	//头像数组
	var imgUrls=['../../image/FAQ/u46.png','../../image/FAQ/u50.png'];
	//名字数组
	var names=['uc网友','张辉|国家一级人力资源管理师','踏狱','uc网友','晨曦'];
	//时间数组
	var times=['07-22','08-19','09-12','09-30','10-10'];
	//回答内容
	var word0='做不长的原因我认为有以下几种：从自身而言就是心不定'
	+'从其他角度说：1.工作和自己的预期不符，2.公司制度让你不爽，3.没盼头，4.和领导以及团队不能很好的融入';
	var word1='在《我本管理》理论中提到一个著名的观点：任何一个问题的出现，都要从自身找原因、找方法、找思路,'+
	'才能熊根本上解决问题.你提出的问题也是一样的。为什么每一份都没有坚持到半年？你要认真分析、反思，找出问题的'+
	'症结，然后我们再来讨论下一步的计划，如何才能坚持下去。谢谢。';
	var word2='老想不干了，但还在干，怕出去没活干';
	var word3='对于职业规划，无非有两种：生存和发展！对于生存我想你只是想活下去的话，现在就不错，不需要烦恼！'
	+'要发展的话，你可以反过来想：如果钱不是问题的话，你想怎么活？1：做什么工作？2：和什么人交往等等此类问题。'
	+'因为以后过什么样的生活，取决于你现在的选择！希望能帮到你';
	var word4='这个我也有。很怕和人交往，不想说话。很不合群。';
	//回答内容数组
	var wordsArr=[word0,word1,word2,word3,word4];
	//回复数目数组
	var comNos=[0,3,5,5,0]
	//点赞数目数组
	var likeNos=[1,2,5,4,96]
	//循环获取cell,加载进数组
	for(i=0;i<answerNo;i++){
		var cell=createFAQAnswerlItem(imgUrls[i%2],names[i%5],times[i%5],wordsArr[i%5],comNos[i%5],likeNos[i%5])
		data.push(cell);
	}
//	console.log(JSON.stringify(data))
	return data;
}
/**
 * 为界面创建列表
 * @param {Object} item 绑定的控件
 * @param {Object} data 加载进去的数组
 */
var createFAQAnswerList=function(item,data){
	data.forEach(function(cell,index,data){
//		console.log(JSON.stringify(cell))
		var li =document.createElement('li');
		li.className='mui-table-view-cell';
		li.innerHTML=createFAQAnswerInner(cell);
		item.appendChild(li)
	})
}
/**
 * cell的innerHTML
 * @param {Object} cell 单个cell数据
 */
var createFAQAnswerInner=function(cell){
	return  '<div>'
		     	+'<img src="'+cell.imgUrl+'" class="mui-pull-left"/>'
		     	+'<div style="padding-top: 12px;">'
		     	+'<b>'+cell.name+'</b>'
		     	+'<p>'+cell.time+'</p>'
		     	+'</div>'
		     +'</div><br />'
		     +'<p>'+cell.words+'</p>'
			+'<div>'
			+'<p class="mui-pull-right"><span class="mui-icon  iconfont icon-liaotian common-color-darkgray"></span>'
			+cell.comNo+'<span class="mui-icon iconfont icon-zanzan common-color-darkgray"></span>'+cell.likeNo+ ' </p>'
			+'</div>'
}
/**
 * 分享
 * @param {Object} shareIcon 分享图标
 */
var share=function(shareIcon){
			//图标加载监听
			shareIcon.addEventListener('tap',function(){
				var targetWeb=plus.webview.getWebviewById('FAQDetail_sub.html');
				plus.share.getServices(
					//成功回调
					function(s){
//						console.log(JSON.stringify(s))
						//向子页面传值
						mui.fire(targetWeb,'share',{
							shares:s
						})
					},
					//失败回调
					function(e){
						console.log(e.message)
						
					}
				)
			})
		}
/**
 * 为分享增加图标
 * @param {Object} shares 分享
 */
var addSharesData=function(shares){
	var imgs=["../../image/thirdParty/sina_weibo.png",
	"../../image/thirdParty/QQ_space.png",
	"../../image/thirdParty/QQ.png",
	"../../image/thirdParty/WeChat.png"];
	shares.forEach(function(each,index,shares){
		each.imgUrl=imgs[index%imgs.length]
	})
}
