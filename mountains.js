function drawMountains(){
    
	//Using a loop to draw multiple mountains
    for(var i = 0; i < mountains_x.length; i++){
		fill(246, 154, 82);
		triangle(mountains_x[i] - 220, 175 + 258,
				 mountains_x[i] + 280, 175 + 258,
				 mountains_x[i], 175 - 25);
		fill(250, 191, 81);
		triangle(mountains_x[i] - 20, 175 + 258,
				 mountains_x[i] + 380, 175 + 258,
				 mountains_x[i] + 180, 175 + 25);
		fill(255, 199, 97);
		triangle(mountains_x[i] - 320, 175 + 258,
				 mountains_x[i] + 80, 175 + 258,
				 mountains_x[i] - 170, 175 + 75);
		};
}