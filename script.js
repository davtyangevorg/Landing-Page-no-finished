$(document).ready(function(){
	$('.manu-bar').hide()
	$('.barli').mouseenter(function(){
		$(this).find('.manu-bar').show('turtle')
		
	})
	$('.barli').mouseleave(function(){
		$(this).find('.manu-bar').hide('turtle')
	})
})