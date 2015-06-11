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

    function portfolioRight () {
    		var portflio = $('.partSlider');
            var procents = 20;
            var margin = $('.partSlider').css('margin-left')
            var result = parseInt(margin);
            var width = $('.partSlider').css('width');
            var resultWidth = parseInt(width);
            var procent = (result/resultWidth)*100;



            console.log(procent);

    		if (procent >= 0 && procent < 15) {
    			portflio.css('margin-left', "-100%");

           } else if(procent > -35 && procent < 0){
                portflio.css('margin-left', '-200%');
           } else if(procent > -35 && procent < 15){
                portflio.css('margin-left', '-300%');
           } else if(procent > -70 && procent < 40){
                portflio.css('margin-left', '-300%');
            } else if(procent > -70 && procent < 40){
                portflio.css('margin-left', '-300%');
            } ;
     };
    
    function portfolioLeft () {
    			var portflio = $('.partSlider');
            var procents = 20;
            var margin = $('.partSlider').css('margin-left')
            var result = parseInt(margin);
            var width = $('.partSlider').css('width');
            var resultWidth = parseInt(width);
            var procent = (result/resultWidth)*100;



            console.log(procent);

    		if(procent < -60){
                portflio.css('margin-left', '-200%');
           } else if(procent >-61 && procent < -35){
                portflio.css('margin-left', '-100%');
           } else if(procent >-34 && procent < -1){
                portflio.css('margin-left', '0px');
           }
    };

    $(function(){
        var portflio = $('.partSlider');
            var procents = 20;
            var margin = $('.partSlider').css('margin-left')
            var result = parseInt(margin);
            var width = $('.partSlider').css('width');
            var resultWidth = parseInt(width);
            var procent = (result/resultWidth)*100;
        var sliderTime = setInterval(function(){if(procent >= -80 && procent < -70){
            portfolioLeft();    console.log('пора влево');
        } else if(procent >= 0 && procent < 15){
            portfolioRight();
        }},3000);

        $(function(){$('.partSlider').hover(function(){
            sliderTime = setInterval(portfolioRight,4000);
        clearInterval(sliderTime);
    },function(){
        sliderTime = setInterval(portfolioRight,4000);
    });



    $('.portfolioRight').click(function(){
    		var portflio = $('.partSlider');
            var procents = 20;
            var margin = $('.partSlider').css('margin-left')
            var result = parseInt(margin);
            var width = $('.partSlider').css('width');
            var resultWidth = parseInt(width);
            var procent = (result/resultWidth)*100;



            console.log(procent);

    		if (procent >= 0 && procent < 15) {
    			portflio.css('margin-left', "-100%");

           } else if(procent > -35 && procent < 0){
                portflio.css('margin-left', '-200%');
           } else if(procent > -35 && procent < 15){
                portflio.css('margin-left', '-300%');
           } else if(procent > -70 && procent < 40){
                portflio.css('margin-left', '-300%');
            };

     });

       $('.portfolioLeft').click(function(){
    		var portflio = $('.partSlider');
            var procents = 20;
            var margin = $('.partSlider').css('margin-left')
            var result = parseInt(margin);
            var width = $('.partSlider').css('width');
            var resultWidth = parseInt(width);
            var procent = (result/resultWidth)*100;



            console.log(procent);

    		if(procent < -60){
                portflio.css('margin-left', '-200%');
           } else if(procent >-61 && procent < -35){
                portflio.css('margin-left', '-100%');
           } else if(procent >-34 && procent < -1){
                portflio.css('margin-left', '0px');
           }
     });


 $('#myCarousel').carousel({interval:10000})(jQuery);

    
    });
    
});


});
