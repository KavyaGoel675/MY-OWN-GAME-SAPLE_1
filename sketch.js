var mbg;
var pl1;
var p1,p2,p3,p4,p5,p6;


function preload(){
  bgImg=loadImage("background/1.png");
  bgImg1=loadImage("background/2.png");

  pl1Img=loadImage("player/1.png");

  p1Img=loadImage("platform/1.png");
  p2Img=loadImage("platform/2.png");
  p3Img=loadImage("platform/3.png");
  p4Img=loadImage("platform/4.png");
  p5Img=loadImage("platform/5.png"); 
  p6Img=loadImage("platform/6.png");
}

function setup() {
  createCanvas(800,400);
  mbg=createSprite(400, 200, 50, 50);
  mbg.addImage("img",bgImg1);
  mbg.scale=0.6;

 // p1=createSprite(100, 370);
  //p1.addImage("img",p1Img);
  //p1.scale=0.6;


  pl1=createSprite(100,245);
  pl1.addImage(pl1Img);
  pl1.scale=1.9

//pl2=createSprite(170,370);
 // pl2.addImage(p1Img);
  //pl2.scale=0.6
}

function draw() {
  background(bgImg);  
  
  for (var i = 0; i < 400; i=i+20) {
    line(200,i,200,i+10); 
 }
  if(keyIsDown(RIGHT_ARROW)){
    pl1.x=pl1.x+1;
    mbg.x=mbg.x+1;
    p1.x=p1.x-1;
  }

  if(keyIsDown(LEFT_ARROW)){
    pl1.x=pl1.x-1;
    mbg.x=mbg.x-1;
    p1.x=p1.x+1;
  }
  platform();

  drawSprites();
}

function platform(){
  if(frameCount %150===0){
      var plt=createSprite(800,200,40,40);
      plt.y=Math.round(random(150,350));
      plt.velocityX=-6 ;
      plt.scale=0.6;

      var rand=Math.round(random(1,6))
      switch(rand){
        case 1 :  plt.addImage(p1Img)
        break;
        case 2 :  plt.addImage(p2Img)
        break;
        case 3 :  plt.addImage(p3Img)
        break;
        case 4 :  plt.addImage(p4Img)
        break;
        case 5 :  plt.addImage(p5Img)
        break;
        case 6 :  plt.addImage(p6Img)
        break;
        default : break;


      }
  }
  
}