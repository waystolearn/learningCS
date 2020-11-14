/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isPlummeting;
var isFalling;


var collectable;
var canyon;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	isLeft = false;
	isRight = false;
	isPlummeting = false;
	isFalling = false;

	// [✔] Add a property `isFound` to the object and initialise it to `false`.
	collectable = {
        x_pos: 380, 
        y_pos: 418, 
		size: 20, 
		isFound: false
	};
	
	canyon = {
		x: 575, 
		y: 460,
		w: 50, 
		h: 100
    }
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon
		noStroke();
		fill(100,155,255);
		rect(canyon.x, floorPos_y, canyon.w, canyon.h - 20);
		fill(128, 0, 0);
		rect(canyon.x, canyon.y, canyon.w, canyon.h);	
	// [✔] Write a conditional statement within `draw` to detect when the character is over the canyon. HINT: use gameChar_x and the > and < operators.		
    if (gameChar_x - 10 > canyon.x && gameChar_x - 10 < canyon.x + canyon.w) {
		// [✔] When the condition is met set `isPlummeting` to `true`.
		isPlummeting = true;
		}
	// [✔] When the condition is met set `isPlummeting` to `true`.
	if (isPlummeting == true) {
		// [✔] When this condition is met increment `gameChar_y` so that the game character falls quickly.
		gameChar_y += 10;
	}

	if (gameChar_y >= floorPos_y) {
		isPlummeting = false;
	}






	// [✔] Copy and paste the collectable item code from part 2b.
	// Add a property `isFound` to the object and initialise it to `false`.
	//collectable
	
	// [✔] Write a conditional statement so that the collectable item is only drawn when `isFound` is `false`.
	if (collectable.isFound == false) {
		//make sure that the collectable item appears in front of everything but the game character
		fill(255, 215, 0, 80);
		ellipse(collectable.x_pos, collectable.y_pos, collectable.size, collectable.size);
		fill(255, 215, 0);
		stroke(255, 183, 107);
		ellipse(collectable.x_pos, collectable.y_pos, collectable.size + 5, collectable.size + 5);
		noFill();
		ellipse(collectable.x_pos, collectable.y_pos, collectable.size, collectable.size);
	}
	// [✔] Write an `if` statement in `draw` with a condition that is `true` when the character is in range of the item.
	// [✔] When the condition is `true`, set the value of `isFound` in the `collectable` to `true`.
	
	if(dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos) < collectable.size + 15) {
		collectable.isFound = true;
	}

	//the game character
	if(isLeft && isFalling)
	{

		// add your jumping-left code

		stroke(2);
		//right eye
		ellipse(gameChar_x - 14, gameChar_y - 53, 5, 5);
		//right foot
		rect(gameChar_x - 5, gameChar_y - 20, 10, 10);
		//skin tone head
		fill(255, 160, 122);
		ellipse(gameChar_x, gameChar_y - 50, 30);
		//salmon pink body
		fill(250, 128, 114);
		rect(gameChar_x - 10, gameChar_y - 35, 20, 20);
		//left foot
		fill(0);
		rect(gameChar_x + 3, gameChar_y - 18, 10, 10);
		//left eye    
		ellipse(gameChar_x - 10, gameChar_y - 53, 5, 5);
		//left hand
		stroke(2);
		line(gameChar_x, gameChar_y - 30, gameChar_x - 3, gameChar_y - 50);
	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code

		stroke(2);
		//right eye
		ellipse(gameChar_x + 14, gameChar_y - 53, 5, 5);
		//right foot
		rect(gameChar_x - 6, gameChar_y - 20, 10, 10);
		//skin tone head
		fill(255, 160, 122);
		ellipse(gameChar_x, gameChar_y - 50, 30);
		//salmon pink body
		fill(250, 128, 114);
		rect(gameChar_x - 10, gameChar_y - 35, 20, 20);
		//left foot
		fill(0);
		rect(gameChar_x - 13, gameChar_y - 18, 10, 10);
		//left eye    
		ellipse(gameChar_x + 10, gameChar_y - 53, 5, 5);
		//left hand
		stroke(2);
		line(gameChar_x, gameChar_y - 30, gameChar_x + 3, gameChar_y - 50);
	}
	else if(isLeft)
	{
		// add your walking left code

		stroke(2);
		fill(0);
		//right eye
		ellipse(gameChar_x - 14, gameChar_y - 53, 5, 5);
		//right foot
		rect(gameChar_x - 8, gameChar_y - 10, 10, 10);
		//skin tone head
		fill(255, 160, 122);
		ellipse(gameChar_x, gameChar_y - 50, 30);
		//salmon pink body
		fill(250, 128, 114);
		rect(gameChar_x - 10, gameChar_y - 35, 20, 30);
		//left foot
		fill(0);
		rect(gameChar_x, gameChar_y - 8, 10, 10);
		//left eye    
		ellipse(gameChar_x - 10, gameChar_y - 53, 5, 5);
		//left hand
		stroke(2);
		line(gameChar_x, gameChar_y - 30, gameChar_x - 3, gameChar_y - 15);
	}
	else if(isRight)
	{
		// add your walking right code

		stroke(2);
		fill(0);
		//right eye
		ellipse(gameChar_x + 14, gameChar_y - 53, 5, 5);
		//right foot
		rect(gameChar_x -3, gameChar_y - 10, 10, 10);
		//skin tone head
		fill(255, 160, 122);
		ellipse(gameChar_x, gameChar_y - 50, 30);
		//salmon pink body
		fill(250, 128, 114);
		rect(gameChar_x - 10, gameChar_y - 35, 20, 30);
		//left foot
		fill(0);
		rect(gameChar_x - 10, gameChar_y - 8, 10, 10);
		//left eye    
		ellipse(gameChar_x + 10, gameChar_y - 53, 5, 5);
		//left hand
		stroke(2);
		line(gameChar_x, gameChar_y - 30, gameChar_x + 3, gameChar_y - 15);
	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code

		stroke(2);
		fill(0);
		//skin tone head
		fill(255, 160, 122);
		ellipse(gameChar_x, gameChar_y - 50, 30);
		//feet
		fill(0);
		rect(gameChar_x - 15, gameChar_y - 20, 10, 10);
		rect(gameChar_x + 5, gameChar_y - 20, 10, 10);
		//salmon pink body
		fill(250, 128, 114);
		rect(gameChar_x - 10, gameChar_y - 35, 20, 20);
		//eyes
		fill(0);
		ellipse(gameChar_x - 8, gameChar_y - 53, 5, 5);
		ellipse(gameChar_x + 5, gameChar_y - 53, 5, 5);
		//hands
		stroke(2);
		line(gameChar_x - 10, gameChar_y - 30, gameChar_x - 20, gameChar_y - 50);
		line(gameChar_x + 10, gameChar_y - 30, gameChar_x + 20, gameChar_y - 50);
	}
	else
	{
		// add your standing front facing code

		stroke(2);
		fill(0);
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
	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here

	if (isLeft == true) {
		gameChar_x -= 5;
	}

	if(isRight == true) {
		gameChar_x += 5;
	}


}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	// console.log("keyPressed: " + key);
	// console.log("keyPressed: " + keyCode);

	if (keyCode == 37) {
		isLeft = true;
		console.log("isLeft: " + isLeft);
		console.log("turn left");
	} else if (keyCode == 39) {
		isRight = true;
		console.log("isRight: " + isRight);
		console.log("turn right");
	}

	if (keyCode == 32) {
		if (gameChar_y < floorPos_y && gameChar_y > floorPos_y + 100){
			console.log("space");
			gameChar_y -= 100;
		}
		
		// how to stop it at the top ??

	}

	// if (gameChar_y < floorPos_y) {
	// 	gameChar_y += 100;
	// 	isFalling = true;
	// } else {
	// 	isFalling = false;
	// }

}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	// console.log("keyReleased: " + key);
	// console.log("keyReleased: " + keyCode);

	if (keyCode == 37) {
		isLeft = false;
		console.log("isLeft: " + isLeft);
	} else if (keyCode == 39) {
		isRight = false;
		console.log("isRight: " + isRight);
	}
}
