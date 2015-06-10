$("document").ready(function () {

	$('button').click(function(){
		var search = $('h3');
		var searchStatus = search.css('display');
		if (searchStatus == 'none') {
		search.animate({
		}, 400);
		setTimeout(function() {
			search.css( 'background','red');
		}, 100);
	} else if (searchStatus == 'block'){
		search.animate({
		}, 400);
	};
	});


	$('.divsearch').click(function(){
		var search = $('.search');
		var searchStatus = search.css('display');
		if (searchStatus == 'none') {
		search.animate({
			opacity:1,
			marginLeft: 0
		}, 400);
		setTimeout(function() {
			search.css( 'display','block');
		}, 100);
	} else if (searchStatus == 'block'){
		search.animate({
			opacity:0,
			marginLeft: -600
		}, 400);
		setTimeout(function() {
			search.css( 'display','none');
    	}, 401);
	};
        
    });



    
$('.dropmenu').click(function(){
		var menuUp = $('.menu');
        var btn = $('.btn-group.zindex.dropmenu button');
        
		if ($('body').css('margin-left') == '0px') {
            btn.animate({
                left: 198
			}, 400);
            
			menuUp.animate({
				left: 0
			}, 400);
			$('body').animate({
				marginLeft: 198
			}, 400);    
            $('.menu').addClass('aa');
            
		} else if($('body').css('margin-left') == '198px'){
             btn.animate({
                left: 0
			}, 400);
            
			menuUp.animate({
				left: -198
			}, 400);
			$('body').animate({
				marginLeft: 0
			}, 400);
            $('.menu').removeClass('aa');
		};

    
    $('.btnFocus').click(function(){
		var menu = $(this).next();
		//var
		if (menu.css('height') == '0px') {
			menu.css('height','120px');
        } else if(menu.css('height') == '120px'){
            menu.css('height','0px');          
        };
		//	menu.animate({
		//		left: -198
		//	}, 400);
		//	$('body').animate({
		//		marginLeft: 0
		//	}, 400);
	//	};

	});
   
});
    

    var cc = function closea () {
        var selector = $('.aa').css('class');
        console.log(selector)
        alert('s')
        if(selector == ".aa"){
          alert(this);
		}
    };
    
    //$('body').click(cc());

   // $('.carousel').carousel({interval: 4000});

 $(".scrollable").scrollable();
    
 $("#scroller").scrollable({circular: true}).autoscroll({ autoplay: false });
    
});
