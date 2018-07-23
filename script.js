$( document ).ready(function() {
    $("#div2").hide();
	$("#4pic").hide();
	$("#5pic").hide();
	$("#6pic").hide();
    $("#Reviews").hide();
    $("#partners").hide();
    $("#team").hide();
    $("#foo").hide();
// main animation	

  $("#mmu").animate({
    	marginTop: "20%",
      width: "100%"
    }, {
      queue: false,
      duration: 4000
    })
    .animate({ borderRightWidth: "0px" }, 1500 ,
    		function () {
    		$("#mmu").fadeOut(500,function(){
    			$("body").css({"background":"white"});
    			$('#maindiv').removeAttr( "hidden" );
                $('html, body').animate({
                                scrollTop: $("#whyus").offset().top
                        }, 2000, function(){
    			$("#1pic").animate({
    				marginTop: "7%"
    			}, 500, function(){
    				$("#2pic").animate({
        				marginTop: "7%"
        			}, 500, function(){
        				$("#3pic").animate({
            				marginTop: "7%"
            			}, 500, function(){
            				$("#4pic").fadeIn(500, function(){
            					$("#5pic").fadeIn(500, function(){
            						$("#6pic").fadeIn(500, function(){
            							$('#details').removeAttr( "hidden" );
                                        $("#div2").fadeIn(1000, function(){
            							 $('html, body').animate({
            							        scrollTop: $("#div2").offset().top
            							    }, 2000, function(){
                                                $('#p1').css({
                                                    "color":"#ffffff"
                                                }, 2000, function(){
                                                    $("#partners").fadeIn(1000)
                                                });
            							    });
                                        });
                    				});
                				});
            				});
            			});
        			});
    			});
    		});
            });
    	});
});
 
