//Drawing multiple clouds with a loop
function drawClouds(){
    for(var i = 0; i < clouds.length; i++)
    {
    	fill(250, 169, 67, 200);
    	ellipse(clouds[i].x_pos, clouds[i].y_pos, 50, 50);
    	ellipse(clouds[i].x_pos + 25, clouds[i].y_pos + 2, 40, 40);
    	ellipse(clouds[i].x_pos - 30, clouds[i].y_pos + 5, 30, 30);
    };

	//Manually changing the speed of the cloud
	clouds[0].x_pos += 0.5;
	clouds[1].x_pos += 0.4;
	clouds[2].x_pos += 0.2;
	clouds[3].x_pos += 0.4;
	clouds[4].x_pos += 0.6;
	clouds[5].x_pos += 0.7;
	clouds[6].x_pos += 0.4;

}