$(document).ready(function(){
	$('#page2').hide();
	$('#page3').hide();
	$('#about-page').hide();
	$('#contact-page').hide();
	$('#projects-page').hide();
	//these variables to be reused any time something needs to slide in
	//or out
	var slideOut = { direction: 'up', mode: 'hide'};
	var slideIn = { direction: 'down', mode: 'show'};
	var slideLateralIn = { direction: 'left', mode: 'show'};
	var slideLateralOut = { direction: 'right', mode: 'hide'};
	var slideLateralIn3 = { direction: 'right', mode: 'show'};
	var slideLateralOut3 = { direction: 'left', mode: 'hide'};


       setInterval(function() {
        	$(".arrow-container").effect( "bounce", {distance: 6, times:2}, 400 );
        },5000)
	
	$('#page1').click(function(){
		//change 'toggle' to 'effect' once tshooting is done
		$(this).toggle('slide', slideOut, 1000);
		$('#page2').toggle('slide', slideIn, 1000);
	});
		
	$('#page2').click(function(){
		//change 'toggle' to 'effect' once tshooting is done
		$(this).toggle('slide', slideOut, 1000);
		$('#page3').toggle('slide', slideIn, 1000);
	});
	$('#link1').click(function(){
		//change 'toggle' to 'effect' once tshooting is done
		$('#page3').toggle('slide', slideLateralOut, 1000);
		$('#about-page').effect('slide', slideLateralIn, 1000);
	});
	$('#link2').click(function(){
		//change 'toggle' to 'effect' once tshooting is done
		$('#page3').toggle('slide', slideOut, 1000);
		$('#projects-page').effect('slide', slideIn, 1000);
	});
	$('#link3').click(function(){
		//change 'toggle' to 'effect' once tshooting is done
		$('#page3').toggle('slide', slideLateralOut3, 1000);
		$('#contact-page').effect('slide', slideLateralIn3, 1000);
	});
	$("div.arrow-right:eq(1)").click(function(){
		$('#about-page').effect('slide', slideLateralOut3, 1000);
		$('#page3').effect('slide', slideLateralIn3, 1000);
	});
});
