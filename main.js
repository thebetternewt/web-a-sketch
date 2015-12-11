$(document).ready(function() {
	
	//set default length of grid side(s)
	numSides = 16;

	drawGrid();
});

function drawGrid() {

	//create grid rows
	for (i=0;i<numSides;i++){
		$(".wrapper").append($("<ul class='row'></ul>"));
	}

	//create grid tiles
	for (i=0;i<numSides;i++){
		$(".wrapper").find(".row").append($("<div class='block'/>"));
		// $(".block").css("display", "inline-block");
	}

	//highlight
	$(".block").mouseenter(function(){
		$(this).addClass('highlighted');

		var value = parseFloat($(this).css("opacity"));
		if (value<1){
			value += 0.1;
		}
		$(this).css("opacity",value);
	});

	blockWidth = (+$(".wrapper").width()) / numSides;
	console.log(blockWidth);
	$('.block').css({
		height:blockWidth,
		width:blockWidth
	});
	$('.wrapper > .row').css({
		height:blockWidth
	});
}

function newCanvas() {
	numSides = +prompt("How many squares per side should I make your new grid?");

	$('.wrapper > .row').remove();

	drawGrid();
}