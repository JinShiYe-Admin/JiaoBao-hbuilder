/**
 * @anthor an
 */
/**
 * 创建gride
 * @param {Object} array
 */
var createGirde = function(array) {
		var gride = document.body.querySelector(".mui-grid-9,.mui-grid-view")
		array.forEach(function(map, index, array) {
			console.log("字符串：" + map.key + "图标：" + map.value)
			var li = document.createElement('li')
			var bgColor=getRandomColor();
			li.className = "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3";
			li.innerHTML = '<a href="#">' +
				'<img class="mui-icon circular-square" src="' + map.value + '"style="background-color:'+bgColor+';"></img>' +
				'<div class="mui-media-body">' + map.key + '</div>' +
				'</a>';
			li.addEventListener('tap',function(){
				openWindow(map.tarUrl)
			})
			gride.appendChild(li)
		})
	}
	/**
	 * 加载数据 创建Gride
	 * @param {Object} array
	 */
var putGrideData = function(array) {
	createGirde(array);
}

/**
 * 数据 数据
 */
var createArray = function(chars, imgUrls,urls) {
	var array=new Array();
	for(i = 0; i < chars.length; i++) {
		var value = {
			key: chars[i],
			value: imgUrls[i],
			tarUrl:urls[i]
		}
		array.push(value)
	}
	console.log(JSON.stringify(array))
	return array;
}
/**
 * 创建随机颜色
 */
var getRandomColor = function(){
  return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6);
}
/**
 * 打开新页面
 */
var openTarWindow=function(tarUrl){
	mui.openWindow({
		url:tarUrl,
		id:tarUrl
	})
}
