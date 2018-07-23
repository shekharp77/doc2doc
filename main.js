$( document ).ready(function() {
    $("#maindiv").hide();


    $("#mmu").animate({
    	Top: "20%",
    }, {
      queue: false,
      duration: 15000
    })
    .animate({ borderRightWidth: "0px" }, 10500 ,
    		function () {
    			$("#mmu").fadeOut(500,function(){
            $("#particles-js").fadeOut(function(){
              $('#maindiv').removeAttr( "hidden" );
              $('#maindiv').fadeIn();
            });
    			
    			});
    		});

    	$("#onebtn").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#poster").offset().top
		    }, 2000);
		});

		$("#twobtn").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#whyus").offset().top
		    }, 2000);
		});

		$("#threebtn").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#hoitwo").offset().top
		    }, 2000);
		});

		$("#fourbtn").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#Reviews").offset().top
		    }, 2000);
		});

		$("#fivebtn").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#partners").offset().top
		    }, 2000);
		});

		$("#sixbtn").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#team").offset().top
		    }, 2000);
		});

		$("#sevenbtn").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#more").offset().top
		    }, 2000);
		});

});