//新建通知公告
(function($) {
	mui.init();
	mui.plusReady(function() {
		//请参考网址http://www.html5plus.org/doc/zh_cn/io.html#plus.io.PRIVATE_DOC
			plus.io.requestFileSystem( plus.io.PUBLIC_DOCUMENTS, function( fs ) {
				// fs.root是根目录操作对象DirectoryEntry
						//alert( "Request file system success: " + fs.root.fullPath );

		// 可通过fs操作PRIVATE_WWW文件系统 
		// ......
	}, function ( e ) {
		alert( "Request file system failed: " + e.message );
	} );
	})

	//左滑删除按钮方法
	$('#list').on('tap', '.mui-btn', function(event) {
		var elem = this;
		var li = elem.parentNode.parentNode;
		mui.confirm('确认删除该附件？', '提示', btnArray, function(e) {
			if(e.index == 0) {
				li.parentNode.removeChild(li);
			} else {
				setTimeout(function() {
					$.swipeoutClose(li);
				}, 0);
			}
		});
	});

})(mui);
var btnArray = ['确认', '取消'];
var getimg = function() { //点击图片方法
	if(mui.os.plus) {
		var a = [{
			title: "拍照"
		}, {
			title: "从手机相册选择"
		}];
		plus.nativeUI.actionSheet({
			title: "请选择图片位置",
			cancel: "取消",
			buttons: a
		}, function(b) { /*actionSheet 按钮点击事件*/
			switch(b.index) {
				case 0:
					break;
				case 1:
					//拍照回调函数
					//							plus.camera.getCamera().captureImage( successCB, errorCB, option );  
					//第一个是拍照成功的回调，第二个是拍照失败的回调，第三个是拍照的设置，其中一三是必选的。
					//
					//拍照成功后会返回文件的url地址，
					plus.camera.getCamera().captureImage(function(e) { //e：文件的url地址
							console.log("event:" + e);
							var name = e.substr(e.lastIndexOf('/') + 1);
							console.log("name:" + name);
							//图片压缩转换
							//
							//
							//void plus.zip.compressImage( options, successCB, errorCB);
							//				
							//说明：
							//
							//可用于图片的质量压缩、大小缩放、方向旋转、区域裁剪、格式转换等。
							//
							//参数：
							//
							//options: ( CompressImageOptions ) 必选 
							//图片压缩转换的参数
							//successCB: ( CompressImageSuccessCallback ) 可选 
							//图片压缩转换操作成功回调，操作成功时调用。
							//errorCB: ( ZipErrorCallback ) 可选 
							//图片压缩转换操作失败回调，操作失败时调用。
							//返回值：
							//
							//void : 无	
							plus.zip.compressImage({
								src: e, //压缩转换原始图片的路径
								dst: '_doc/' + name, //压缩转换目标图片的路径
								overwrite: true, //覆盖生成新文件
								quality: 50 //压缩图片的质量 取值范围为1-100，1表示使用最低的图片质量（转换后的图片文件最小）、100表示使用最高的图片质量（转换后的图片文件最大）； 默认值为50
							}, function(zip) { //图片压缩转换后的图片信息

								console.log("filesize:" + zip.size);
								if(zip.size > (10 * 1024 * 1024)) {
									return mui.toast('文件超大,请重新选择~');

								}
								var table = document.body.querySelector('.mui-table-view');
								var cells = document.body.querySelectorAll('.mui-table-view-cell');
								var li = document.createElement('li');
								li.className = 'mui-table-view-cell ';
								li.innerHTML = '<div class="mui-slider-right mui-disabled">\<a class="mui-btn mui-btn-red">删除</a>\</div>\<div class="mui-slider-handle">' + name + '\</div>'
									//下拉刷新，新纪录插到最前面；
								table.insertBefore(li, table.firstChild);
							}, function(zipe) {
								mui.toast('压缩失败！')
							});

						},
						function(e) {
							mui.toast(e.message);
						}, {});
					break;
				case 2:
					//void plus.gallery.pick(successCB, errorCB, option);

					//说明：从系统相册中选择图片或视频文件。每次仅能选择一个文件，选择后将返回选择的文件路径。
					//
					//参数：
					//
					//succesCB: ( GalleryPickSuccessCallback | GalleryMultiplePickSuccessCallback ) 必选 从系统相册中选择文件完成后的回调函数，单选时通过GalleryPickSuccessCallback回调函数返回选择的图片或视频文件路径，多选时通过GalleryMultiplePickSuccessCallback回调函数返回图片或视频文件路径。
					//
					//errorCB: ( GalleryErrorCallback) 可选 从系统相册中选择文件操作错误的回调函数。
					//
					//option: ( GalleryOptions) 可选 设置选择文件的参数
					//
					//返回值：void : 无
					plus.gallery.pick(function(e) { //e:文件路径
						console.log("event:" + e);
						var name = e.substr(e.lastIndexOf('/') + 1);
						console.log("name:" + name);

						plus.zip.compressImage({
							src: e,
							dst: '_doc/' + name,
							overwrite: true,
							quality: 50
						}, function(zip) {
							console.log("filesize:" + zip.size);
							if(zip.size > (10 * 1024 * 1024)) {
								return mui.toast('文件超大,请重新选择~');
							}
							var table = document.body.querySelector('.mui-table-view');
							var cells = document.body.querySelectorAll('.mui-table-view-cell');
							var li = document.createElement('li');
							li.className = 'mui-table-view-cell ';
							li.innerHTML = '<div class="mui-slider-right mui-disabled">\<a class="mui-btn mui-btn-red">删除</a>\</div>\<div class="mui-slider-handle">' + name + '\</div>'
								//下拉刷新，新纪录插到最前面；
							table.insertBefore(li, table.firstChild);
						}, function(zipe) {
							mui.toast('压缩失败！')
						});

					}, function(e) {
						mui.toast(e.message);
					}, {});
					break;
				default:
					break;
			}
		})
	}

}
var getfile = function() { //点击文件方法
	var table = document.body.querySelector('.mui-table-view');
	var cells = document.body.querySelectorAll('.mui-table-view-cell');
	for(var i = cells.length, len = i + 1; i < len; i++) {
		var li = document.createElement('li');
		li.className = 'mui-table-view-cell ';
		li.innerHTML = '<div class="mui-slider-right mui-disabled">\<a class="mui-btn mui-btn-red">删除</a>\</div>\<div class="mui-slider-handle">' + i + '.doc\</div>'
			//下拉刷新，新纪录插到最前面；
		table.insertBefore(li, table.firstChild);
	}
}