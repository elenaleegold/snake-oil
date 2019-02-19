var bg, playOn, sc;
var objHolder;
var objHolder2;
var textHolder2;
var textHolder;
var audHolder;
var audHolder2;
var reelHolder;
var audSprite;
var font;
var fontSize = 20;
var plasticOn, mushroomOn, dishOn, dropperOn, kettleOn;
var invTxt;
var firstRoom; 
var secondRoom;
var invFull;
var endAudioBool;
var fadeTo;
var fadeSeq;
var endSeq;
var startScreen;
var canvas;

function preload(){
fadeTo = 0;
objHolder = [];
textHolder = [];
objHolder2 = [];
textHolder2 = [];
audHolder = [];
audHolder2 = [];
invTxt = [];
font = loadFont('data/Slabo27px-Regular.ttf');
bg = loadImage("kitchen.png");
sc = loadImage("startScreen.png");
lv = loadImage("livingRoom.png");
audGifbg = loadImage("audGif_bg.png");
inventory = loadImage("inventory.png");
//0
stickJarImg = loadImage("stickJar.png");
stickJar = createSprite(735,470,79, 136);
stickJar.addImage(stickJarImg);
objHolder[0] = stickJar;
textHolder[0] = "A brightly colored vase filled with dried sticks of some kind.";
//1
bookImg = loadImage("book.png");
book = createSprite(165,740,152, 85);
book.addImage(bookImg);
objHolder[1] = book;
textHolder[1] = "A diary flipped open to an entry stained with water droplets. The handwritting is barely legible.";
//2
buttonImg = loadImage("button.png");
button = createSprite(820,400,34, 38);
button.addImage(buttonImg);
objHolder[2] = button;
textHolder[2] = "The magnet reads \"The Township of Merril\".";
//3
calendarImg = loadImage("calendar.png");
calendar = createSprite(75,275,120, 249);
calendar.addImage(calendarImg);
objHolder[3] = calendar;
textHolder[3] = "A calendar featuring a bright, red, bird. \n Dates are crossed out with names written under them such as Diane, Ed, and Lydia.";
//4
cookiesImg = loadImage("cookies.png");
cookies = createSprite(70,775,196, 127);
cookies.addImage(cookiesImg);
objHolder[4] = cookies;
textHolder[4] = "A very stale tray of sugar cookies. Someone took a bite but didn't finish the cookie.";
//5
dropperBottlesImg = loadImage("dropperBottles.png");
dropperBottles = createSprite(685,530,81, 47);
dropperBottles.addImage(dropperBottlesImg);
objHolder[5] = dropperBottles;
textHolder[5] = "A set of dropper bottles containing liquids of some kind.";
//6
mushroomJarImg = loadImage("mushroomJar.png");
mushroomJar = createSprite(810,520,73, 104);
mushroomJar.addImage(mushroomJarImg);
objHolder[6] = mushroomJar;
textHolder[6] = "A jar containing mushrooms steeped in a viscous liquid.";
//7
oliveOilImg = loadImage("oliveOil.png");
oliveOil = createSprite(820,152,50, 104);
oliveOil.addImage(oliveOilImg);
objHolder[7] = oliveOil;
textHolder[7] = "A big bottle of olive oil.";
//8
photosImg = loadImage("photos.png");
photos = createSprite(900,370,148, 200);
photos.addImage(photosImg);
objHolder[8] = photos;
textHolder[8] = "Photos of dead animals:\n The top is a squirrel in the woods and the bottom shows three dead possums in a row.";
//9
plasticBagImg = loadImage("plasticBag.png");
plasticBag = createSprite(910,170,86, 63);
plasticBag.addImage(plasticBagImg);
objHolder[9] = plasticBag;
textHolder[9] = "A bag containing herbs of some kind.";
//10
sprigsImg = loadImage("sprigs.png");
sprigs = createSprite(325,170,363, 157);
sprigs.addImage(sprigsImg);
objHolder[10] = sprigs;
textHolder[10] = "Sprigs of herbs hung up to dry.";
//11
dirtyDishesImg = loadImage("dirtyDishes.png");
dirtyDishes = createSprite(458,630,363, 157);
dirtyDishes.addImage(dirtyDishesImg);
objHolder[11] = dirtyDishes;
textHolder[11] = "Dirty dishes are piled high in a sink filled with sudsy water.";
//12
kettleImg = loadImage("kettle.png");
kettle = createSprite(40,650,363, 157);
kettle.addImage(kettleImg);
objHolder[12] = kettle;
textHolder[12] = "A kettle filled with hot water boiled not too long ago.";

curSong = loadSound('data/audio1.m4a');
endSong = loadSound('data/audio_2_4.m4a');
ambientSound = loadSound('data/ambience.wav');
kitchenSound = loadSound('data/kitchenMoving.wav');
fridgeBuzz = loadSound('data/fridgeBuzz2.mp4');
doorKnock = loadSound('data/knock.wav');

//Living Room

//0
noteImg = loadImage("note.png");
note = createSprite(745,700,79, 136);
note.addImage(noteImg);
objHolder2[0] = note;
textHolder2[0] = "A folded up note. It reads \"Already feeling better this morning! Thank you.\n Would you mind keeping this between us? -Lydia \"";
//1
frameImg = loadImage("frame.png");
frame = createSprite(450,300,152, 85);
frame.addImage(frameImg);
objHolder2[1] = frame;
textHolder2[1] = "A creepy painting on the wall.";
//2
knobImg = loadImage("knob.png");
knob = createSprite(910,400,34, 38);
knob.addImage(knobImg);
objHolder2[2] = knob;
textHolder2[2] = "Are you done here yet?";
//3
teasaucerImg = loadImage("teasaucer.png");
teasaucer = createSprite(380,720,120, 249);
teasaucer.addImage(teasaucerImg);
objHolder2[3] = teasaucer;
textHolder2[3] = "An old cup of tea. It's empty now.";
//4
hairImg = loadImage("hair.png");
hair = createSprite(770,675,196, 127);
hair.addImage(hairImg);
objHolder2[4] = hair;
textHolder2[4] = "A strand of copper hair.";






audSprite = createSprite(85, 45, 181, 99);
// for(var i = 0; i < 61; i++){
//   if(i < 10){
//     reelHolder[i] = loadImage("reel/reel" + "000" + i + ".png");
//   }
//   else{
//     reelHolder[i] = loadImage("reel/reel" + "00" + i + ".png");
//   }
// }
//0 
mushroomIcon = createSprite(1070,770,363,157);
mushroomIcon.addImage(mushroomJarImg);
//1
plasticIcon = createSprite(980,770,363,157);
plasticIcon.addImage(plasticBagImg);
//2
teacup = loadImage("teacup.png");
dishIcon = createSprite(900,770,363,157);
dishIcon.addImage(teacup);
//3
dropperBottleImg = loadImage("dropperBottle.png");
dropper = createSprite(810,770,363,157);
dropper.addImage(dropperBottlesImg);
//4
kettleIcon = createSprite(725,765,363,157);
kettleIcon.addImage(kettleImg);

invTxt[0] = "You've plucked three mushrooms from the jar.";
invTxt[1] = "You've taken a sprinkling of dried lavender. It's incredibly fragrant.";
invTxt[2] = "You now have a bright teacup.";
invTxt[3] = "You've taken all four bottles of tincture, just to be safe.";
invTxt[4] = "You've collected the kettle, complete with hot water.";


// set up arrows

arrowRightImg = loadImage("arrowRight.png");
arrowRight = createSprite(1060,50,363,157);
arrowRight.addImage(arrowRightImg);

arrowLeftImg = loadImage("arrowLeft.png");
arrowLeft = createSprite(60,150,363,157);
arrowLeft.addImage(arrowLeftImg);


//set up audio
  for(var i = 0; i < objHolder.length; i++){
    if(i!= 0 && i!=7 && i!=2 && i!=9 && i < 9){
      audHolder[i] = loadSound('data/audio' + i + '.m4a');
     }
  }

  for(var i = 0; i < objHolder2.length; i++){
    if(i!=1){
      audHolder2[i] = loadSound('data/audio_2_' + i + '.m4a');
    }
  }
}
function setup() {
  secondRoom = false;
  firstRoom = false;
  startScreen = true;
  invFull = false;
  endAudioBool = false;
  fadeSeq = false;
  endSeq = 0;
  w = window.innerWidth;
  h = window.innerHeight;
  canvas = createCanvas(w, h);
  canvas.parent('sketch-holder');
  audAnim = loadAnimation('reel/reel0001.png','reel/reel0060.png'); 
  audSprite.addAnimation('audSprite', audAnim);
  textFont(font);
  textSize(fontSize);
  textAlign(CENTER);
  ambientSound.loop();
  ambientSound.setVolume(0.3);

  kitchenSound.loop();
  kitchenSound.setVolume(0.03);

  fridgeBuzz.loop();
  fridgeBuzz.setVolume(0.1);

  curSong.setVolume(1);

  mushroomIcon.scale = 0.65;
  plasticIcon.scale = 0.75;
  dishIcon.scale = 0.90;
  kettleIcon.scale = 0.55;
  dropper.scale = 0.75;

}

