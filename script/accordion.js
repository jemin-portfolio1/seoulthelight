$(function(){
	$(".m_nav_ul li").click(function(){
		$(this).children(".m_sub").slideToggle()
		$(this).siblings().children(".m_sub").slideUp();
		$(this).toggleClass("on").siblings().removeClass("on")
	});
});