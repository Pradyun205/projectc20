var tom1,tom2,tom3,tom4
var jerry1,jerry2,jerry3,jerry4
function preload() {
    //load the images here
    tom1=loadImage(tomOne.png)
    tom2=loadImage(tomTwo.png)
    tom3=loadImage(tomThree.png)
    tom4=loadImage(tomFour.png)

    jerry1=loadImage(jerryOne.png)
    jerry2=loadImage(jerryTwo.png)
    jerry3=loadImage(jerryThree.png)
    jerry4=loadImage(jerryFour.png)
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom1=createSprite(320,400,30,30);
tom1.addImage(tomOne.png)

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
cat1.velocityX=-5;
cat1.addAnimation("catRunning",cat2);
cat1.changeAnimation("catRunning");

}
cat.addAnimation("catLastImage",catImage3)
cat.changeAnimation("catLastImage")
}
