
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 10) {
	    $("#nav").css("background" , "#FFF");
      $("#nav").css("filter" , "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))");
	  }else{
		 $("#nav").css("background" , "rgba(219, 227, 205, 0.58)");
      $("#nav").css("filter" , "none");
	  }
    //if(scroll >50){
      //show(introduction);
    //}

    //if(scroll >600){
    //  show(overview);
    //}

  })
})
