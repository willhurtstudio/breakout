/// *** FROM LIAM & LIAM ***
if(ball.x >= 780 || ball.x <= 20){
    xBounce = ball.x
    yBounce = ball.y
  }

 

function hitBrick(ball, brick) {
  brick.disableBody(true, true);
  xBounce = ball.x 
  yBounce= ball.y

 

  if (ball.body.velocity.x == 0) {
    randNum = Math.random();
    if (randNum >= 0.5) {
      ball.body.setVelocityX(150);
    } else {
      ball.body.setVelocityX(-150);
    }
  }
}

 

function hitPlayer(ball, player) {
  // Increase the velocity of the ball after it bounces
  var gradient = ball.y - yBounce / xBounce - ball.x
  var opposite = yBounce - ball.y 
  var adjacent = ball.x - xBounce
  var tan = opposite/adjacent
  var angle = Math.atan(tan)
  ball.setVelocityX(ball.body.velocity.x + angle)
  ball.setVelocityY(ball.body.velocity.y - 5);
}