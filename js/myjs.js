$(function(){
	
	$(window).scroll(function(event) {
		if ($(this).scrollTop()>50) {
			$('.backToTop').fadeIn();
			$('.navbar__menu').addClass('navbar__create');
			$('.nav-link').addClass('nav-link__color');
		}
		else{
			$('.backToTop').fadeOut();
			$('.navbar__menu').removeClass('navbar__create');
			$('.nav-link').removeClass('nav-link__color');
		}
		
		
	});

	$('.backToTop').click(function() {
		$('html,body').animate({scrollTop:0}, 700)
	});

	$('.link1').on('click',function(){
		$('html,body').animate({scrollTop:0},400)
	});
	$('.link2').on('click',function(){
		$('html,body').animate({scrollTop:$('.about').offset().top},400)
	});
	$('.link3').on('click',function(){
		$('html,body').animate({scrollTop:$('.resume').offset().top},1000)
	});
	$('.link4').on('click',function(){
		$('html,body').animate({scrollTop:$('.portfolio').offset().top},1000)
	});
	$('.link5').on('click',function(){
		$('html,body').animate({scrollTop:$('.getInTouch').offset().top},1000)
	});
	new WOW().init();

})

