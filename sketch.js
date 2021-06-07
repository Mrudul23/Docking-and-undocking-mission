var iss, spacecraft;
var bg, issimg, spacecraftmg;
var hasDocked = false;
var timeleft = 10
var tryimage
var tryagain



function preload(){
  bg= loadImage("space1.jpg");
  issimg = loadImage("iss.png");
  spacecraftmg = loadImage("spacecraft1.png");
  spacecraftmg1 = loadImage("spacecraft2.png");
  spacecraftmg2= loadImage("spacecraft3.png");
  spacecraftmg3= loadImage("spacecraft4.png");
  tryimage = loadImage("reset.png")
}
function setup() {
  createCanvas(1100, 600);

  spacecraft = createSprite(random(300,700),500);
  spacecraft.addImage(spacecraftmg);
  spacecraft.scale = 0.2;
  
  iss = createSprite(1100/2,200);
  iss.addImage(issimg);
  iss.scale = 0.4;

}

function draw() {
  background(bg);
  
  spacecraft.addImage(spacecraftmg);

  fill("white")
  textFont("cooper")
  textSize(40)
  text("Time left : "+timeleft,800,50)

 if(!hasDocked){
  spacecraft.x = spacecraft.x + random(-1,1);
  if(frameCount % 33===0){
    timeleft--
  }
      
   if(timeleft<1){
     timeleft = 0
     spacecraft.destroy()
     iss.destroy()
     text("Oh no astronaut you ran out of fuel. Docking was unsuccessful try again",150,height/2-200,700)
     tryagain = createSprite(650,400)
     tryagain.scale=0.3
     tryagain.addImage(tryimage)
   } 
 if(mousePressedOver(tryagain)){
  window.location.reload()
 }
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
    spacecraft.addImage(spacecraftmg1);

  }
    
  if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraftmg3);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraftmg2);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraftmg);
      spacecraft.y = spacecraft.y +2;

  }
}

  if(spacecraft.x >= 474  && spacecraft.y< 307 && spacecraft.y > 303  && spacecraft.x<477){
    hasDocked = true;
    textSize(60);
    fill("white")
    text("Docking Successful !", 270, 500);
  }
  drawSprites();
}