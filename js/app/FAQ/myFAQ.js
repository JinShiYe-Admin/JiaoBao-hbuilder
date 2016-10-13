/**
 * @author an
 */
var myFAQ=(function(){
	//获取的数据
	var data='';
	/**
	 * 
	 * @param {Object} title 标题
	 * @param {Object} question 问题
	 * @param {Object} answer 回答
	 * @param {Object} time 事件
	 * @param {Object} type 类型 0我的提问 1我的回答
	 */
	var createItem=function(title,question,answer,time,type){
		var item=new Object();
		item.title=title;
		item.question=question;
		item.answer=answer;
		item.time=time;
		item.type=type;
		return item;
	}
	/**
	 * 我的提问数据
	 * @param {Object} len 数据长度
	 */
	var createQuestionData=function(len){
		var titles=['生活'];
		var questions=['老师，你好。我发小25了，女生，到现在还没谈过男朋友，她长相、身材都没问题，为什么都不找男朋友，当然她不是同性恋',
		'我的女朋友对待爱情太理想化了，她期待她的第一个男朋友就是她未来丈夫，我会感到压力，害怕不能走到最后，压力很大。她很好，我怕辜负她'];
		var answers=[];
		var times=['10-12','10-13'];
		var type=0;
		return createData(len,titles,questions,answers,times,type);
	}
	/**
	 * 我的回答数据
	 * @param {Object} len 数据长度
	 */
	var createAnswerData=function(len){
		var titles=['UC头条新闻热点追踪'];
		var questions=['还记得教室后窗无声的窥视，上课瞌睡时飞来的粉笔头，作文本上用红笔写下的长长评语吗？'+
		'无论是严厉的督促还是温柔的开导，这些已筑成我成长的一步一步的小台阶，想起老师们，我心里满怀感激，你们老师有哪些常说的话让你印象深刻？']
		var answers=['这是道送分题，不会的平时都不带脑子吗？']
		var times=['10-13']
		var type=1;
		return createData(len,titles,questions,answers,times,type);
	}
	/**
	 * 根据长度 数据等获取数据
	 * @param {Object} len 长度
	 * @param {Object} titles 标题数组
	 * @param {Object} questions  问题数组
	 * @param {Object} answers 答案数组
	 * @param {Object} times 事件数组
	 * @param {Object} type 类型 0我的提问 1 我的回答
	 */
	var createData=function(len,titles,questions,answers,times,type){
		var data=new Array();
		for(i=0;i<len;i++){
			var cell=createItem(titles[i%titles.length],questions[i%questions.length],answers[i%answers.length],times[i%times.length],type);
			data.push(cell);
		}
		return data;
	}
	/**
	 * 创建list界面
	 * @param {Object} id 需绑定的控件id
	 * @param {Object} data 数据
	 */
	var createList=function(id,data){
		var list=document.getElementById(id);
		data.forEach(function(cell,index,data){
			var li=document.createElement('li');
			li.className='mui-table-view-cell';
			li.innerHTML=createCellInner(cell);
			list.appendChild(li)
		})
	}
	/**
	 * 获取innerHTml
	 * @param {Object} cell 单个数据
	 */
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
	/**
	 * 清空子元素
	 * @param {Object} item 需清空子元素的控件
	 */
	var clearChild=function(item){
		while(item.firstElementChild){
			item.removeChild(item.firstElementChild);
		}
	}
	return{
		createQuestionData:createQuestionData,//创建我的提问数据
		createAnswerData:createAnswerData,//创建我的回答数据
		createList:createList,//创建列表界面
		clearChild:clearChild,//清空子元素
		data:data//传递的数据
	}
})(mui)
