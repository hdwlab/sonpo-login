// ローディングアニメーション
(function($){
	$(window).on('load',function(){
		$('body').removeClass('loading');
		setTimeout(function(){
			$('body').addClass('loaded');
		},0);
	});
})(jQuery);