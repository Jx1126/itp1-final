function drawTrees(){

	//Using a loop to draw multiple trees
    for(var i = 0; i < trees_x.length; i++){
		fill(111,87,45);
		noStroke();
		rect(trees_x[i], height/2, 15, 150);
		fill(236,104,22);
		triangle(trees_x[i] - 45, height/2 + 105,
				 trees_x[i] + 5, 230, trees_x[i] + 55,
				 height/2 + 105);
		fill(240,131,21);
		triangle(trees_x[i] - 38, height/2 + 60,
				 trees_x[i] + 5, 230, trees_x[i] + 48,
				 height/2 + 60);
		fill(250,169,67);
		triangle(trees_x[i] - 28, height/2 + 13,
				 trees_x[i] + 5, 230, trees_x[i] + 38,
				 height/2 + 13);
		};
}