function draw() { 
  curSong.setVolume(1);

  if(startScreen == true){
    image(sc,0,0);
    if(mouseIsPressed == true){
      startScreen = false;
      firstRoom = true;
    }
  }
  else if(firstRoom == true){
      fridgeBuzz.setVolume(0.1);
      kitchenSound.setVolume(0.03);
      image(bg, 0, 0);
      drawSprite(arrowRight);
      arrowRight.mouseActive = true;
      if(arrowRight.mouseIsOver == true){
        arrowRight.scale = 0.9;
      }
      else{
        arrowRight.scale = 0.8;
      }

      if(arrowRight.mouseIsPressed == true){
        firstRoom = false;
        secondRoom = true;
      }
      for(var i = 0; i < objHolder.length; i++){
      drawSprite(objHolder[i]);
      objHolder[i].mouseActive = true;
        if (objHolder[i].mouseIsOver == true){
          text(textHolder[i], w/2.5 - (0.05 * mouseX), 40);
          objHolder[i].scale = 1.08;

          if(i == 6 && mushroomOn == true){
            text(invTxt[0], w/2.5 - (0.05 * mouseX), 70);
        
          }
          if(i == 9 && plasticOn == true){
                text(invTxt[1], w/2.5 - (0.05 * mouseX), 70);
          }
          if(i == 11 && dishOn == true){
                text(invTxt[2], w/2.5 - (0.05 * mouseX), 70);
          }
          if(i == 5 && dropperOn == true){
                text(invTxt[3], w/2.5 - (0.05 * mouseX), 70);          
          }
          if(i == 12 && kettleOn == true){
                text(invTxt[4], w/2.5 - (0.05 * mouseX), 70);           
          }


        }
        else{
          objHolder[i].scale = 1;
        }
        if (objHolder[i].mouseIsPressed == true){
          if(i!= 0 && i!=7 && i!=2 && i!=9 && i < 9){
            curSong.stop();
            curSong = audHolder[i];
            curSong.play();
            playOn = true;
            curSong.onended(turnOff);
          }
          if(i == 6){
              mushroomOn = true;
          }
          else if(i==9){
              plasticOn = true;
          }
          else if(i==11){
                dishOn = true;
          }
          else if(i==5){
                dropperOn = true;
          }
          else if(i==12){
                kettleOn = true;
          }
        }
      }
  }
  else if (secondRoom == true){
      fridgeBuzz.setVolume(0.002);
      kitchenSound.setVolume(0.02);
      image(lv,0,0);
      drawSprite(arrowLeft);
      arrowLeft.mouseActive = true;
      if(arrowLeft.mouseIsOver == true){
        arrowLeft.scale = 0.9;
      }
      else{
        arrowLeft.scale = 0.8;
      }

      if(arrowLeft.mouseIsPressed == true){
        firstRoom = true;
        secondRoom = false;
      }

      for(var i = 0; i < objHolder2.length; i++){
      drawSprite(objHolder2[i]);
      objHolder2[i].mouseActive = true;
        if (objHolder2[i].mouseIsOver == true){
          text(textHolder2[i], w/2.5 - (0.05 * mouseX), 40);
          objHolder2[i].scale = 1.08;
        }
        else{
          objHolder2[i].scale = 1;
        }

      if (objHolder2[i].mouseIsPressed == true){
          if(i!= 2 && i!=1){
            curSong.stop();
            curSong = audHolder2[i];
            curSong.play();
            playOn = true;
            curSong.onended(turnOff);
          }
          else if (i == 2 && invFull == false){
            textHolder2[2] = "You're not quite ready to leave."
          }
          else if (i == 2 && invFull == true){
            textHolder2[2] = "Are you sure you're ready? Press any key to unlock the door."
            curSong.stop();
            endSeq++;
            endSong = audHolder2[2];
            endSong.onended(endSequence);
            if(endAudioBool == true){
              textHolder2[2] = "";
            }
          }
        }
      }
    }


  if(playOn == true && curSong.isPlaying()){
    image(audGifbg,0,0);
    audSprite.visible = true;
    text("Click to Stop Audio", 85, 110);
    audSprite.mouseActive = true;
    if(audSprite.mouseIsPressed == true){
      curSong.stop();
      playOn = false;
    }
    drawSprite(audSprite);
    audSprite.position.x = 85;
    audSprite.position.y = 45;
  }
  else{
  }

  if(fadeSeq == true && secondRoom == true){
    fadeTo+=0.1;
    fill(0,0,0,fadeTo);
    rect(0,0,w,h);
    console.log(fadeTo);
    arrowLeft.visible = false;
    if(fadeTo > 250){
      fontSize = 125;
      fill(255);
      textFont(font);
      textSize(fontSize);
      textAlign(CENTER);
      text("THE\n END.",w/2.5, h/2-100);
    }
    textHolder2[2] = "";
    for(var i = 0; i < objHolder2.length; i++){
    objHolder2[i].mouseActive = false;
    }
  }
  else{
        if(startScreen == true){

        }
        else{
        image(inventory, 680, 700);
        checkInv();
        }
  }
}

