/*

Game Project Part 8b - Adding Enemies

*/

var gameChar_x;
var gameChar_y;
var gameChar_width;
var floorPos_y;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var cameraPosX;
var gameChar_scroll_x

var collectable;
var clouds;
var trees_x;
var mountains_x;
var canyon;

var game_score;
var flagpole;
var lives;

var jumpSound;
var collectSound;
var winSound;
var loseSound;
var soundReady;
var soundLoadCounter;

var platforms;
var enemies;    

//Preloading all the sound before allowing the game to start
function preload() {
	//Preloading the sound effects
	soundReady = false;
	soundLoadCounter = 0;

	//Adding variables to let the code looks shorter and tidier later on
	soundFormats("MP3");
	jumpSound = loadSound("assets/jump.mp3", soundLoaded);
	collectSound = loadSound("assets/collect.mp3", soundLoaded);
	winSound = loadSound("assets/win.mp3", soundLoaded);
	loseSound = loadSound("assets/lose.mp3", soundLoaded);
}


//Checking whether the sounds are loaded
function soundLoaded() {
	//Set soundReady = true if all 4 sound effects are completely loaded
	soundLoadCounter++;
	if(soundLoadCounter == 4){
		soundReady = true;	
	}
}

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
    
    //Character has 3 life, written 4 here since startGame() has a -1 lives function
	lives = 4;
	startGame();
	
	//Setting up the game score
	game_score = 0;

	//Setting up and positioning the game score
	collectable = [
		{x_pos: -300, y_pos: 390, isFound: false},
        {x_pos: -540, y_pos: floorPos_y - 310, isFound: false},
		{x_pos: 200, y_pos: 390, isFound: false},
		{x_pos: 800, y_pos: 370, isFound: false},
		{x_pos: 1300, y_pos: 390, isFound: false},
        {x_pos: 1700, y_pos: 390, isFound: false},
	];

}

//Checking if the game character reached the flagpole or not
function checkFlagpole(){
	var c = dist(gameChar_scroll_x, gameChar_y, flagpole.x_pos, floorPos_y);
	if(c < 26){
		flagpole.isReached = true;
		winSound.play();
	}
}


//Check if player dies by falling below a certain y-coordinates
function checkPlayerDie() {
	if(gameChar_y > height + 100){
    loseSound.play();
		if(lives > 0){
			startGame();
		}
	}
}

function startGame() {
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	//Set game character as just standing without moving
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	gameChar_scroll_x = gameChar_x;

	//Positioning the clouds
	clouds = [
		{x_pos: 100, y_pos: 80},
		{x_pos: 400, y_pos: 200},
		{x_pos: 800, y_pos: 150},
		{x_pos: 1400, y_pos: 150},
		{x_pos: -300, y_pos: 200},
		{x_pos: -600, y_pos: 80},
		{x_pos: -900, y_pos: 200},
	];

	//Positioning the trees
	trees_x = [-1150, -900, -300, width/2, width/7, width + width/1.5, 0 - width/2, width, 1600];


	//Positioning the mountains
	mountains_x = [-1500, -600, 195, 1095, 1595, 2340];

	//Positioning canyons
	canyon = [
        {x_pos: -1700, y_pos: 432},
        {x_pos: -1600, y_pos: 432},
        {x_pos: -1500, y_pos: 432},
        {x_pos: -1400, y_pos: 432},
        {x_pos: -850, y_pos: 432},
        {x_pos: -600, y_pos: 432},
		{x_pos: -100, y_pos: 432},
		{x_pos: 650, y_pos: 432},
		{x_pos: 1300, y_pos: 432},
        {x_pos: 1500, y_pos: 432},
        {x_pos: 1700, y_pos: 432},
        {x_pos: 1800, y_pos: 432}
	];

	//Positioning flagpole
	flagpole = {x_pos: 2300, isReached: false};
    
	//Empty array to add enemies once pushed
    platforms = [];
    
	//Pushing enemies to the empty array
    platforms.push(createPlatforms(300, floorPos_y - 100, 50));
    platforms.push(createPlatforms(-260, floorPos_y - 100, 30));
    platforms.push(createPlatforms(-450, floorPos_y - 91, 25));
    platforms.push(createPlatforms(-490, floorPos_y - 190, 17));
    platforms.push(createPlatforms(850, floorPos_y - 80, 40));
    platforms.push(createPlatforms(1820, floorPos_y - 80, 30));
    platforms.push(createPlatforms(1950, floorPos_y - 80, 30));
    
	//Empty array to add enemies once pushed
    enemies = [];
    
    //Pushing enemies into the empty array
    enemies.push(new Enemy(-400, floorPos_y - 30, 400));
    enemies.push(new Enemy(100, floorPos_y - 30, 500));
    enemies.push(new Enemy(850, floorPos_y - 30, 550));
    enemies.push(new Enemy(1400, floorPos_y - 30, 600));
    enemies.push(new Enemy(1400, floorPos_y - 30, 700));
    
    //Reducing a life everytime the game character died
    lives -= 1;


	//Only reseting the game score and collectables when all the lifes are used up
	if(lives < 1){
		collectable = [
			{x_pos: -300, y_pos: 390, isFound: false},
			{x_pos: -540, y_pos: floorPos_y - 310, isFound: false},
			{x_pos: 200, y_pos: 390, isFound: false},
			{x_pos: 800, y_pos: 370, isFound: false},
			{x_pos: 1300, y_pos: 390, isFound: false},
			{x_pos: 1700, y_pos: 390, isFound: false},
		];

		game_score = 0;
	}
};

