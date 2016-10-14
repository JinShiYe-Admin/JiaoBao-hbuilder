var contacts=(function($){
	var sortArray=function(data){	
		var indexWords=['A','B','C','D','E','F','G','H','J','K','L','M','N','O','P','Q','R','S','T','W','X','Y','Z']
		var insert=['啊','把','擦','大','额','法','噶','哈','及','卡','啦','吗','拿','哦','怕','器','然','撒','它','哇','昔','呀','咋'];
		//汉字排序
		data.sort(function(a,b){return (a.name).localeCompare(b.name)});
		console.log(JSON.stringify(data))
		data.forEach(function(cell,index,data){
			insert.forEach(function(iner,ind,insert){
				if(cell.name==iner){
					cell.name=indexWords[ind];
				}
			})
		})
		console.log(JSON.stringify(data))
		data.forEach(function(cell,index,datas){
			indexWords.forEach(function(word,ind,words){
				if(cell.name==word){
					if(index<datas.length-1){
						while(datas[index+1].name==indexWords[ind+1]){
						console.log(datas[index].name)
						data.splice(index,1)
						ind=ind+1;
						}
					}else if(index==datas.length-1){
						data.splice[index,1]
					}
				}
			});
		});
		console.log(JSON.stringify(data));
		return data;
	}
	var getData=function(len){
		var names=['艾洁','冰冰叔','我的错','代勇','党飞','昞哥','毕姥爷','党振东','不留名','赵家人','李家兴','孙由爷'];
		var imgs=['../../image/mine/img0.jpeg','../../image/mine/img1.jpeg','../../image/mine/img2.jpg',
		'../../image/mine/img3.jpg','../../image/mine/img4.jpg','../../image/mine/img5.jpg','../../image/mine/img6.jpg'];
		var insert=['啊','把','擦','大','额','法','噶','哈','及','卡','啦','吗','拿','哦','怕','器','然','撒','它','哇','昔','呀','咋'];
		var data=new Array();
		for(i=0;i<len;i++){
			var cell=getItem(names[i%names.length],imgs[i%imgs.length]);
			data.push(cell);
		}
		insert.forEach(function(word,index,insert){
			var cell=getItem(insert[index]);
			data.push(cell);
		})
		console.log(JSON.stringify(data))
		return data;
	}
	var getItem=function(name,imgUrl){
		var item=new Object();
		item.name=name;
		item.imgUrl=imgUrl
		return item;
	}
	var createlist=function(id,data){
		var list=document.getElementById(id);
		data.forEach(function(cell,index,data){
			var li=document.createElement('li');
			createBackgroud(li,cell);
			li.innerHTML=createInnerHTML(cell);
			list.appendChild(li);
		})
	}
	var createInnerHTML=function(cell){
		var innerString=''
		if(cell.imgUrl){
			innerString='<div>'
				            +'<h5><img src="'+cell.imgUrl+
				            '"align="middle">'
				            +cell.name
				             +'<a  class="mui-pull-right mui-icon mui-icon-phone coatacts_icon_padding" />'
				            +'<a class="mui-pull-right mui-icon mui-icon-chat coatacts_icon_padding" />'
				            +'</h5>'
			            +'</div>'
		}else{
			innerString='<h6>'
						+cell.name
			            +'</h6>'	
		}
		return innerString;
	}
	var createBackgroud=function(li,cell){
		if(cell.imgUrl){
			li.className= 'mui-table-view-cell mui-indexed-list-item'
		}else{
			li.className='mui-table-view-divider mui-indexed-list-group'
			li.setAttribute("data-group",cell.name);
		}
	}
	return{
		sortArray:sortArray,
		getData:getData,
		createlist:createlist
	}
})(mui);
