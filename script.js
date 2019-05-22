$(function(){
  $('.header-right-one a,.recruit-center a').click(function(){
    var position = $('#ask').offset().top;
    $('html,body').animate({
      'scroll-top': position-40
    },500)
  });
  $('.header-right-two a').click(function(){
    var position = $('#ask').offset().top;
    $('html,body').animate({
      'scroll-top': position-40
    },500)
  });
  $('.click').click(function(){
    if($(this).find('.quest-answer').hasClass('active')){
      $(this).find('.quest-answer').removeClass('active');
      $(this).find('.quest-answer').slideUp();
      $(this).find('span').text('+');

    }else{
      $(this).find('.quest-answer').addClass('active');
      $(this).find('.quest-answer').slideDown();
      $(this).find('span').text('-');
    }
  });
});
