 $(document).ready(function() {
      $('.input').on("focus", function() {
       $(this).css('outline-color','navy');      
      });
        $('.toggleNav').click(function() {
        $('#flex-nav ul').toggleClass('open');
      });
     $('.call').click(function() {
     $('.phone').slideToggle('slow');
     });
   $('.button').click(function(){
    $(this).removeCLass('shadow');
   });
     $('.button').mouseleave(function(){
     $(this).addClass('shadow');
    });
 });
