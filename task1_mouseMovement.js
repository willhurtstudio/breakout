// All examples go in update's last else block (line 225)

//Example 1
//If mouse pointer is on the left of the screen, move left
//If mouse pointer is on the right of the screen, move right
let pointer = this.input.activePointer;
if (pointer.x < config.width / 2) {
    player.body.setVelocityX(-350);
} 
else if (pointer.x > config.width / 2) {
    player.body.setVelocityX(350);
}

//Example 2
//Attach the paddle to the mouse position
//If move mouse quickly doesnt reach edge
let pointer = this.input.activePointer;
if(pointer.x >= 50 && pointer.x <= 750){ // this line stops it wobbling at edges when mouse offscreen
    player.x = pointer.x;
}


//Example 3
//Move the paddle towards the mouse, faster if further away
let pointer = this.input.activePointer;
let distancePointerToPaddle = pointer.x - player.x;
player.body.setVelocityX(distancePointerToPaddle * 10);

