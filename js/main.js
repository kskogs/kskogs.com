$(document).ready(function() {
	
	$(".social-btn").fitText(0.25);

	var middlefy = function() {
		$(".social-button-wrap i").each(function() {
			var iconHeight = $(this).height();
			var buttonHeight = $(this).parents(".social-btn").height();
			var math = (buttonHeight - iconHeight) / 2;
			$(this).css("top", math);
		});
	};
	middlefy();

	$(window).resize(function() {
		middlefy();
	});
});