function checkInv(){
      if(mushroomOn == true && plasticOn == true && dishOn == true && dropperOn == true && kettleOn == true){
        invFull = true;
      }
      if(mushroomOn == true){
          drawSprite(mushroomIcon);
          mushroomIcon.mouseActive = true;
          if(mushroomIcon.mouseIsOver == true)
          {
             text(invTxt[0], w/2.5- (0.05 * mouseX), 40);
            mushroomIcon.scale = 0.7;
          }
          else{
            mushroomIcon.scale = 0.65;
          }
      }
      if(plasticOn == true){
          drawSprite(plasticIcon);
           plasticIcon.mouseActive = true;
          if(plasticIcon.mouseIsOver == true)
          {
            text(invTxt[1], w/2.5 - (0.05 * mouseX), 40);
            plasticIcon.scale = 0.8;
          }
          else{
            plasticIcon.scale = 0.75;
          }
      }
      if(dishOn == true){
            drawSprite(dishIcon);
           dishIcon.mouseActive = true;
          if(dishIcon.mouseIsOver == true)
          {
            text(invTxt[2], w/2.5 - (0.05 * mouseX), 40);
            dishIcon.scale = 1;
          }
          else{
            dishIcon.scale = 0.9;
          }
      }
      if(dropperOn == true){
            drawSprite(dropper);
           dropper.mouseActive = true;
          if(dropper.mouseIsOver == true)
          {
            text(invTxt[3], w/2.5 - (0.05 * mouseX), 40);
            dropper.scale = 0.8;
          }
          else{
            dropper.scale = 0.75;
          }            
      }
      if(kettleOn == true){
            drawSprite(kettleIcon);
            kettleIcon.mouseActive = true;
          if(kettleIcon.mouseIsOver == true)
          {
            text(invTxt[4], w/2.5 - (0.05 * mouseX), 40);
            kettleIcon.scale = 0.6;
          }
          else{
            kettleIcon.scale = 0.55;
          }            
      }
}


function keyPressed(){
  if(invFull == true){
    endAudioBool = true;
    fadeSeq = true;
    if(endSong.isPlaying() == false){
      endSong.play();
    }
  }
}


function turnOff() {
      console.log("ended!");
      audSprite.visible = false;
      audGifbg.x = -200;
      audGifbg.y = -200;
      playOn = false;
}

function endSequence(){
  doorKnock.play();
}