$(function(){
  $('#all').click(function () {
    $('.s6_wrap div').show();//서서히 나타나게 만들고 싶다면 .fadeIn()을 사용한다.
  });
  $('#filter1').click(function () {
    $('.filter1').show();
    $('.filter2').hide();//서서히 사라지게 만들고 싶다면 .fadeOut()을 사용한다.
  });
  $('#filter2').click(function () {
    $('.filter2').show();
    $('.filter1').hide();
  });
  $('.filter li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
});