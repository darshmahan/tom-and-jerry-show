var cat,cat1
var mouse,mouse1
function preload() {
mouse2=loadImage(jerryOne.png,jerryTwo.png)
cat1=loadImage(tomOne.png,tomTwo.png)
}

function setup(){
createCanvas(1000,800);
background(garden.png);

    //create tom and jerry sprites here

}

function draw() {
background(255);
if(isTouching(cat,mouse)){
cat.addAnimation = "tomTwo.png";
mouse.shapeColor = "jerryTwo.png";
  }
  else{
    cat.shapeColor = "jerryOne.png";
  mouse.shapeColor = "tomOne.png";
  }
     //Write condition here to evalute if tom and jerry collide

drawSprites();
}


function keyPressed(){
 if(keyDown("Rightarrow")){
cat.velocityY=-12
cat.addAnimation("cat1")
  //For moving and changing animation write code here


}
