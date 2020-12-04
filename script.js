$(".tale").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
    $(this).removeClass("animated")  
  })
  
  $(".tale").hover(function(){
    $(this).addClass("animated");        
  })