function draw()
{
	//Only starts loading/drawing the game when all the sounds are loaded
	if(soundReady == false) {
		return;
	}

	///////////DRAWING CODE//////////
	cameraPosX = gameChar_scroll_x - width/2;

	//Sky
	noStroke();
    background(268, 249, 198);
    fill(263, 244, 193);
    rect(0, 80, width, 500);
    fill(258, 239, 187);
    rect(0, 160, width, 500);
    fill(253, 234, 182);
    rect(0, 240, width, 500);
    fill(248, 229, 177);
    rect(0, 320, width, 500);
    fill(243, 224, 172);
    rect(0, 400, width, 500);

	//Ground
	noStroke();
	fill(245, 194, 123);
	rect(0, floorPos_y, width , height - floorPos_y);

	//Enabling Scrolling
	push();
	translate(-cameraPosX, 0);

	//Mountains
	drawMountains()

	//Trees
	drawTrees()

	//Clouds
	drawClouds()
    
    //Platforms
    for(var i = 0; i < platforms.length; i++){
        platforms[i].draw();
    }

	//Canyon
	for(var i = 0; i < canyon.length; i++){
	drawCanyon(canyon[i])
	checkCanyon(canyon[i])
	};

	//Collectable
	for(var i = 0; i < collectable.length; i++){
		if(collectable[i].isFound == false){
			drawCollectable(collectable[i]);
			checkCollectable(collectable[i]);
		}
	}
	
	//Flagpole
	renderFlagpole()
    
    //Adding the enemies into the game
    for(var i = 0; i < enemies.length; i++)
        {
            enemies[i].draw();
                
             var isContact = enemies[i].checkContact(gameChar_scroll_x, gameChar_y);
                
            if(isContact == true)
                {
                    if(lives > 0)
                    {
                         startGame();
                          break;
                    }
                }
        }

    
    //Extra shapes to cover up merged canyons
    fill(121, 77, 65);
    rect(1800, floorPos_y, 200, 150);
    rect(-1800, floorPos_y, 500, 150);

	//Ending the scroll
	pop();

	//Game Character
	if(isLeft && isFalling)
	{
		//Jumping Left
		drawCharJumpLeft()
	}
	else if(isRight && isFalling)
	{
		//Jumping Right
		drawCharJumpRight()
	}
	else if(isLeft)
	{
		//Walking Left
		drawCharWalkLeft()
	}
	else if(isRight)
	{
		//Walking Right
		drawCharWalkRight()
	}
	else if(isFalling || isPlummeting)
	{
		//Jumping Facing Forward
		drawCharJumpForward()
	}
	else
	{
		//Facing Forward
		drawCharFaceForward()
	};
    
	//Game over text when the player lost all their remaining lifes and allowing to restart the game by pressing the spacebar
	if(lives < 1){
		fill(255, 36, 0);
        textSize(30);
		textStyle(BOLD);
		text("GAME OVER. Press [SPACE] to restart", width/2 - 270, height/2);
        
		//Allowing to restart the game by pressing the spacebar
        if(key == " "){
			lives = 4;
            startGame();
        }
        return;
	}
	
	//Level completed text when the player reached the flagpole
	if(flagpole.isReached == true){
		fill(99,195,18);
        textSize(30);
		textStyle(BOLD);
		text("LEVEL COMPLETED. Press [SPACE] to continue", width/2 - 325, height/2); 
		
		//Allowing to restart the game by pressing the spacebar
	   if(key == " "){
           lives = 4;
            startGame()
        }
        return;
	}

    //Game score and remaining life texts
	fill(246, 154, 82);
	textSize(20);
	textStyle(BOLD);
	text("Score:  " + game_score + " / 6", 20, 35);
	text("Lives:", 850, 35)
    
    //Check if player dies
    checkPlayerDie();
    
	//Drawing the lifes
	for(var i = 0; i < lives; i++){
	fill(246, 154, 82);
	ellipse(930 + i * 30, 29, 18, 18);
    }

///////////INTERACTION CODE//////////
	//Moving Character to the left when the correct key pressed
	if(isLeft == true && isPlummeting == false)
	{
		gameChar_scroll_x -= 2.3;
	};

	//Moving Character to the right when the correct key pressed
	if(isRight == true && isPlummeting == false)
	{
		gameChar_scroll_x += 2.3;
	};
	
	//Adding gravity so that the character will fall after jumping
	if(gameChar_y < floorPos_y)
	{
        var isContact = false;
        
		//If the game character touched the platform in mid air, it will stop falling
        for(var i = 0; i < platforms.length; i++){
            if(platforms[i].checkContact(gameChar_scroll_x, gameChar_y) == true){
                isContact = true;
                isFalling = false;
                break;
            }
        }
		//If the game character did not touch the platform while in mid air, it will continue falling
        if(isContact == false){
		gameChar_y += 2;
		isFalling = true
        }
	}else
	{
		isFalling = false;
	};

	//Conditions and character falling down the canyon
	checkCanyon(canyon)

	//Freezing the character when its plummeting
	if(isPlummeting == true){
		isLeft = false;
		isRight = false;
		isFalling = true;
		gameChar_y += 3.5;
	};
    
    //Checking if flagpole is reached
    if(flagpole.isReached == false){
        checkFlagpole();
    }
}

