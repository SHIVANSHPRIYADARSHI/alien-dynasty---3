var gameState = "wait"
var bgimg, splashscreen, playbutton, howbutton
var playimg,level1img,leftwall,rightwall



function preload() {

    bgimg = loadImage("assets/alienDynasty.gif")
level1img=loadImage("assets/level1bg.jpeg")
platform1img=loadImage("assets/platform.png")
platform2img=loadImage("assets/platform_2.png")
enemy1=loadImage("assets/enemy1-unscreen.gif")
enemy2=loadImage("assets/enemy2-unscreen.gif")
enemy3=loadImage("assets/enemy3-unscreen.gif")
enemy4=loadImage("assets/enemy4-unscreen.gif")
enemy5=loadImage("assets/enemy-5-unscreen.gif")
aestronaut=loadImage("assets/aestronautAlien-removebg-preview.png")
gameOverImg=loadImage("assets/gameover.jpg")
popUpImg=loadImage("assets/AboutGame.png")

bgmusic=loadSound("assets/bgMusic.mp3")
coinCollecting=loadSound("assets/coincollectsound.mp3")
jumpSound=loadSound("assets/jump.mp3")
gameOverSound=loadSound("assets/gameoversound.mp3")
}


function setup() {
    createCanvas(windowWidth, windowHeight)

    playbutton = createImg("assets/play_btn.png")
    playbutton.position(width / 2 - 250, height - 145)
    playbutton.size(160, 150)

    playbutton.hide()


   soundbutton = createImg("assets/sound_btn.png")
   soundbutton.position(width / 2 + 80, height - 150)
   soundbutton.size(150, 150)
   soundbutton.hide()


  mutebutton = createImg("assets/mute.png")
  mutebutton.position(width / 2 + 70, height - 150)
  mutebutton.size(165, 150)
  mutebutton.hide()


  level1popbutton=createImg("assets/AboutGame.png")
  level1popbutton.position(width/4,height/4)
  level1popbutton.size(1000,500)
  level1popbutton.hide()


  invisibleground=createSprite(width/2,height-50,width,10)
 invisibleground.visible=false

 leftwall=createSprite(width/2-width/4,height/2,10,height)
 leftwall.visible=false

 rightwall=createSprite(width-width/4,height/2,10,height)
 rightwall.visible=false


}


function draw() {

if(gameState==="wait"){

    background(bgimg)
    playbutton.show()
    soundbutton.show()
    invisibleground.visible=false
    leftwall.visible=false
    rightwall.visible=false



}


playbutton.mousePressed(()=>{
    gameState="play"
    playbutton.hide()
    soundbutton.show()

})


if(gameState==="play"){
background(level1img)
soundbutton.position(0,0)
mutebutton.position(0,0)
level1popbutton.show()

playbutton.hide()
}

soundbutton.mousePressed(()=>{
    soundbutton.hide()
    mutebutton.show()
})
mutebutton.mousePressed(()=>{
    soundbutton.show()
    mutebutton.hide()
})

level1popbutton.mousePressed(()=>{
  gameState="level1"  
  level1popbutton.hide()
})


if(gameState==="level1"){
    level1popbutton.hide()
PLAYLEVEL1()
if(platform1.isTouching(leftwall)){
    platform1.velocityX=2
}

else if(platform1.isTouching(rightwall)){
    platform1.velocityX=-2
}
}

drawSprites()

}



function PLAYLEVEL1(){
    invisibleground.visible=true
    // leftwall.visible=true
    // rightwall.visible=true

    platform1= createSprite(width/4,height-120)
platform1.addImage(platform1img)


    platform2= createSprite(width/6,height/2)
platform2.addImage(platform2img)


platform3= createSprite(width/2.5,height/2)
platform3.addImage(platform1img)


platform4= createSprite(width-width/4,height/2)
platform4.addImage(platform2img)

// platform1.velocityX=2


}



























