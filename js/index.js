$(function(){
	var $menu = $('header .left .wrapper');
	var $mask = $('#mask');
	$menu.on('click',function(){
		$mask.show();
		$('#menu').css({
			width : '270'
		});
	});
	$mask.on('click',function(){
		$mask.hide();
		$('#menu').css({
			width : '0'
		});
	});
	var $imgs = $('#carousel .imgs');
	$('#carousel .arrow li').on('click',function(){
		$(this).addClass('show').siblings().removeClass('show');
		var idx = $(this).index();
		if($('#carousel .container').width() <= 768){
			$imgs.stop().animate({
				left: -idx*280*2
			},1000);
		}
		else{
			$imgs.stop().animate({
				left: -idx*280*4
			},1000);
		}
		
		
	});
});