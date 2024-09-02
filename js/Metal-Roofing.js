/* Color Swatch Code */
$(function() {
	//color selector
  $(".colors").click(function(){
		var color = $(this).attr("data-value");
    $(".clicked").css("background-color", color);
	});

});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
$('.dropdown-toggle').dropdown()