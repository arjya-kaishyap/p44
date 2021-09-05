
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var score =0;

var thor1, villan5, strombreaker,gameover, background;
var thor1Img,villan5Img, villan4Img, gameoverImg, backgroundImg;
var villan5Group, villan4Group;
var score = 0;

var life =20;
var score=0;
var gameState=1

function preload(){
	thor1Img = loadImage("thor1.png")
	gameoverImg = loadImage("gameOver.png")
	villan5Img = loadImage("villan5.png")
	villan4Img = loadImage("villan4.png")
	backgroundImg= loadImage("backgroundImage.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	background= createSprite(50, width/2, 100,height);
	background.addImage(backBoardImg)
	
	thor1= createSprite(100, height/2, 50,50);
	thor1.addImage(gunImg)
	thor1.scale=0.2
	 
	villan5Group = createGroup();   
	villan4Group = createGroup(); 


	Engine.run(engine);
  
}

function draw() {
	background("#BDA297");
  
	
	  showLife() 
	  push();{
	  image(lifeImage, width / 2 - 130, height - player.positionY - 400, 20, 20);
	  fill("white");
	  rect(width / 2 - 100, height - player.positionY - 400, 185, 20);
	  fill("#f50057");
	  rect(width / 2 - 100, height - player.positionY - 400, player.life, 20);
	  noStroke();
	  pop();
	}
  
	if(gameState===1){
	  gun.y=mouseY  
  
	  
	  drawSprites();
	}
	   
  }