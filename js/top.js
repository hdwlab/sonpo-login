(function($){
	$(window).on('DOMContentLoaded',function(){
	});
	$(window).on('load',function(){
				$('#passwordCheck').on('click', function(){
					const t_ = $('#PassWord').attr('type');
					if( t_ == 'password' ){
						$('#PassWord').attr('type', 'text');
						$('#passwordCheck').removeClass('eye-close');
					} else {
						$('#PassWord').attr('type', 'password');
						$('#passwordCheck').addClass('eye-close');
					}
				});
				
				$('#Email').focus(function() {
					$(this).css('border-color', '#3088a6');
					$('.form-label-mail').css('color', '#3088a6');
				});
				$('#Email').blur(function() {
					$(this).css('border-color', '#DAD7D6');
					$('.form-label-mail').css('color', '#7f8281');
				});
				
				$('#PassWord').focus(function() {
					$(this).css('border-color', '#3088a6');
					$('.form-label-pw').css('color', '#3088a6');
				});
				$('#PassWord').blur(function() {
					$(this).css('border-color', '#DAD7D6');
					$('.form-label-pw').css('color', '#7f8281');
				});
	});
})(jQuery);