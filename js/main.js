$(document).ready(function() {

	$(".social-btn").fitText(0.25);

	var middlefy = function() {
		// make social button circular:
		var bioWidth = $(".bio-pic").width();
		var btnWidth = $(".social-btn").width();
		$(".bio-pic").css("height", bioWidth);
		$(".social-btn").css("height", btnWidth);
		// center icon:
		var target = $(".social-btn i");
		var iconHeight = target.height();
		var buttonHeight = target.parents(".social-btn").height();
		var math = (buttonHeight - iconHeight) / 2;
		target.css("top", math);
	};
	middlefy();

	$(window).resize(function() {
		middlefy();
	});
});
