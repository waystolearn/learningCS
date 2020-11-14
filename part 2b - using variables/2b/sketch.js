/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud1;
var cloud2;
var cloud3;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = 100;
	treePos_y = 300;
    
    canyon = {
        x_pos: 575, 
        width: 450
    }
    
    collectable = {
        x_pos: 380, 
        y_pos: 418, 
        size: 30
    }
    
    mountain = {
        x: 200, 
        y: 432
    }
    
    cloud1 = {
        x: 180, 
        y: 120, 
        diameter: 70
    }
    
    cloud2 = {
        x: 480, 
        y: 150, 
        diameter: 80
    }
    
    cloud3 = {
        x: 750, 
        y: 80, 
        diameter: 60
    }
}

function draw()
{
    //fill the sky blue
	background(100, 155, 255); 
    //draw some green ground
	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); 
    
    //mountains
    //mountain appears behind the tree
    fill(0, 100, 0);
    triangle(mountain.x, mountain.y, mountain.x + 140, 132, mountain.x + 200, mountain.y);
    fill(0, 128, 0);
    triangle(mountain.x + 140, mountain.y - 300, mountain.x + 200, mountain.y, mountain.x + 270, mountain.y);
    
    fill(0, 100, 0);
    triangle(mountain.x + 150, mountain.y, mountain.x + 270, mountain.y - 180, mountain.x + 300, mountain.y);
    fill(0, 128, 0);
    triangle(mountain.x + 270, mountain.y - 180, mountain.x + 300, mountain.y, mountain.x + 370, mountain.y);
    
    //draw tree
    noStroke();
    fill(120, 100, 40);
    rect(treePos_x, treePos_y, 60, 150);
    
    //branches
    fill(0, 155, 0);
    triangle(treePos_x - 50, treePos_y + 50, treePos_x + 30, treePos_y - 50, treePos_x + 110, treePos_y + 50);
    triangle(treePos_x - 50, treePos_y, treePos_x + 30, treePos_y - 100, treePos_x + 110, treePos_y);
    
    //draw the game character
    
    stroke(2);
    //skin tone head
    fill(255, 160, 122);
    ellipse(gameChar_x, gameChar_y - 50, 30);
    //salmon pink body
    fill(250, 128, 114);
    rect(gameChar_x - 10, gameChar_y - 35, 20, 30);
    //feet
    fill(0);
    rect(gameChar_x - 15, gameChar_y - 5, 10, 10);
    rect(gameChar_x + 5, gameChar_y - 5, 10, 10);
    //eyes
    ellipse(gameChar_x - 8, gameChar_y - 53, 5, 5);
    ellipse(gameChar_x + 5, gameChar_y - 53, 5, 5);
    //hands
    stroke(2);
    line(gameChar_x - 10, gameChar_y - 30, gameChar_x - 20, gameChar_y - 15);
    line(gameChar_x + 10, gameChar_y - 30, gameChar_x + 20, gameChar_y - 15);
    
    //canyon
    noStroke();
//    fill(100, 155,255);
//    rect(canyon.x_pos, 432, canyon.width, 120);
    fill(70, 100, 237);
    rect(canyon.x_pos, 530, canyon.width, 50);
        
	noStroke();
	fill(255);
	text("canyon", canyon.x_pos + 10, 480);
    
    //collectable
    //make sure that the collectable item appears in front of everything but the game character
    fill(255, 215, 0, 80);
    ellipse(collectable.x_pos, collectable.y_pos, collectable.size, collectable.size);
    fill(255, 215, 0);
    stroke(255, 183, 107);
    ellipse(collectable.x_pos, collectable.y_pos, collectable.size - 5, collectable.size - 5);
    noFill();
    ellipse(collectable.x_pos, collectable.y_pos, collectable.size - 10, collectable.size - 10);
    
    
    //clouds
    noStroke();
    fill(255, 255, 255);
    ellipse(cloud1.x, cloud1.y, cloud1.diameter, cloud1.diameter);
    ellipse(cloud1.x-20, cloud1.y, cloud1.diameter-15, cloud1.diameter-15);
    ellipse(cloud1.x+20, cloud1.y, cloud1.diameter-15, cloud1.diameter-15);
    
    ellipse(cloud2.x, cloud2.y, cloud2.diameter, cloud2.diameter);
    ellipse(cloud2.x-20, cloud2.y, cloud2.diameter-15, cloud2.diameter-15);
    ellipse(cloud2.x+20, cloud2.y, cloud2.diameter-15, cloud2.diameter-15);
    
    ellipse(cloud3.x, cloud3.y, cloud3.diameter, cloud3.diameter);
    ellipse(cloud3.x-20, cloud3.y, cloud3.diameter-15, cloud3.diameter-15);
    ellipse(cloud3.x+20, cloud3.y, cloud3.diameter-15, cloud3.diameter-15);

}

function mousePressed()
{
    gameChar_x = mouseX;
    gameChar_y = mouseY;
}
