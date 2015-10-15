(function() {
	var snake = {
		slength: 1
	};
	var board = $('<div>');
	var grid = {
		x: 1,
		y: 40
	};
	$('.container').width(10 * grid.y);

		for (var i = 0; i < grid.x; i++) {
			
			for (var j = 0; j < grid.y; j++) {
				
				$('<div class="square r-'+i+' c-'+j+'">').appendTo(board);

			}

		}

	$('.container').append(board.html());
	$('.container div').eq(grid.x * grid.y * .5).css('background-color', 'steelblue');

})();