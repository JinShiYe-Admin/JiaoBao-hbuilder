var myFAQ=(function(){
	var data='';
	var createItem=function(title,question,answer,time,type){
		var item=new Object();
		item.title=title;
		item.question=question;
		item.answer=answer;
		item.time=time;
		item.type=type;
		return item;
	}
	var createQuestionData=function(len){
		var titles=['生活'];
		var questions=['老师，你好。我发小25了，女生，到现在还没谈过男朋友，她长相、身材都没问题，为什么都不找男朋友，当然她不是同性恋',
		'我的女朋友对待爱情太理想化了，她期待她的第一个男朋友就是她未来丈夫，我会感到压力，害怕不能走到最后，压力很大。她很好，我怕辜负她'];
		var answers=[];
		var times=['10-12','10-13'];
		var type=0;
		return createData(len,titles,questions,answers,times,type);
	}
	var createAnswerData=function(len){
		var titles=['UC头条新闻热点追踪'];
		var questions=['还记得教室后窗无声的窥视，上课瞌睡时飞来的粉笔头，作文本上用红笔写下的长长评语吗？'+
		'无论是严厉的督促还是温柔的开导，这些已筑成我成长的一步一步的小台阶，想起老师们，我心里满怀感激，你们老师有哪些常说的话让你印象深刻？']
		var answers=['这是道送分题，不会的平时都不带脑子吗？']
		var times=['10-13']
		var type=1;
		return createData(len,titles,questions,answers,times,type);
	}
	var createData=function(len,titles,questions,answers,times,type){
		var data=new Array();
		for(i=0;i<len;i++){
			var cell=createItem(titles[i%titles.length],questions[i%questions.length],answers[i%answers.length],times[i%times.length],type);
			data.push(cell);
		}
		return data;
	}
	var createList=function(id,data){
		var list=document.getElementById(id);
		data.forEach(function(cell,index,data){
			var li=document.createElement('li');
			li.className='mui-table-view-cell';
			li.innerHTML=createCellInner(cell);
			list.appendChild(li)
		})
	}
	var createCellInner=function(cell){
		var answer='';
		var time='';
		if(cell.type==1){
			answer='<div>'
                		+'<span class="answer mui-pull-left">答</span>'
                		+'<p>'+cell.answer+'</p>'
                	+'</div>';
             time='<br />'
		            +'<p class="mui-pull-right">暂无回答 '+cell.time+'</p>';   	
		}else{
			time='<br />'
		            +'<p class="mui-pull-right">暂无回答 '+cell.time+'</p>'
		            +'<p class="mui-pull-right"><span>取消提问</span></p>' ;
		}
		return ' <div >'
                	+'<h4 class="title"><span class="topical">话题</span>'+ cell.title+'</h4><br />'
                	+'<div>'
                		+'<span class="ask mui-pull-left">问</span>'
                		+'<p>'+cell.question+'</p>'
                	+'</div><br />'
                	+answer
                	+time
                +'</div>'
	}
	var clearChild=function(item){
		while(item.firstElementChild){
			item.removeChild(item.firstElementChild);
		}
	}
	return{
		createQuestionData:createQuestionData,
		createAnswerData:createAnswerData,
		createList:createList,
		clearChild:clearChild,
		data:data
	}
})(mui)
