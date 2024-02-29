function drawCollectable(t_collectable){
    //Drawing the collectable when the character isn't in the collecting range of the collectable
    if(t_collectable.isFound == false){
            fill(236, 104, 22);
            ellipse(t_collectable.x_pos, t_collectable.y_pos, 60, 60);
            fill(250, 169, 67);
            ellipse(t_collectable.x_pos, t_collectable.y_pos, 50, 50);
            fill(236, 104, 22);
            textSize(30);
            textStyle(BOLD);
            text("$", t_collectable.x_pos - 8, t_collectable.y_pos + 10);
        };
}

//Checking whether is the character is within the collectable range
function checkCollectable(t_collectable){
    var d = dist(gameChar_scroll_x, gameChar_y - 25, t_collectable.x_pos, t_collectable.y_pos) 
	if(d < 50)
	{
        //Adding to the score and playing a sfx when the character collected a coin
		t_collectable.isFound = true;
        game_score += 1;
        collectSound.play();
	};
}