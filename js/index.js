$(document).ready(function(){
	/*头部共用功能*/
	var ul = 1;
	var Height = -$('.head_ul').height();
	$('.head_ul').css('top',Height + 46 + 'px');
	$('#header>img').click(function(){
		if(ul == 1){
			$('.head_ul').stop(true,false).animate({
				'top': '46px',
			});
			ul = 0;
		}else{
			$('.head_ul').stop(true,false).animate({
				'top': Height + 46 + 'px',
			});
			ul = 1;
		}
	})

	/*尾部共用功能*/
	var images = [
		'image/sy.svg',
		'image/jk.svg',
		'image/bb.svg',
		'image/qx.svg'
	];
	var image = [
		'image/sy1.svg',
		'image/jk1.svg',
		'image/bb1.svg',
		'image/qx1.svg'
	];

	/*$('#footer>div').click(function(){
		switch($(this).index()){
			case 0:
				$(this).children('img').attr('src',images[$(this).index()]);
				$(this).next().children('img').attr('src',image[1]);
				$(this).next().next().children('img').attr('src',image[2]);
				$(this).next().next().next().children('img').attr('src',image[3]);
				$(this).next().next().next().next().children('img').attr('src',image[4]);
				$(this).children('p').css('color','#0D6FB8').parent().siblings().children('p').css('color','#666666');
				break;
			case 1:
				$(this).prev().children('img').attr('src',image[0]);
				$(this).children('img').attr('src',images[$(this).index()]);
				$(this).next().children('img').attr('src',image[2]);
				$(this).next().next().children('img').attr('src',image[3]);
				$(this).next().next().next().children('img').attr('src',image[4]);
				$(this).children('p').css('color','#0D6FB8').parent().siblings().children('p').css('color','#666666');
				break;
			case 2:
				$(this).prev().prev().children('img').attr('src',image[0]);
				$(this).prev().children('img').attr('src',image[1]);
				$(this).children('img').attr('src',images[$(this).index()]);
				$(this).next().children('img').attr('src',image[3]);
				$(this).next().next().children('img').attr('src',image[4]);
				$(this).children('p').css('color','#0D6FB8').parent().siblings().children('p').css('color','#666666');
				break;
			case 3:
				$(this).prev().prev().prev().children('img').attr('src',image[0]);
				$(this).prev().prev().children('img').attr('src',image[1]);
				$(this).prev().children('img').attr('src',image[2]);
				$(this).children('img').attr('src',images[$(this).index()]);
				$(this).next().children('img').attr('src',image[4]);
				$(this).children('p').css('color','#0D6FB8').parent().siblings().children('p').css('color','#666666');
				break;
			case 4:
				$(this).prev().prev().prev().prev().children('img').attr('src',image[0]);
				$(this).prev().prev().prev().children('img').attr('src',image[1]);
				$(this).prev().prev().children('img').attr('src',image[2]);
				$(this).prev().children('img').attr('src',image[3]);
				$(this).children('img').attr('src',images[$(this).index()]);
				$(this).children('p').css('color','#0D6FB8').parent().siblings().children('p').css('color','#666666');
				break;
		}
	})*/
})


//获取BOM结构中指定目标方法 传入：0为工厂，1为运营方，2为组别，3为人员，4为设备；//处理好所有页面后可弃用
function groupitem(num){
	var groupobj;
	var groupobject = [];
	$.ajax({
		type: 'post',
		url: 'http://test.hontech-rdcenter.com:8080/bg-uc/jf/bg/basic/cfc/searchClassifi.json',
		async: false,
		data: {
			id: JSON.parse(localStorage.name).scopeofauthority,
			by: "",
			stop: "1",
		},
		success: function(data){
			groupobj = data.obj;
		}
	})
	for(var groupi = 0; groupi < groupobj.length; groupi++){
		if(groupobj[groupi].icon == num){
			groupobject.push(groupobj[groupi]);
		}
	}
	return groupobject;
}