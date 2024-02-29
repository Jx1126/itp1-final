//Game character jumping to the left
function drawCharJumpLeft(){
        //head
			fill(241, 194, 125);
			rect(gameChar_x - 9, gameChar_y - 68, 18, 18);
			fill(100);
			rect(gameChar_x - 9, gameChar_y - 68, 18, 5);
			rect(gameChar_x - 5, gameChar_y - 68, 13, 10);
			rect(gameChar_x, gameChar_y - 68, 9, 18);
		//back arm
			fill(241, 194, 125);
			rect(gameChar_x + 14, gameChar_y - 49, 6, 18);
		//back sleeve
			fill(20, 130, 200);
			rect(gameChar_x + 7, gameChar_y - 49, 7, 7);
		//body
			fill(40, 150, 220);
			rect(gameChar_x - 7, gameChar_y - 50, 14, 27);
		//front sleeve
			fill(20, 130, 200);
			rect(gameChar_x - 17, gameChar_y - 49, 15, 7);
		//front arm
			fill(241, 194, 125)
			rect(gameChar_x - 18, gameChar_y - 60, 6, 18);
		//mid pant
			fill(60, 80, 180);
			rect(gameChar_x - 7, gameChar_y - 26, 10, 7);
		//front pant
			rect(gameChar_x - 13, gameChar_y - 26, 6, 18);
		//back pant
			rect(gameChar_x + 1, gameChar_y - 26, 6, 15);
			rect(gameChar_x + 7, gameChar_y - 17, 10, 6);
		//shoe
			fill(50);
			rect(gameChar_x - 13, gameChar_y - 8, 6, 6);
			rect(gameChar_x + 15, gameChar_y - 17, 6, 6);
};

//Game character jumping to the right
function drawCharJumpRight(){
        //head
			fill(241, 194, 125);
			rect(gameChar_x - 9, gameChar_y - 68, 18, 18);
			fill(100);
			rect(gameChar_x - 9, gameChar_y - 68, 18, 5);
			rect(gameChar_x - 9, gameChar_y - 68, 13, 10);
			rect(gameChar_x - 9, gameChar_y - 68, 9, 18);
		//back sleeve
			fill(20, 130, 200);
			rect(gameChar_x + 4, gameChar_y - 49, 10, 7);
		//back arm
			fill(241, 194, 125);
			rect(gameChar_x + 14, gameChar_y - 60, 6, 18);
		//body
			fill(40, 150, 220);
			rect(gameChar_x - 7, gameChar_y - 50, 14, 27);
		//front sleeve
			fill(20, 130, 200);
			rect(gameChar_x - 17, gameChar_y - 49, 15, 7);
		//front arm
			fill(241, 194, 125)
			rect(gameChar_x - 19, gameChar_y - 49, 6, 18);
		//mid pant
			fill(60, 80, 180);
			rect(gameChar_x - 7, gameChar_y - 26, 19, 7);
		//front pant
			rect(gameChar_x + 7, gameChar_y - 26, 6, 18);
		//back pant
			rect(gameChar_x - 7, gameChar_y - 26, 6, 15);
			rect(gameChar_x - 15, gameChar_y - 17, 10, 6);
		//shoe
			fill(50);
			rect(gameChar_x + 7, gameChar_y - 8, 6, 6);
			rect(gameChar_x - 20, gameChar_y - 17, 6, 6);
};

//Game character walking to the left
function drawCharWalkLeft(){
    //head
			fill(241, 194, 125);
			rect(gameChar_x - 9, gameChar_y - 68, 18, 18);
			fill(100);
			rect(gameChar_x - 9, gameChar_y - 68, 18, 5);
			rect(gameChar_x - 5, gameChar_y - 68, 13, 10);
			rect(gameChar_x, gameChar_y - 68, 9, 18);
		//body
			fill(40, 150, 220);
			rect(gameChar_x - 7, gameChar_y - 50, 14, 27);
		//left sleeve
			fill(20, 130, 200);
			rect(gameChar_x - 4, gameChar_y - 49, 7, 15);
		//right arm
			fill(241, 194, 125)
			rect(gameChar_x - 4, gameChar_y - 34, 7, 15);
		//mid pant
			fill(60, 80, 180);
			rect(gameChar_x - 7, gameChar_y - 26, 13, 7);
		//front pant
			rect(gameChar_x - 7, gameChar_y - 26, 6, 23);
		//back pant
			rect(gameChar_x + 1, gameChar_y - 26, 6, 15);
			rect(gameChar_x + 7, gameChar_y - 17, 7, 6);
		//shoe
    		fill(50);
			rect(gameChar_x - 7, gameChar_y - 3, 6, 6);
			rect(gameChar_x + 14, gameChar_y - 17, 6, 6);
};

