/**
 * 加载跳转界面监听的公用方法 
 * @param {Object} item 加载监听的控件
 * @param {Object} targetHTML 目标Url
 */
var jumpPage=function(item,targetHTML){
	item.addEventListener('tap',function(){
		mui.openWindow({
			url:targetHTML,
			id:targetHTML,
			show:{
				anishow:'slide-in-right'
			},
			waiting:{
				title:'正在加载...'
			},
			styles: {
					top: localStorage.getItem('$Statusbar'),
				}
		})
	})
}
/**
 * 加载子页面
 * @param {Object} subPage 子页面
 */
var initSubPage=function(subPage){
	mui.init({
			gestureConfig: {
				doubletap: true//启用双击监听
			},
			subpages: [{
				url: subPage,
				id: subPage,
				styles: {
					top: '45px',
					bottom: localStorage.getItem('$Statusbar'),
				}
			}]
		});

		var contentWebview = null;
		document.querySelector('header').addEventListener('doubletap', function() {
			if(contentWebview == null) {
				contentWebview = plus.webview.currentWebview().children()[0];
			}
			contentWebview.evalJS("mui('#refreshContainer').pullRefresh().scrollTo(0,0,100)");
		});
}

/**
 * 刷新
 * @param {Object} id 刷新的list控件
 * @param {Object} fresh 下拉刷新加载数据的方法
 * @param {Object} addMore 上拉刷新加载数据的方法
 */
var initRefresh=function(id,fresh,addMore){
		mui.init({
				pullRefresh: {
					container: '#refreshContainer',
					down: {
						callback: pulldownRefresh
					},
					up: {
						contentrefresh: '正在加载...',
						callback: pullupRefresh
					}
				}
			});
			/**
			 * 下拉刷新具体业务实现
			 */
			function pulldownRefresh() {
				setTimeout(function() {
					var item = document.getElementById(id)
					//清除所有数据
					while(item.firstChild!=null) {
						item.removeChild(item.firstChild)
					}
					//加载新控件
					fresh();
					mui('#refreshContainer').pullRefresh().endPulldownToRefresh(); //refresh completed
				}, 150);
			}
			var count = 0;
			/**
			 * 上拉加载具体业务实现
			 */
			function pullupRefresh() {
				setTimeout(function() {
					mui('#refreshContainer').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
					var item = document.getElementById(id)
					var cells = document.body.querySelectorAll('.mui-table-view-cell');
					//加载更多数据
					addMore();
				}, 1500);
			}
}
