$(document).ready(function(){
    let slider=1;
    let id=1;
    let checkId=1;
    let spawnTime = 200;
    let animationTime = Math.floor((Math.random() * 6000) + 2000);
    const interval = setInterval(function() {
        let size=Math.floor((Math.random() * 100) + 40);
        let x=Math.floor((Math.random() * $(window).width()) - 100); 
        let y= $(window).height();
        animationTime = Math.floor((Math.random() * 6000) + 2000);
        id+=1;
        if(id>100){id=1}
        $('.slider').prepend('<img id="' + id + '" class="bubbleImg" style="width:' + size + 'px; left:' + x +'px";  src="img/bubble.png" />')

        $('#'+id).animate({
            "bottom": y+100+"px"
        
        },animationTime);
    }, spawnTime);
    
    const interval2 = setInterval(function() {
    setTimeout(function(){
        checkId+=1;
        if(checkId>100){checkId=1}
        $('#'+checkId).remove();
      }, 6000);
    }, spawnTime);




    $('.bubbleMenuImg').css('opacity','0')
    $('.bubbleMenuImg'+slider).css('opacity','1')

    $('.leftBtn').click(function(){
      $('.bubbleMenuImg').css('opacity','0')
      slider=slider-1;
      if(slider<1){slider=3;}
      $('.bubbleMenuImg'+slider).css('opacity','1')
    });
    $('.rightBtn').click(function(){
      $('.bubbleMenuImg').css('opacity','0')
      slider=slider+1;
      if(slider>3){slider=1;}
      $('.bubbleMenuImg'+slider).css('opacity','1')
    });
  
  });
