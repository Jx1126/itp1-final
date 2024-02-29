function drawCanyon(t_canyon){
    
    //Drawing the canyons
    fill(91, 47, 35);
    triangle(t_canyon.x_pos + 100, t_canyon.y_pos,
             t_canyon.x_pos, t_canyon.y_pos + 200,
             t_canyon.x_pos + 100, t_canyon.y_pos + 200);

    triangle(t_canyon.x_pos + 200, t_canyon.y_pos,
             t_canyon.x_pos + 300, t_canyon.y_pos + 200,
             t_canyon.x_pos + 200, t_canyon.y_pos + 200);
    
    fill(121, 77, 65);
    rect(t_canyon.x_pos + 100, t_canyon.y_pos, 100, 150)
}

//Checking if the character is plummeting into the canyon or not
function checkCanyon(t_canyon){
    if(gameChar_scroll_x > t_canyon.x_pos + 100 && 
        gameChar_scroll_x < t_canyon.x_pos + 100 + 100 && 
        gameChar_y >= floorPos_y)
    {
        isPlummeting = true;
    }
}