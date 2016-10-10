var createFAQAnswerlItem=function(imgUrl,name,time,words,comNo,likeNo){
	var item=new Object();
	item.imgUrl=imgUrl;
	item.name=name;
	item.time=time;
	item.words=words;
	item.comNo=comNo;
	item.likeNo=likeNo;
	return item;
}
var createFAQAnswerData=function(answerNo){
	var data=new Array();
	var imgUrls=['../../image/FAQ/u46.png','../../image/FAQ/u50.png']
	var names=['uc网友','张辉|国家一级人力资源管理师','踏狱','uc网友','晨曦']
	var times=['07-22','08-19','09-12','09.30','10.10']
	var word0='做不长的原因我认为有以下几种：从自身而言就是心不定'
	+'从其他角度说：1.工作和自己的预期不符，2.公司制度让你不爽，3.没盼头，4.和领导以及团队不能很好的融入';
	var word1='在《我本管理》理论中提到一个著名的观点：任何一个问题的出现，都要从自身找原因、找方法、找思路,'+
	'才能熊根本上解决问题.你提出的问题也是一样的。为什么每一份都没有坚持到半年？你要认真分析、反思，找出问题的'+
	'症结，然后我们再来讨论下一步的计划，如何才能坚持下去。谢谢。';
	var word2='老想不干了，但还在干，怕出去没活干';
	var word3='对于职业规划，无非有两种：生存和发展！对于生存我想你只是想活下去的话，现在就不错，不需要烦恼！'
	+'要发展的话，你可以反过来想：如果钱不是问题的话，你想怎么活？1：做什么工作？2：和什么人交往等等此类问题。'
	+'因为以后过什么样的生活，取决于你现在的选择！希望能帮到你';
	var word4-='这个我也有。很怕和人交往，不想说话。很不合群。';
	var wordsArr=[word0.word1,word2,word3,word4];
	var comNos=[0,3,5,5,0]
	var likeNos=[1,2,5,4,96]
	for(i=0;i<answerNo;i++){
		data.push(createFAQAnswerlItem(imgUrls[i%2]),names[i%5],names[i%5],wordsArr[i%5],comNos[i%5],likeNos[i%5]);
	}
	return data;
}
var createFAQAnswerList=function(item,data){
	data.forEach(function(cell,index,data){
		var li =document.createElement('li');
		li.className='mui-table-view-cell';
		li.innerHTML=''
		item.appendChild(li)
	})
}
