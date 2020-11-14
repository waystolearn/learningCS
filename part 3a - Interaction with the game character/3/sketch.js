/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

// [✔] Declare four variables: `isLeft`, `isRight`, `isFalling` and `isPlummeting`. 
var isLeft;
var isRight;
var isPlummeting;
var isFalling;


var collectable;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// [✔] Initialise each of them to `false`. These variables will be used to animate your game character.
	isLeft = false;
	isRight = false;
	isPlummeting = false;
	isFalling = false;

	collectable = {
        x_pos: 380, 
        y_pos: 418, 
		size: 20, 
		isFound: false
    };
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon

	// [✔] Add your game character code from part 2 to this sketch.
	//the game character
	if(isLeft && isFalling)
	{

		// [✔] You need to place each block of character code within the appropriate `if` statement so that when the character is animated the correct image will be drawn.

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

	// [✔] In the `draw` function, add two `if` statements such that:
	// 		when `isLeft` is `true` the character moves to the left
	// 		when `isRight` is `true` the character moves to the right.

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

	// [✔] Inside the function `keyPressed` write two `if` statements such that:
    //     when the left arrow key is pressed, `isLeft = true`
    //     when the right arrow key is pressed, `isRight = true`.

	if (keyCode == 37) {
		isLeft = true;
		console.log("isLeft: " + isLeft);
		console.log("turn left");
	} else if (keyCode == 39) {
		isRight = true;
		console.log("isRight: " + isRight);
		console.log("turn right");
	}

	// [✔] Add another `if` statement within `keyPressed` that checks when the the space-bar is pressed.
	// [✔] When the condition is met subtract 100 from `gameChar_y` so that the character jumps up in the air.
	// [✔] Now adjust your conditional statement so that your character can only jump when it is touching the ground. 
	if (keyCode == 32 && gameChar_y == floorPos_y) {
		console.log("space");
		gameChar_y -= 100;
		// for (i = 0; i < 100; i++){
		// 	gameChar_y -= 1;
		// }
		// how to stop it at the top ??

	}

	// Add an `if` statement within `draw` to detect when the character is above ground level. HINT: use `floorPos_y` and `gameChar_y` in your condition.
	// When the condition is met, increment `gameChar_y` so that the character falls towards the ground. Also set `isFalling` to `true` so that the falling image of the character appears.
	// Now add an `else` action to your conditional statement which set `isFalling` to `false`.
	if (gameChar_y < floorPos_y) {
		gameChar_y += 100;
		// for (i = 0; i < 100; i++){
		// 	gameChar_y += 1;
		// }
		isFalling = true;
	} else {
		isFalling = false;
	}

}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	// console.log("keyReleased: " + key);
	// console.log("keyReleased: " + keyCode);

	// [✔] Inside the function `keyReleased` write two `if` statements such that:
    //     when the left arrow key is released, `isLeft = false`
    //     when the right arrow key is released, `isRight = false`.
	if (keyCode == 37) {
		isLeft = false;
		console.log("isLeft: " + isLeft);
	} else if (keyCode == 39) {
		isRight = false;
		console.log("isRight: " + isRight);
	}
}
