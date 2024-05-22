 $(document).ready(function(){
    $('.js--scroll-to-product1').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-product1').offset().top},1000)
    })

 })
 $(document).ready(function(){
  $('.js--scroll-to-product1').click(function(){
      $('html,body').animate({scrollTop:$('.js--section-product1').offset().top},1000)
  })

})

 .not('[href="#"]')
 .not('[href="#0"]')
 .click(function(event) {
   if (
     location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
     && 
     location.hostname == this.hostname
   ) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
     if (target.length) {
       event.preventDefault();
       $('html, body').animate({
         scrollTop: target.offset().top
       }, 1000, function() {
         var $target = $(target);
         $target.focus();
         if ($target.is(":focus")) { 
           return false;
         } else {
           $target.attr('tabindex','-1'); 
           $target.focus(); 
         };
       });
     }
   }
 });
 $('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated animate__bounceIn')
 },{
    offset:'50%'
 
 })

 $('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated animate__fadeInDown')
    
 },{
    offset:'50%'
 
 })

