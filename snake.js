(function() {
	var snake = {
		segments: 1,
		x: 20,
		y: 20
	};

	var board = $('<div>');
	var grid = {
		x: 40,
		y: 40
	};

	$('.container').width(10 * grid.y);

		for (var i = 0; i < grid.x; i++) {
			
			for (var j = 0; j < grid.y; j++) {
				
				$('<div class="square r-'+i+' c-'+j+' ">').appendTo(board);

			}

		}

	$('.container').append(board.html());
	//$('.container div').eq(snake.x).css('background-color', 'red');

	
		$(document).keydown(function(e) {

   			 switch(e.which) {
		        case 37: // left
		        $('.container div').eq(snake.x).css('background-color', 'steelblue'); 
		        break;

		        case 38: // up
		        break;

		        case 39: // right
		        break;

		        case 40: // down
		        break;

		        default: return; // exit this handler for other keys
   			 }
    e.preventDefault(); // prevent the default action (scroll)
		});
	

	//$('.container div').eq(grid.x * grid.y * .5).css('background-color', 'steelblue');

})();