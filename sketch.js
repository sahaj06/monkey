
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {

  
  
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
  
  
  ground = createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x = ground.width/2
  
  score = 0;
  
  obstacleGroup = new Group();
  foodGroup = new Group();
}


function draw() {

  background(225)
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  if(keyDown("space")){
     monkey.velocityY=-12   
     }
  
  monkey.velocityY = monkey.velocityY+0.8
  
  monkey.collide(ground)
  
  spawnFruits();
  
  spawnObstacles();
  
  
  
  drawSprites();
  
  if(obstacleGroup.isTouching(monkey)){
     monkey.velociityX=0;
    monkey.velociityY=0;
  ground.velocityX=0;
    obstacleGroup.setVelociityXEach=0;
    foodGroup.setVelocityXEach=0;
    obstacleGroup.setLifetimeEach(-1)
     foodGroupG.setLifetimeEach(-1)
     
     }
}

function spawnFruits(){
  
  if(frameCount%70 === 0){
     banana =  createSprite(600,200,20,20)
    banana.y= random(150,250)
    
    banana.velocityX=-6;
    banana.addImage(bananaImage)
    banana.scale=0.1
    monkey.depth = banana.depth+1  
    
    banana.lifetime=300
    
    foodGroup.add(banana);
    
    
     }
  
}


function spawnObstacles(){
  if(frameCount%150 === 0){
  obstacle = createSprite(400,330,10,40)
    obstacle.addImage(obstaceImage)
    obstacle.scale = 0.1;
    obstacle.velocityX=-6
    
    obstacle.lifetime=300
    
    obstacleGroup.add(obstacle)
    
}
}

