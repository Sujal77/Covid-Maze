var maze1,maze2,maze3,maze4,maze5,maze6,maze7,maze8,maze9,maze10,maze11,maze12,maze13,maze14;
var maze15,maze16,maze17,maze18,maze19,maze20,maze21,maze22,maze23,maze24,maze25,maze26,maze27,maze28;
var maze29,maze30,maze31;
var man, wallGroup,mazeGroup;
var virus1,virus2,virus3,virus4;
var virus1Img, virus2Img, virus3Img, virus4Img;
var wall1,wall2,wall3,wall4;
var man1Img, hw1,hw2,hw3,hw4,hw5;
var sanitizerImg, handwashImg;
var house,houseImg;
var dot1, capsuleImg;
var dot2,dot3,dot4,dot4,dot5,dot6,dot7,dot8,dot9,dot10,dot11,dot12,dot13,dot14,dot15,dot16,dot17,dot18,dot19;
var dot20,dot21,dot22,dot23,dot24,dot25,dot26,dot28,dot29,dot30,dot31,dot32,dot33,dot34,dot35,dot36,dot37,dot38,dot39,dot40;
var dot41,dot42,dot43,dot44,dot45,dot46,dot47,dot48,dot49,dot50,dot51,dot52,dot53,dot54;
var pleasantSound,alarm;
var dot55,dot56,dot57,dot58,dot59,dot60,dot61,dot62,dot63,dot64,dot65,dot66,dot67,dot68;
var dot69,dot70,dot71,dot72,dot73,dot74,dot75,dot76,dot77,dot78,dot79,dot80;
var dot81,dot82,dot83,dot84,dot85,dot86,dot87,dot88,dot89,dot90,dot91,dot92;
var dot93,dot94,dot95,dot96,dot97,dot98,dot99,dot100; 
var dotGroup;
var  gameState="start";
var live1,live2,live3, liveImg,lives=3;
var start,startImg,bg,bgImg;
var score=0;



