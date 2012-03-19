$().ready(function() {  
        $('.kwicks').kwicks({  
            min: 40,  
            duration: 500,  
            sticky: false  
        });  
    });
    
$(document).ready(function(){
	$(".toggle_container").hide();
	$("li.trigger").click(function(){
		$(this).toggleClass("active").next().slideToggle("slow");
	});
	
});

$(document).ready(function(){  
    $("#featured").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 0, true);  
    $("#featured").hover(  
        function() {  
           $("#featured").tabs("rotate",0,true);  
        },  
        function() {  
            $("#featured").tabs("rotate",0,true);  
        }  
    );  
});
