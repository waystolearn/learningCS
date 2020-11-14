/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

var cloud1;
var cloud2; 
var cloud3;

function setup()
{
	createCanvas(1024, 576);
    
    cloud1 = {
        x: 80,
        y: 120,
        diameter: 50
    }
    
    cloud2 = {
        x: 280,
        y: 150,
        diameter: 70
    }
    
    cloud3 = {
        x: 450,
        y: 80,
        diameter: 60
    }
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here

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
    
    
	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	//... add your code here

    fill(0, 100, 0);
    triangle(350, 432, 490, 132, 550, 432);
    fill(0, 128, 0);
    triangle(490, 132, 550, 432, 620, 432);
    
    fill(0, 100, 0);
    triangle(500, 432, 620, 252, 750, 432);
    fill(0, 128, 0);
    triangle(620, 252, 750, 432, 820, 432);
    
    
	noStroke();
	fill(255);
	text("mountain", 500, 256);

	//3. a tree
	//... add your code here
    
    fill(120, 100, 40);
    rect(900, 282, 60, 150);
    
    //branches
    fill(0, 155, 0);
    triangle(850, 332, 930, 232, 1010, 332);
    triangle(850, 282, 930, 182, 1010, 282);

	noStroke();
	fill(255);
	text("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here

    fill(100, 155,255);
    rect(0, 432, 150, 120);
    fill(70, 100, 237);
    rect(0, 505, 150, 48);
        
	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here
    
    fill(255, 215, 0, 80);
    ellipse(380, 418, 30, 30);
    fill(255, 215, 0);
    stroke(255, 183, 107);
    ellipse(380, 418, 25, 25);
    noFill();
    ellipse(380, 418, 20, 20);
    
	noStroke();
	fill(255);
	text("collectable item", 400, 400);
}
