//获取状态栏高度，如果机器支持沉浸式则返回状态栏高度，不支持返回0px
var Statusbar = (function() {
	var barHeight = function() {
		//判断当前是否为沉浸式状态栏模式
		var isImmersedStatusbar = plus.navigator.isImmersedStatusbar();
		if(isImmersedStatusbar) {
			//是沉浸式状态栏模式
			return plus.navigator.getStatusbarHeight() + 'px'; // 返回系统状态栏高度
		} else {
			//不是沉浸式状态栏模式
			return 0 + 'px';//返回0px
		}
	}
	return {
		barHeight: barHeight,
	}
})();