function keyPressed()
{
	//Setting isLeft into true when key "A" or "Left Arrow Key" is pressed
	if(keyCode == 65 || keyCode == 37)
	{
		isLeft = true;
	}
	//Setting isRight into true when key "D" or "Right Arrow Key" is pressed
	else if(keyCode == 68 || keyCode == 39)
	{
		isRight = true;
	};
	//Enabling jumping for character when key "W" or "Up Arrow Key" or "Spacebar" is pressed also disabling double jumping
	if((keyCode == 87 || keyCode == 32 || keyCode == 38) && isFalling == false)
	{
		gameChar_y -= 120;
		jumpSound.play();
	};
};

function keyReleased()
{
	//Stops the character from moving to the left once the moving left key is released
	if(keyCode == 65 || keyCode == 37)
	{
		isLeft = false;
	}
	//Stops the character from moving to the right once the moving left key is released
	else if(keyCode == 68 || keyCode == 39)
	{
		isRight = false;
	};
};

//Creating the Flagpole
function renderFlagpole(){
    
	if(flagpole.isReached == true){
        //Pole
        fill(127, 77, 62);
        rect(flagpole.x_pos, floorPos_y - 150, 10, 150);
		//Flag Front
		fill(205, 65, 10);
		rect(flagpole.x_pos + 40, floorPos_y - 140, 45, 40);
		//Flag Shadow
		fill(175, 65, 10);
		rect(flagpole.x_pos + 40, floorPos_y - 140, 15, 40);
		//Flag Back
		fill(205, 65, 10);
		rect(flagpole.x_pos + 10, floorPos_y - 145, 40, 40);
	}else{
        //Pole
        fill(127, 77, 62);
        rect(flagpole.x_pos, floorPos_y - 150, 10, 150);
		//Flag Shadow
		fill(175, 65, 10);
		rect(flagpole.x_pos, floorPos_y - 20, 20, 20);
		//Flag Front
		fill(205, 65, 10);
		rect(flagpole.x_pos, floorPos_y - 10, 50, 10);
	}
}

//Creating the platforms
function createPlatforms(x, y, length) {
    var p = {
        x: x,
        y: y,
        length: length,
        draw: function() {
            fill(141, 97, 85);
            rect(this.x, this.y, this.length, 15);
            fill(121, 77, 65);
            rect(this.x, this.y, this.length, 10);
            fill(81, 37, 25);
            rect(this.x, this.y, this.length, 5);
        },
        
        
        //Checking whether the game character is in contact with the platform
        checkContact: function(gc_x, gc_y)
        {
            if(gc_x > this.x && gc_x < this.x + this.length)
            {
                //Moving the game character onto the platform if the requirements are met
                var d = this.y - gc_y + 2;
                if(d >= 0 && d < 5)
                    {
                        return true;
                    }
            }
            return false;
        }
    }
    
    return p;
};


//Creating the enemies
function Enemy(x, y, range){
    this.x = x;
    this.y = y;
    this.range = range;
    
    this.currentX = x;
    this.inc = 1;
    
    //Moving the enemies
    this.update = function()
    {
        this.currentX += this.inc;
        
        if(this.currentX >= this.x + this.range)
            {
                this.inc = -1;
            }
            else if(this.currentX < this.x)
            {
                this.inc = 1;
            }
    }
    
    //Drawing the enemies
    this.draw = function()
    {
        this.update();
        fill(119, 181, 119);
        ellipse(this.currentX, this.y, 20, 20);
        fill(119, 201, 119);
        ellipse(this.currentX, this.y, 13, 13);
        fill(119, 221, 119);
        ellipse(this.currentX, this.y, 7, 7);
    }
    
    //Killing the player and respawning them back to the spawn when it came in contact with the enemy
    this.checkContact = function(gc_x, gc_y)
    {
        var d = dist(gc_x, gc_y, this.currentX, this.y)
        
        if(d < 35)
            {
                if(lives > 0){
                    loseSound.play();
                }
                return true;
            }
        
        return false;
    }
}