function preload(){
  virus1Img = loadImage("2ndImg.png")
  virus2Img = loadImage("virus2.png")
  virus3Img = loadImage("virus3.png")
  virus4Img = loadImage("virus4.png")
  houseImg = loadImage("house.png")
  man1Img = loadAnimation("man1.png","man2.png","man3.png");
  capsuleImg= loadImage("capsule.png")
  liveImg = loadImage("live.png")
  bgImg = loadImage("bg.png")
  startImg = loadImage("START.png")
  pleasantSound = loadSound("launching.mp3")
  alarm = loadSound("alarmer.mp3")
  sanitizerImg = loadImage("sanitizer.png")
  handwashImg = loadImage("handwash.png")


}
function setup(){
  createCanvas(1100,500)
  
  man= createSprite(50,440,10,10)
  man.addAnimation("walking", man1Img)
  man.scale=0.1;
  mazeGroup = createGroup()
  wallGroup = createGroup();
  dotGroup = createGroup();
  wall1 = createSprite(950,300,150,10)
  wall2 = createSprite(950,400,150,10)
  wall3 = createSprite(300,325,10,50)
  wall4 = createSprite(500,325,10,50)
  wallGroup.add(wall1)
  wallGroup.add(wall2)
  wallGroup.add(wall3)
  wallGroup.add(wall4)
  hw1 = createSprite(280,330,10,10)
  hw1.addImage(handwashImg)
  hw1.scale=0.1;
  hw2 = createSprite(600,300,10,10)
  hw2.addImage(handwashImg)
  hw2.scale=0.1;
  hw3 = createSprite(400,400,10,10)
  hw3.addImage(sanitizerImg)
  hw3.scale=0.3;
  hw4 = createSprite(580,100,10,10)
  hw4.addImage(sanitizerImg)
  hw4.scale=0.3;
  hw5 = createSprite(50,200,10,10)
  hw5.addImage(handwashImg)
  hw5.scale=0.1;
  virus1 = createSprite(325,320,10,10)
  virus1.addImage(virus1Img)
  virus1.scale=0.2;
  virus1.velocityX=-2
  virus2 = createSprite(455,320,10,10)
  virus2.addImage(virus2Img)
  virus2.scale=0.1;
  virus2.velocityX=2

  virus3 = createSprite(375,320,10,10)
  virus3.addImage(virus3Img)
  virus3.scale=0.2;
  virus3.velocityY=2

  virus4 = createSprite(325,420,10,10)
  virus4.addImage(virus4Img)
  virus4.scale=0.2;
  virus4.velocityY=-2

  
  //corners
  maze1 = createSprite(650,5,1300,10)
  maze2 = createSprite(5,250,10,600)
  maze3 = createSprite(1095,250,10,600)
  maze4 = createSprite(650,495,1300,10)
  //down 
  maze5 = createSprite(166,450,40,10)
  maze6 = createSprite(216,465,10,70)
  maze7 = createSprite(266,450,40,10)
  maze8 = createSprite(316,465,10,70)
  maze9 = createSprite(406,450,120,10)
  maze10 = createSprite(496,465,10,70)
  maze11 = createSprite(636,450,200,10)
  maze12 = createSprite(766,465,10,120)
  maze13 = createSprite(916,450,290,10)
 //upper
  maze14 = createSprite(200,50,300,10)
  maze15 = createSprite(550,50,300,10)
  maze16 = createSprite(900,50,300,10)
  //middle
  //rect
  maze17 = createSprite(400,90,200,10)
  maze18 = createSprite(400,190,200,10)
  maze19 = createSprite(300,140,10,110)
  maze20 = createSprite(500,140,10,110)
  //square
  maze21 = createSprite(150,100,150,10)
  maze22 = createSprite(150,250,150,10)
  maze23 = createSprite(75,175,10,160)
  maze24 = createSprite(225,175,10,160)
  //random shape
  maze25 = createSprite(700,100,200,10)
  maze26 = createSprite(600,145,10,100)
  maze27 = createSprite(600,200,100,10)
  maze28 = createSprite(800,145,10,100)
  maze29 = createSprite(800,200,100,10)
  maze30 = createSprite(705, 155,10,112)
  maze31 = createSprite(650,350,300,10)
  maze32 = createSprite(800,305,10,100)
  maze33 = createSprite(887,255,230,10)

  mazeGroup.add(maze1)
  mazeGroup.add(maze2)
  mazeGroup.add(maze3)
  mazeGroup.add(maze4)
  mazeGroup.add(maze5)
  mazeGroup.add(maze6)
  mazeGroup.add(maze7)
  mazeGroup.add(maze8)
  mazeGroup.add(maze9)
  mazeGroup.add(maze10)
  mazeGroup.add(maze11)
  mazeGroup.add(maze12)
  mazeGroup.add(maze13)
  mazeGroup.add(maze14)
  mazeGroup.add(maze15)
  mazeGroup.add(maze16)
  mazeGroup.add(maze17)
  mazeGroup.add(maze18)
  mazeGroup.add(maze19)
  mazeGroup.add(maze20)
  mazeGroup.add(maze21)
  mazeGroup.add(maze22)
  mazeGroup.add(maze23)
  mazeGroup.add(maze24)
  mazeGroup.add(maze25)
  mazeGroup.add(maze26)
  mazeGroup.add(maze27)
  mazeGroup.add(maze28)
  mazeGroup.add(maze29)
  mazeGroup.add(maze30)
  mazeGroup.add(maze31)
  mazeGroup.add(maze32)
  mazeGroup.add(maze33)
 
  

  live1 = createSprite(1000,30,10,10)
  live1.addImage(liveImg)
  live1.scale=0.1;
  live2 = createSprite(1030,30,10,10)
  live2.addImage(liveImg)
  live2.scale=0.1;

  live3 = createSprite(1060,30,10,10)
  live3.addImage(liveImg)
  live3.scale=0.1;




  house = createSprite(60,440,30,30)
  house.addImage(houseImg)
  house.scale=0.6
  dot1 = createSprite(50,30,10,10)
  dot1.addImage(capsuleImg)
  dot1.scale=0.1

  dot2 = createSprite(80,30,10,10)
  dot2.addImage(capsuleImg)
  dot2.scale=0.1

  dot3 = createSprite(110,30,10,10)
  dot3.addImage(capsuleImg)
  dot3.scale=0.1


  dot4 = createSprite(140,30,10,10)
  dot4.addImage(capsuleImg)
  dot4.scale=0.1

  dot5 = createSprite(170,30,10,10)
  dot5.addImage(capsuleImg)
  dot5.scale=0.1

  dot6 = createSprite(200,30,10,10)
  dot6.addImage(capsuleImg)
  dot6.scale=0.1

  dot7 = createSprite(230,30,10,10)
  dot7.addImage(capsuleImg)
  dot7.scale=0.1

  dot8 = createSprite(260,30,10,10)
  dot8.addImage(capsuleImg)
  dot8.scale=0.1

  dot9 = createSprite(290,30,10,10)
  dot9.addImage(capsuleImg)
  dot9.scale=0.1

  dot10 = createSprite(320,30,10,10)
  dot10.addImage(capsuleImg)
  dot10.scale=0.1

  dot11 = createSprite(350,30,10,10)
  dot11.addImage(capsuleImg)
  dot11.scale=0.1

  dot12 = createSprite(380,30,10,10)
  dot12.addImage(capsuleImg)
  dot12.scale=0.1

  dot13 = createSprite(410,30,10,10)
  dot13.addImage(capsuleImg)
  dot13.scale=0.1

  dot14 = createSprite(440,30,10,10)
  dot14.addImage(capsuleImg)
  dot14.scale=0.1

  dot15 = createSprite(470,30,10,10)
  dot15.addImage(capsuleImg)
  dot15.scale=0.1

  dot16 = createSprite(500,30,10,10)
  dot16.addImage(capsuleImg)
  dot16.scale=0.1

  dot17 = createSprite(530,30,10,10)
  dot17.addImage(capsuleImg)
  dot17.scale=0.1

  dot18 = createSprite(560,30,10,10)
  dot18.addImage(capsuleImg)
  dot18.scale=0.1

  dot19 = createSprite(590,30,10,10)
  dot19.addImage(capsuleImg)
  dot19.scale=0.1

  dot20 = createSprite(620,30,10,10)
  dot20.addImage(capsuleImg)
  dot20.scale=0.1

  dot21 = createSprite(650,30,10,10)
  dot21.addImage(capsuleImg)
  dot21.scale=0.1

  dot22 = createSprite(680,30,10,10)
  dot22.addImage(capsuleImg)
  dot22.scale=0.1

  dot23 = createSprite(710,30,10,10)
  dot23.addImage(capsuleImg)
  dot23.scale=0.1

  dot25 = createSprite(740,30,10,10)
  dot25.addImage(capsuleImg)
  dot25.scale=0.1

  dot24 = createSprite(770,30,10,10)
  dot24.addImage(capsuleImg)
  dot24.scale=0.1

  dot26 = createSprite(800,30,10,10)
  dot26.addImage(capsuleImg)
  dot26.scale=0.1

  dot27 = createSprite(830,30,10,10)
  dot27.addImage(capsuleImg)
  dot27.scale=0.1

  dot28 = createSprite(860,30,10,10)
  dot28.addImage(capsuleImg)
  dot28.scale=0.1

  dot29 = createSprite(890,30,10,10)
  dot29.addImage(capsuleImg)
  dot29.scale=0.1
  
  dot30 = createSprite(920,30,10,10)
  dot30.addImage(capsuleImg)
  dot30.scale=0.1

  dot31 = createSprite(950,30,10,10)
  dot31.addImage(capsuleImg)
  dot31.scale=0.1

  dot32 = createSprite(20,30,10,10)
  dot32.addImage(capsuleImg)
  dot32.scale=0.1

  dot33 = createSprite(20,60,10,10)
  dot33.addImage(capsuleImg)
  dot33.scale=0.1
  dot34 = createSprite(20,90,10,10)
  dot34.addImage(capsuleImg)
  dot34.scale=0.1
  dot35 = createSprite(20,120,10,10)
  dot35.addImage(capsuleImg)
  dot35.scale=0.1
  dot37 = createSprite(20,150,10,10)
  dot37.addImage(capsuleImg)
  dot37.scale=0.1
  dot36 = createSprite(20,180,10,10)
  dot36.addImage(capsuleImg)
  dot36.scale=0.1

  dot38 = createSprite(20,210,10,10)
  dot38.addImage(capsuleImg)
  dot38.scale=0.1
  dot39 = createSprite(20,240,10,10)
  dot39.addImage(capsuleImg)
  dot39.scale=0.1
  dot40 = createSprite(20,270,10,10)
  dot40.addImage(capsuleImg)
  dot40.scale=0.1
  dot41 = createSprite(20,300,10,10)
  dot41.addImage(capsuleImg)
  dot41.scale=0.1
  dot42 = createSprite(20,330,10,10)
  dot42.addImage(capsuleImg)
  dot42.scale=0.1

  dot43 = createSprite(1070,60,10,10)
  dot43.addImage(capsuleImg)
  dot43.scale=0.1

  
  dot44 = createSprite(1070,90,10,10)
  dot44.addImage(capsuleImg)
  dot44.scale=0.1

  
  dot45 = createSprite(1070,120,10,10)
  dot45.addImage(capsuleImg)
  dot45.scale=0.1
  
  dot46 = createSprite(1070,150,10,10)
   dot46.addImage(capsuleImg)
  dot46.scale=0.1
  
  dot47 = createSprite(1070,180,10,10)
  dot47.addImage(capsuleImg)
  dot47.scale=0.1

  dot48 = createSprite(1070,210,10,10)
  dot48.addImage(capsuleImg)
  dot48.scale=0.1
  
  dot49 = createSprite(1070,240,10,10)
  dot49.addImage(capsuleImg)
  dot49.scale=0.1
  
  dot50 = createSprite(1070,270,10,10)
  dot50.addImage(capsuleImg)
  dot50.scale=0.1
  
  dot51 = createSprite(1070,300,10,10)
   dot51.addImage(capsuleImg)
  dot51.scale=0.1
  
  dot52 = createSprite(1070,330,10,10)
  dot52.addImage(capsuleImg)
  dot52.scale=0.1
  
  dot53 = createSprite(1070,360,10,10)
  dot53.addImage(capsuleImg)
  dot53.scale=0.1

  dot54 = createSprite(1070,390,10,10)
  dot54.addImage(capsuleImg)
  dot54.scale=0.1
  
  dot55 = createSprite(1070,420,10,10)
  dot55.addImage(capsuleImg)
  dot55.scale=0.1

  dot56 = createSprite(170,470,10,10)
  dot56.addImage(capsuleImg)
  dot56.scale=0.1;

  dot57 = createSprite(200,470,10,10)
  dot57.addImage(capsuleImg)
  dot57.scale=0.1;

  dot58 = createSprite(230,470,10,10)
  dot58.addImage(capsuleImg)
  dot58.scale=0.1;
 
  dot59 = createSprite(260,470,10,10)
  dot59.addImage(capsuleImg)
  dot59.scale=0.1;
  dot60 = createSprite(290,470,10,10)
  dot60.addImage(capsuleImg)
  dot60.scale=0.1;
  dot61 = createSprite(330,470,10,10)
  dot61.addImage(capsuleImg)
  dot61.scale=0.1;
  dot62 = createSprite(360,470,10,10)
  dot62.addImage(capsuleImg)
  dot62.scale=0.1;
  dot63 = createSprite(390,470,10,10)
  dot63.addImage(capsuleImg)
  dot63.scale=0.1;
  dot64 = createSprite(420,470,10,10)
  dot64.addImage(capsuleImg)
  dot64.scale=0.1;
  dot65 = createSprite(450,470,10,10)
  dot65.addImage(capsuleImg)
  dot65.scale=0.1;
  dot66 = createSprite(480,470,10,10)
  dot66.addImage(capsuleImg)
  dot66.scale=0.1;
  dot67 = createSprite(510,470,10,10)
  dot67.addImage(capsuleImg)
  dot67.scale=0.1;
  dot68 = createSprite(540,470,10,10)
  dot68.addImage(capsuleImg)
  dot68.scale=0.1;
  dot69 = createSprite(570,470,10,10)
  dot69.addImage(capsuleImg)
  dot69.scale=0.1;
  dot70 = createSprite(600,470,10,10)
  dot70.addImage(capsuleImg)
  dot70.scale=0.1;
  dot71 = createSprite(630,470,10,10)
  dot71.addImage(capsuleImg)
  dot71.scale=0.1;
  dot72 = createSprite(660,470,10,10)
  dot72.addImage(capsuleImg)
  dot72.scale=0.1;
  dot73 = createSprite(690,470,10,10)
  dot73.addImage(capsuleImg)
  dot73.scale=0.1;
  dot74 = createSprite(720,470,10,10)
  dot74.addImage(capsuleImg)
  dot74.scale=0.1;
  dot75 = createSprite(750,470,10,10)
  dot75.addImage(capsuleImg)
  dot75.scale=0.1;
  dot76 = createSprite(790,470,10,10)
  dot76.addImage(capsuleImg)
  dot76.scale=0.1;
  dot77 = createSprite(430,330,10,10)
  dot77.addImage(capsuleImg)
  dot77.scale=0.1
  dot78 = createSprite(820,470,10,10)
  dot78.addImage(capsuleImg)
  dot78.scale=0.1;
  dot79 = createSprite(850,470,10,10)
  dot79.addImage(capsuleImg)
  dot79.scale=0.1;
  dot80 = createSprite(880,470,10,10)
  dot80.addImage(capsuleImg)
  dot80.scale=0.1;
  dot81 = createSprite(910,470,10,10)
  dot81.addImage(capsuleImg)
  dot81.scale=0.1;
  dot82 = createSprite(940,470,10,10)
  dot82.addImage(capsuleImg)
  dot82.scale=0.1;
  dot83 = createSprite(970,470,10,10)
  dot83.addImage(capsuleImg)
  dot83.scale=0.1;
  dot84 = createSprite(1000,470,10,10)
  dot84.addImage(capsuleImg)
  dot84.scale=0.1;
  dot85 = createSprite(1030,470,10,10)
  dot85.addImage(capsuleImg)
  dot85.scale=0.1;
  dot86 = createSprite(520,320,10,10)
  dot86.addImage(capsuleImg)
  dot86.scale=0.1;
  dot87 = createSprite(560,320,10,10)
  dot87.addImage(capsuleImg)
  dot87.scale=0.1;
  dot88 = createSprite(600,320,10,10)
  dot88.addImage(capsuleImg)
  dot88.scale=0.1;
  dot89 = createSprite(640,320,10,10)
  dot89.addImage(capsuleImg)
  dot89.scale=0.1;
  dot90 = createSprite(680,320,10,10)
  dot90.addImage(capsuleImg)
  dot90.scale=0.1;
  dot91 = createSprite(720,320,10,10)
  dot91.addImage(capsuleImg)
  dot91.scale=0.1;
  dot92 = createSprite(760,320,10,10)
  dot92.addImage(capsuleImg)
  dot92.scale=0.1;
  dot93 = createSprite(900,280,10,10)
  dot93.addImage(capsuleImg)
  dot93.scale=0.1;
  dot94 = createSprite(940,280,10,10)
  dot94.addImage(capsuleImg)
  dot94.scale=0.1;
  dot95 = createSprite(980,280,10,10)
  dot95.addImage(capsuleImg)
  dot95.scale=0.1;
  dot96 = createSprite(100,280,10,10)
  dot96.addImage(capsuleImg)
  dot96.scale=0.1
  dot97 = createSprite(140,280,10,10)
  dot97.addImage(capsuleImg)
  dot97.scale=0.1
  dot98 = createSprite(180,280,10,10)
  dot98.addImage(capsuleImg)
  dot98.scale=0.1
  dot99 = createSprite(350,220,10,10)
  dot99.addImage(capsuleImg)
  dot99.scale=0.1
  dot100 = createSprite(390,220,10,10)
  dot100.addImage(capsuleImg)
  dot100.scale=0.1


  start = createSprite(900,180,10,10)
  start.addImage(startImg)
  start.scale=0.5


  dotGroup.add(dot1)
  dotGroup.add(dot2)
  dotGroup.add(dot3)
  dotGroup.add(dot4)
  dotGroup.add(dot9)
  dotGroup.add(dot5)
  dotGroup.add(dot6)
  dotGroup.add(dot7)
  dotGroup.add(dot8)
  dotGroup.add(dot10)
  dotGroup.add(dot11)
  dotGroup.add(dot12)
  dotGroup.add(dot13)
  dotGroup.add(dot14)
  dotGroup.add(dot15)
  dotGroup.add(dot16)
  dotGroup.add(dot17)
  dotGroup.add(dot18)
  dotGroup.add(dot19)
  dotGroup.add(dot20)
  dotGroup.add(dot21)
  dotGroup.add(dot22)
  dotGroup.add(dot23)
  dotGroup.add(dot24)
  dotGroup.add(dot25)
  dotGroup.add(dot26)
  dotGroup.add(dot27)
  dotGroup.add(dot28)
  dotGroup.add(dot29)
  dotGroup.add(dot30)
  dotGroup.add(dot31)
  dotGroup.add(dot32)
  dotGroup.add(dot33)
  dotGroup.add(dot34)
  dotGroup.add(dot35)
  dotGroup.add(dot36)
  dotGroup.add(dot37)
  dotGroup.add(dot38)
  dotGroup.add(dot39)
  dotGroup.add(dot40)
  dotGroup.add(dot41)
  dotGroup.add(dot42)
  dotGroup.add(dot43)
  dotGroup.add(dot44)
  dotGroup.add(dot45)
  dotGroup.add(dot46)
  dotGroup.add(dot47)
  dotGroup.add(dot48)
  dotGroup.add(dot49)
  dotGroup.add(dot50)
  dotGroup.add(dot51)
  dotGroup.add(dot52)
  dotGroup.add(dot53)
  dotGroup.add(dot54)
  dotGroup.add(dot55)
  dotGroup.add(dot56)
  dotGroup.add(dot57)
  dotGroup.add(dot58)
  dotGroup.add(dot59)
  dotGroup.add(dot60)
  dotGroup.add(dot61)
  dotGroup.add(dot62)
  dotGroup.add(dot63)
  dotGroup.add(dot64)
  dotGroup.add(dot65)
  dotGroup.add(dot66)
  dotGroup.add(dot67)
  dotGroup.add(dot68)
  dotGroup.add(dot69)
  dotGroup.add(dot70)
  dotGroup.add(dot71)
  dotGroup.add(dot72)
  dotGroup.add(dot73)
  dotGroup.add(dot74)
  dotGroup.add(dot75)
  dotGroup.add(dot76)
  dotGroup.add(dot77)
  dotGroup.add(dot78)
  dotGroup.add(dot79)
  dotGroup.add(dot80)
  dotGroup.add(dot81)
  dotGroup.add(dot82)
  dotGroup.add(dot83)
  dotGroup.add(dot84)
  dotGroup.add(dot85)
  dotGroup.add(dot86)
  dotGroup.add(dot87)
  dotGroup.add(dot88)
  dotGroup.add(dot89)
  dotGroup.add(dot90)
  dotGroup.add(dot91)
  dotGroup.add(dot92)
  dotGroup.add(dot93)
  dotGroup.add(dot94)
  dotGroup.add(dot95)
  dotGroup.add(dot96)
  dotGroup.add(dot97)
  dotGroup.add(dot98)
  dotGroup.add(dot99)
  dotGroup.add(dot100)

  


  

  



}
function draw(){
  
 // background(bgImg)
  //mazeGroup.setVisibleEach(false);
  
  //if(mousePressedOver(start)){
    background(bgImg)
    dotGroup.setVisibleEach(false)
    mazeGroup.setVisibleEach(false)
    wallGroup.setVisibleEach(false)
    man.visible=false;
    virus1.visible=false;
    virus2.visible=false;
    virus3.visible=false;
    virus4.visible=false;
    start.visible=true;
    house.visible=false;
    hw1.visible=false;
    hw2.visible=false;
    hw3.visible=false;
    hw4.visible=false;
    hw5.visible=false;
    
    if(mousePressedOver(start)){
      gameState="play"
      
    }
    if(gameState==="play"){
      playS()
    }

    //gameState="play"
  //}

  drawSprites()
  mazeGroup.setColorEach("blue")
  //if(gameState==="play"){
   // mazeGroup.setVisibleEach(true);
    
 

  wallGroup.setColorEach("golden")
 
 
  

  if(keyDown("up")){
    man.y= man.y-2;
    man.rotation=360
  }
  if(keyDown("down")){
    man.y= man.y+2;
  }
  if(keyDown("right")){
    man.x= man.x+2;
  }
  if(keyDown("left")){
    man.x= man.x-2;
  }
  medicineCleaner()
  virusFunc()
  livesF()
  
 lifeLooser()
 bounceBack()
 if(gameState==="end"){
   endS()
 }
//}
  

}
function medicineCleaner(){
 
  if(man.isTouching(dot1)){
    dot1.destroy()
    score+=1;
  }
  if(man.isTouching(dot2)){
    dot2.destroy()
    score+=1;
  }
  if(man.isTouching(dot3)){
    dot3.destroy()
    score+=1;
  }
  if(man.isTouching(dot4)){
    dot4.destroy()
    score+=1;
  }
  if(man.isTouching(dot5)){
    dot5.destroy()
    score+=1;
  }
  if(man.isTouching(dot6)){
    dot6.destroy()
    score+=1;
  }
  if(man.isTouching(dot7)){
    dot7.destroy()
    score+=1;
  }
  if(man.isTouching(dot8)){
    dot8.destroy()
    score+=1;
  }
 
  if(man.isTouching(dot1)){
    dot1.destroy()
    score+=1;
  }
  if(man.isTouching(dot10)){
    dot10.destroy()
    score+=1;
  }
  if(man.isTouching(dot11)){
    dot11.destroy()
    score+=1;
  }
  if(man.isTouching(dot12)){
    dot12.destroy()
    score+=1;
  }
  if(man.isTouching(dot13)){
    dot13.destroy()
    score+=1;
  }
  if(man.isTouching(dot14)){
    dot14.destroy()
    score+=1;
  }
  if(man.isTouching(dot15)){
    dot15.destroy()
    score+=1;
  }
  if(man.isTouching(dot16)){
    dot16.destroy()
    score+=1;
  }
  if(man.isTouching(dot17)){
    dot17.destroy()
    score+=1;
  }
  if(man.isTouching(dot18)){
    dot18.destroy()
    score+=1;
  }
  if(man.isTouching(dot19)){
    dot19.destroy()
    score+=1;
  }
  if(man.isTouching(dot20)){
    dot20.destroy()
    score+=1;
  }
  if(man.isTouching(dot21)){
    dot21.destroy()
    score+=1;
  }
  if(man.isTouching(dot22)){
    dot22.destroy()
    score+=1;
  }
  if(man.isTouching(dot23)){
    dot23.destroy()
    score+=1;
  }
  if(man.isTouching(dot24)){
    dot24.destroy()
    score+=1;
  }
  if(man.isTouching(dot25)){
    dot25.destroy()
    score+=1;
  }
  if(man.isTouching(dot26)){
    dot26.destroy()
    score+=1;
  }
  if(man.isTouching(dot27)){
    dot27.destroy()
    score+=1;
  }
  if(man.isTouching(dot28)){
    dot28.destroy()
    score+=1;
  }
  if(man.isTouching(dot29)){
    dot29.destroy()
    score+=1;
  }
  if(man.isTouching(dot30)){
    dot30.destroy()
    score+=1;
  }
  if(man.isTouching(dot31)){
    dot31.destroy()
    score+=1;
  }
  if(man.isTouching(dot32)){
    dot32.destroy()
    score+=1;
  }
  if(man.isTouching(dot33)){
    dot33.destroy()
    score+=1;
  }
  if(man.isTouching(dot34)){
    dot34.destroy()
    score+=1;
  }
  if(man.isTouching(dot35)){
    dot35.destroy()
    score+=1;
  }
  if(man.isTouching(dot36)){
    dot36.destroy()
    score+=1;
  }
  if(man.isTouching(dot37)){
    dot37.destroy()
    score+=1;
  }
  
  if(man.isTouching(dot38)){
    dot38.destroy()
    score+=1;
  }
  if(man.isTouching(dot39)){
    dot39.destroy()
    score+=1;
  }
  if(man.isTouching(dot40)){
    dot40.destroy()
    score+=1;
  }
  if(man.isTouching(dot41)){
    dot41.destroy()
    score+=1;
  }
  if(man.isTouching(dot42)){
    dot42.destroy()
    score+=1;
  }
  if(man.isTouching(dot43)){
    dot43.destroy()
    score+=1;
  }
  if(man.isTouching(dot44)){
    dot44.destroy()
    score+=1;
  }
  if(man.isTouching(dot45)){
    dot45.destroy()
    score+=1;
  } if(man.isTouching(dot46)){
    dot46.destroy()
    score+=1;
  }
  if(man.isTouching(dot47)){
    dot47.destroy()
    score+=1;
  }
  if(man.isTouching(dot48)){
    dot48.destroy()
    score+=1;
  }
  if(man.isTouching(dot49)){
    dot49.destroy()
    score+=1;
  }
  if(man.isTouching(dot50)){
    dot50.destroy()
    score+=1;
  }
  if(man.isTouching(dot51)){
    dot51.destroy()
    score+=1;
  }
  
  if(man.isTouching(dot52)){
    dot52.destroy()
    score+=1;
  }
  if(man.isTouching(dot53)){
    dot53.destroy()
    score+=1;
  }
  if(man.isTouching(dot54)){
    dot54.destroy()
    score+=1;
  }
  if(man.isTouching(dot55)){
    dot55.destroy()
    score+=1;
  }
  if(man.isTouching(dot56)){
    dot56.destroy()
    score+=1;
  }
  if(man.isTouching(dot57)){
    dot57.destroy()
    score+=1;
  }
  if(man.isTouching(dot58)){
    dot58.destroy()
    score+=1;
  }
  if(man.isTouching(dot59)){
    dot59.destroy()
    score+=1;
  }
  if(man.isTouching(dot60)){
    dot60.destroy()
    score+=1;
  }
  if(man.isTouching(dot61)){
    dot61.destroy()
    score+=1;
  }
  if(man.isTouching(dot62)){
    dot62.destroy()
    score+=1;
  }
  if(man.isTouching(dot63)){
    dot63.destroy()
    score+=1;
  }
  if(man.isTouching(dot64)){
    dot64.destroy()
    score+=1;
  }
  if(man.isTouching(dot65)){
    dot65.destroy()
    score+=1;
  }
  if(man.isTouching(dot66)){
    dot66.destroy()
    score+=1;
  }
  if(man.isTouching(dot67)){
    dot67.destroy()
    score+=1;
  }
  if(man.isTouching(dot68)){
    dot68.destroy()
    score+=1;
  }
  if(man.isTouching(dot69)){
    dot69.destroy()
    score+=1;
  }
  if(man.isTouching(dot70)){
    dot70.destroy()
    score+=1;
  }
  if(man.isTouching(dot71)){
    dot71.destroy()
    score+=1;
  }
  if(man.isTouching(dot72)){
    dot72.destroy()
    score+=1;
  }
  if(man.isTouching(dot73)){
    dot73.destroy()
    score+=1;
  }
  if(man.isTouching(dot74)){
    dot74.destroy()
    score+=1;
  }
  if(man.isTouching(dot75)){
    dot75.destroy()
    score+=1;
  }
  if(man.isTouching(dot76)){
    dot76.destroy()
    score+=1;
  }  if(man.isTouching(dot77)){
    dot77.destroy()
    score+=1;
  }
  if(man.isTouching(dot78)){
    dot78.destroy()
    score+=1;
  }
  if(man.isTouching(dot79)){
    dot79.destroy()
    score+=1;
  }
  if(man.isTouching(dot80)){
    dot80.destroy()
    score+=1;
  }
  if(man.isTouching(dot81)){
    dot81.destroy()
    score+=1;
  }
  if(man.isTouching(dot80)){
    dot80.destroy()
    score+=1;
  }
  if(man.isTouching(dot81)){
    dot81.destroy()
    score+=1;
  }
  if(man.isTouching(dot82)){
    dot82.destroy()
    score+=1;
  }
  if(man.isTouching(dot83)){
    dot83.destroy()
    score+=1;
  }
  if(man.isTouching(dot84)){
    dot84.destroy()
    score+=1;
  }
  if(man.isTouching(dot85)){
    dot85.destroy()
    score+=1;
  }
  if(man.isTouching(dot86)){
    dot86.destroy()
    score+=1;
  }
  if(man.isTouching(dot87)){
    dot87.destroy()
    score+=1;
  }
  if(man.isTouching(dot88)){
    dot88.destroy()
    score+=1;
  }
  if(man.isTouching(dot89)){
    dot89.destroy()
    score+=1;
  }
  if(man.isTouching(dot90)){
    dot90.destroy()
    score+=1;
  }
  if(man.isTouching(dot91)){
    dot91.destroy()
    score+=1;
  }
  if(man.isTouching(dot92)){
    dot92.destroy()
    score+=1;
  }
  if(man.isTouching(dot93)){
    dot93.destroy()
    score+=1;
  }
  if(man.isTouching(dot94)){
    dot94.destroy()
    score+=1;
  }
  if(man.isTouching(dot95)){
    dot95.destroy()
    score+=1;
  }
  if(man.isTouching(dot96)){
    dot96.destroy()
    score+=1;
  }
  if(man.isTouching(dot97)){
    dot97.destroy()
    score+=1;
  }
  if(man.isTouching(dot98)){
    dot98.destroy()
    score+=1;
  }
  if(man.isTouching(dot99)){
    dot99.destroy()
    score+=1;
  }
  if(man.isTouching(dot100)){
    dot100.destroy()
    score+=1;
  }
  
}
  function virusFunc(){
    if(virus1.isTouching(maze3)){
      virus1.velocityX=-2;

    }

    if(virus1.isTouching(maze2)){
      virus1.velocityY=-2;

      

    }

    if(virus2.isTouching(maze1)){
      virus2.velocityX=-2;


    }
    if(virus2.isTouching(maze4)){
      virus2.velocityY=2;


    }
    if(virus3.isTouching(maze2)){
      virus3.velocityX=2;


    }
    if(virus3.isTouching(maze1)){
      virus3.velocityY=-2;


    }
    if(virus4.isTouching(maze4)){
      virus4.velocityX=-2;


    }
    if(virus4.isTouching(maze3)){
      virus4.velocityY=2;
    }


    }
    

  
  function livesF(){
    if(lives===2){
      live1.visible=false;
    }
    if(lives===1){
      live2.visible=false;
    }
    if(lives===0){
      live3.visible=false;
      mazeGroup.setVisibleEach(false)
      gameState="end"
      
    }
  }
    function bounceBack(){
      virus1.bounceOff(mazeGroup)
      virus2.bounceOff(mazeGroup)
      virus3.bounceOff(mazeGroup)
      virus4.bounceOff(mazeGroup)
      man.bounceOff(mazeGroup)

      virus1.bounceOff(wallGroup)
      virus2.bounceOff(wallGroup)
      virus3.bounceOff(wallGroup)
      virus4.bounceOff(wallGroup)
      man.bounceOff(wallGroup)
      virus1.bounceOff(virus2)
      virus2.bounceOff(virus3)
      virus3.bounceOff(virus4)
      virus4.bounceOff(virus1)
      virus1.bounceOff(virus3)
      virus1.bounceOff(virus4)
      virus2.bounceOff(virus4)
      




    }

  
  function lifeLooser(){
    if(man.isTouching(virus1)){
      lives=lives-1;
      man.x=50
      man.y=440;
      
    }
    if(man.isTouching(virus2)){
      lives=lives-1;
      man.x=50
      man.y=440;
      
    }
    if(man.isTouching(virus3)){
      lives=lives-1;
      man.x=50
      man.y=440;
      
    }
    if(man.isTouching(virus4)){
      lives=lives-1;
      man.x=50
      man.y=440;
      
    }
  }
  function playS(){
  
  background("black")
    dotGroup.setVisibleEach(true)
    mazeGroup.setVisibleEach(true)
    wallGroup.setVisibleEach(true)
    man.visible=true;
    house.visible=true;
    start.visible=false;
    virus1.visible=true;
    virus2.visible=true;
    virus3.visible=true;
    virus4.visible=true;
    hw1.visible=true;
    hw2.visible=true;
    hw3.visible=true;
    hw4.visible=true;
    hw5.visible=true;
    textSize(20)
    stroke("yellow")
    text(" "+score,1050,480)
    
  }
    function endS(){
      background("black")
      dotGroup.setVisibleEach(false)
      mazeGroup.setVisibleEach(false)
      wallGroup.setVisibleEach(false)
      man.visible=false;
      virus1.visible=false;
      virus2.visible=false;
      virus3.visible=false;
      virus4.visible=false;
      textSize(20)
      stroke("blue")
      text("Thanks for playing!!!!",200,70)
      textSize(50)
      stroke("yellow")
      text("You Scored "+score,400,250)
  }
function spawn(){
  
}


