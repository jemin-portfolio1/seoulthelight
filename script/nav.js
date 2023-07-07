$(function(){
    const menu = document.querySelector('.header_inner');
const menuHeight = menu.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > menuHeight) {
    menu.classList.add('active');
  } else {
    menu.classList.remove('active');
  }
});
$('.nav > li').mouseenter(function () {
  $(this).addClass('active');
  $(this).siblings().removeClass('active')
});
$('.nav > li').mouseleave(function () {
  $(this).removeClass('active');
});
$(".header_inner").mouseover(function() {
  $(".sub").stop().slideDown(300);
});
$(".header_inner").mouseout(function() {
  $(".sub").stop().slideUp(300);
});
})