//Game character walking to the right
function drawCharWalkRight(){
    //head
			fill(241, 194, 125);
			rect(gameChar_x - 9, gameChar_y - 68, 18, 18);
			fill(100);
			rect(gameChar_x - 9, gameChar_y - 68, 18, 5);
			rect(gameChar_x - 9, gameChar_y - 68, 13, 10);
			rect(gameChar_x - 9, gameChar_y - 68, 9, 18);
		//body
			fill(40, 150, 220);
			rect(gameChar_x - 7, gameChar_y - 50, 14, 27);
		//left sleeve
			fill(20, 130, 200);
			rect(gameChar_x - 4, gameChar_y - 49, 7, 15);
		//right arm
			fill(241, 194, 125)
			rect(gameChar_x - 4, gameChar_y - 34, 7, 15);
		//mid pant
			fill(60, 80, 180);
			rect(gameChar_x - 7, gameChar_y - 26, 13, 7);
		//front pant
			rect(gameChar_x + 1, gameChar_y - 26, 6, 23);
		//back pant
			rect(gameChar_x - 7, gameChar_y - 26, 6, 15);
			rect(gameChar_x - 15, gameChar_y - 17, 10, 6);
		//shoe
			fill(50);
			rect(gameChar_x + 1, gameChar_y - 3, 6, 6);
			rect(gameChar_x - 20, gameChar_y - 17, 6, 6);
};

//Game character jumping facing the screen/ forward/ us
function drawCharJumpForward(){
    fill(241, 194, 125);
			rect(gameChar_x - 9, gameChar_y - 68, 18, 18);
			fill(100);
			rect(gameChar_x - 9, gameChar_y - 68, 18, 5);
		//body
			fill(40, 150, 220);
			rect(gameChar_x - 9, gameChar_y - 50, 18, 27);
		//left sleeve
			fill(20, 130, 200);
			rect(gameChar_x - 16, gameChar_y - 50, 7, 15);
		//right sleeve
			rect(gameChar_x + 9, gameChar_y - 58, 7, 15);
		//left arm
			fill(241, 194, 125);
			rect(gameChar_x - 16, gameChar_y - 35, 7, 8);
		//right arm
			rect(gameChar_x + 9, gameChar_y - 73, 7, 15);
		//left pant
			fill(60, 80, 180);
			rect(gameChar_x  - 9, gameChar_y - 35, 7, 20);
		//right pant
			rect(gameChar_x + 2, gameChar_y - 23, 7, 20);
		//mid pant
			rect(gameChar_x -9, gameChar_y - 26, 18, 7);
		//shoe
			fill(50);
			rect(gameChar_x - 9, gameChar_y - 15, 7, 6);
			rect(gameChar_x + 2, gameChar_y - 3, 7, 6);
};


//The game character facing us/ screen/ forward while it's not moving
function drawCharFaceForward(){
    //head
			fill(241, 194, 125);
			rect(gameChar_x - 9, gameChar_y - 68, 18, 18);
			fill(100);
			rect(gameChar_x - 9, gameChar_y - 68, 18, 5);
		//body
			fill(40, 150, 220);
			rect(gameChar_x - 9, gameChar_y - 50, 18, 27);
		//left sleeve
			fill(20, 130, 200);
			rect(gameChar_x - 16, gameChar_y - 50, 7, 15);
		//right sleeve
			rect(gameChar_x + 9, gameChar_y - 50, 7, 15);
		//left arm
			fill(241, 194, 125);
			rect(gameChar_x - 16, gameChar_y - 35, 7, 15);
		//right arm
			rect(gameChar_x + 9, gameChar_y - 35, 7, 15);
		//left pant
			fill(60, 80, 180);
			rect(gameChar_x  - 9, gameChar_y - 23, 7, 20);
		//right pant
			rect(gameChar_x + 2, gameChar_y - 23, 7, 20);
		//mid pant
			rect(gameChar_x -9, gameChar_y - 26, 18, 7);
		//shoe
			fill(50);
			rect(gameChar_x - 9, gameChar_y - 3, 7, 6);
			rect(gameChar_x + 2, gameChar_y - 3, 7, 6);
};