$(document).ready(function() {
	$(".ico_toggle").click(function(){
		$(this).addClass("on");
		$(".btn_indelete").removeClass("opacity");
	});
	$(".btn_indelete").click(function(){
		fa = $(this).parents('.passenger_item');
		fa.css('display','none');
	});
	$('#J_SelectSeat').click(function(){
		sld = $('.select_ticket');
		sld.addClass('slideInUp');
		$('.payfoot').addClass('opacity');
	});
	$('.select_ticket').click(function(){
		$(this).removeClass('slideInUp').addClass('slideOutDown');
		$('.payfoot').removeClass('opacity');
	});

	$('#hotel_slidebar').click(function(){
		$(this).removeClass("up").addClass('down');
		$('#hotel_book_pop').css('-webkit-transform','translate3d(0,-140px,0)');
	});
});

// page iscroll        
var myScroll;
var myScroll02;
function loaded() {
  myScroll = new iScroll('wrapper');
  myScroll02 = new iScroll('wrapperSlide');

}
document.addEventListener('DOMContentLoaded', loaded, false);