const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

/* General Variables */ var i, Timerr, gameState, StartButton;
/* General Variables Image */ var StartButtonI;

/* Platforms */ var SmallGrassPlatform, MediumGrassPlatform, LargeGrassPlatform;
/* Platforms Image */ var SmallGrassPlatformI, MediumGrassPlatformI, LargeGrassPlatformI;

/* Loading Screens */ var GrassMenu, GrassLevelsMenu, LockedLevel;
/* Loading Screens Image */ var GrassMenuI, GrassLevelsMenuI, LockedLevelI;

//G = Grayed Out
/* Levels */ var Level1, level2G, Level2;
/* Levels Image */ var Level1I, Level2GI, Level2I;

/* Backgrounds */ var CityBackground;
/* Background Images */ var CityBackgroundI;

/*Characters*/ var BoyCharacter;
/*Characters Image*/ var BoyCharacterI;



function preload(){
    // Platforms
    SmallGrassPlatformI = loadImage("Textures/Platforms/Grass/SmallGrassPlatform.png");
    MediumGrassPlatformI = loadImage("Textures/Platforms/Grass/MediumGrassPlatform.png");
    LargeGrassPlatformI = loadImage("Textures/Platforms/Grass/LongGrassPlatform.png");

    //Menus
    GrassMenuI = loadImage("Textures/Menus/GrassStartMenu.png");
    GrassLevelsMenuI = loadImage("Textures/Menus/GrassLevelsMenu.png");
    LockedLevelI = loadImage("Textures/Menus/GLU.png");

    //Levels
    Level1I = loadImage("Textures/Menus/L1.png");
    Level2GI = loadImage("Textures/Menus/L2G.png");
    Level2I = loadImage("Textures/Menus/L2.png");

    //Backgrounds
    CityBackgroundI = loadImage("Textures/Backgrounds/CityBackground.png");

    //General Stuff
    StartButtonI = loadImage("Textures/Menus/Start.png");
}

function setup(){
    createCanvas(displayWidth, displayHeight);

    gameState = "LoadingScreen";

    CityBackground = createSprite(10800,displayHeight/2);
    CityBackground.addImage("labless",CityBackgroundI);
    CityBackground.visible = false;

    StartButton = createSprite(displayWidth/2, displayHeight/2+180);
    StartButton.addImage(StartButtonI);
    StartButton.visible = false;

    GrassLevelsMenu = createSprite(displayWidth/2, displayHeight/2);
    GrassLevelsMenu.addImage(GrassLevelsMenuI);
    GrassLevelsMenu.visible = false;

    LockedLevel = createSprite(displayWidth/2, displayHeight/2);
    LockedLevel.addImage(LockedLevelI);
    LockedLevel.visible = false;

    Level1 = createSprite(displayWidth/2, displayHeight/2);
    Level1.addImage(Level1I);
    Level1.position.x = 999999;

    Level2G = createSprite(displayWidth/2, displayHeight/2);
    Level2G.addImage(Level2GI);
    Level2G.position.x = 999999;

    Level2 = createSprite(displayWidth/2, displayHeight/2);
    Level2.addImage(Level2I);
    Level2.position.x = 999999;


}

function draw(){
    if(gameState==="LoadingScreen"){
        background(GrassMenuI);

        StartButton.visible = true;
        if(mousePressedOver(StartButton)){
            gameState = "Levels";
            StartButton.visible = false;
        }
        
    }

    if(gameState==="Levels"){
        GrassLevelsMenu.visible = true;
        Level1.position.x = displayWidth/6;
        Level1.position.y = displayHeight/4;

        Level2G.position.x = displayWidth/6+200;
        Level2G.position.y = displayHeight/4;

        if(mousePressedOver(Level1)){
            gameState = "Level1";
            GrassLevelsMenu.visible = false;
            Level1.visible = false;
            Level2.visible = false;
            Level2G.visible = false;
        }

        if(mousePressedOver(Level2G)){
            LockedLevel.visible = true;
            Timerr = "on";
        }

    }

    if(gameState==="Level1"){
        background(255);
        CityBackground.visible = true;
    }

    if(Timerr==="on"){
        for(i=0;a===240;a++);
        console.log(i);
        if(i>240){
            LockedLevel.visible = false;
            i = 0;
            Timerr = "off";
        }
    }

    drawSprites();
    
    
}

