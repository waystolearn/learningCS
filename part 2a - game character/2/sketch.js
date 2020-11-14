/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. If you're character takes more than 5 lines
of code to draw then you've probably over done it.

** Only submit your sketch.js **

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
}

function draw()
{
	background(255);

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

    gameChar_x = 45;
	gameChar_y = 133;
	//Add your code here ...
    stroke(2);
    //skin tone head
    fill(255, 160, 122);
    ellipse(gameChar_x, gameChar_y - 50, 30);
    //salmon pink body
    fill(250, 128, 114);
    rect(gameChar_x - 10, gameChar_y - 35, 20, 30, 7);
    //feet
    fill(0);
    rect(gameChar_x - 10, gameChar_y - 5, 8, 12, 3);
    rect(gameChar_x + 2, gameChar_y - 5, 8, 12, 3);
    //eyes
    ellipse(gameChar_x - 8, gameChar_y - 53, 5, 4);
    ellipse(gameChar_x + 5, gameChar_y - 53, 5, 4);
    //mouth
    ellipse(gameChar_x, gameChar_y - 44, 4, 1);
    //hands
    stroke(2);
    line(gameChar_x - 10, gameChar_y - 30, gameChar_x - 20, gameChar_y - 15);
    line(gameChar_x + 10, gameChar_y - 30, gameChar_x + 20, gameChar_y - 15);


	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 133;
	//Add your code here ...
    stroke(2);
    //skin tone head
    fill(255, 160, 122);
    ellipse(gameChar_x, gameChar_y - 50, 30);
    //feet
    fill(0);
    rect(gameChar_x - 12, gameChar_y - 20, 8, 8, 3);
    rect(gameChar_x + 5, gameChar_y - 20, 8, 8, 3);
    //salmon pink body
    fill(250, 128, 114);
    rect(gameChar_x - 10, gameChar_y - 35, 20, 20, 7);
    //eyes
    fill(0);
    ellipse(gameChar_x - 8, gameChar_y - 53, 5, 4);
    ellipse(gameChar_x + 5, gameChar_y - 53, 5, 4);
    //mouth
    ellipse(gameChar_x, gameChar_y - 44, 4, 3);
    //hands
    stroke(2);
    line(gameChar_x - 10, gameChar_y - 30, gameChar_x - 20, gameChar_y - 50);
    line(gameChar_x + 10, gameChar_y - 30, gameChar_x + 20, gameChar_y - 50);
    
	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 333;
	//Add your code here ...
    
    stroke(2);
    fill(0);
    //right eye
    ellipse(gameChar_x - 14, gameChar_y - 53, 5, 5);
    //right foot
    rect(gameChar_x - 8, gameChar_y - 10, 8, 12, 3);
    //skin tone head
    fill(255, 160, 122);
    ellipse(gameChar_x, gameChar_y - 50, 30);
    //salmon pink body
    fill(250, 128, 114);
    rect(gameChar_x - 10, gameChar_y - 35, 20, 30, 7);
    //left foot
    fill(0);
    rect(gameChar_x, gameChar_y - 8, 8, 12, 3);
    //left eye    
    ellipse(gameChar_x - 10, gameChar_y - 53, 5, 5);
    //mouth
    ellipse(gameChar_x - 10, gameChar_y - 44, 2, 1);
    //left hand
    stroke(2);
    line(gameChar_x, gameChar_y - 30, gameChar_x - 3, gameChar_y - 15);

	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 333;
	//Add your code here ...
    
    stroke(2);
    fill(0);
    //right eye
    ellipse(gameChar_x + 14, gameChar_y - 53, 5, 4);
    //right foot
    rect(gameChar_x -3, gameChar_y - 10, 8, 12, 3);
    //skin tone head
    fill(255, 160, 122);
    ellipse(gameChar_x, gameChar_y - 50, 30);
    //salmon pink body
    fill(250, 128, 114);
    rect(gameChar_x - 10, gameChar_y - 35, 20, 30, 7);
    //left foot
    fill(0);
    rect(gameChar_x - 10, gameChar_y - 8, 8, 12, 3);
    //left eye    
    ellipse(gameChar_x + 10, gameChar_y - 53, 5, 4);
    //mouth
    ellipse(gameChar_x + 10, gameChar_y - 44, 2, 1);
    //left hand
    stroke(2);
    line(gameChar_x, gameChar_y - 30, gameChar_x + 3, gameChar_y - 15);

	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

    gameChar_x = 45;
    gameChar_y = 533;
    //Add your code here ...
    
    stroke(2);
    fill(0);
    //right eye
    ellipse(gameChar_x + 14, gameChar_y - 53, 5, 4);
    //left foot
    rect(gameChar_x - 8, gameChar_y - 20, 10, 8, 3);
    //skin tone head
    fill(255, 160, 122);
    ellipse(gameChar_x, gameChar_y - 50, 30);
    //salmon pink body
    fill(250, 128, 114);
    rect(gameChar_x - 10, gameChar_y - 35, 20, 20, 7);
    //right foot
    fill(0);
    rect(gameChar_x - 13, gameChar_y - 18, 10, 8, 3);
    //left eye    
    ellipse(gameChar_x + 10, gameChar_y - 53, 5, 4);
    //mouth
    ellipse(gameChar_x + 12, gameChar_y - 44, 2, 3);
    //left hand
    stroke(2);
    line(gameChar_x, gameChar_y - 30, gameChar_x + 3, gameChar_y - 50);

	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 533;
	//Add your code here ...

    stroke(2);
    fill(0);
    //right eye
    ellipse(gameChar_x - 14, gameChar_y - 53, 5, 4);
    //right foot
    rect(gameChar_x - 2, gameChar_y - 22, 8, 10, 3);
    //skin tone head
    fill(255, 160, 122);
    ellipse(gameChar_x, gameChar_y - 50, 30);
    //salmon pink body
    fill(250, 128, 114);
    rect(gameChar_x - 10, gameChar_y - 35, 20, 20, 7);
    //left foot
    fill(0);
    rect(gameChar_x + 3, gameChar_y - 18, 10, 8, 3);
    //left eye    
    ellipse(gameChar_x - 10, gameChar_y - 53, 5, 4);
    //mouth
    ellipse(gameChar_x - 12, gameChar_y - 44, 2, 3);
    //left hand
    stroke(2);
    line(gameChar_x, gameChar_y - 30, gameChar_x - 3, gameChar_y - 50);
    
}
