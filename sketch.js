let table;
let tutorial;
let tablet;
let ratio;
let startTimer;
let sin11, sin12, sin13, sin21, sin22, sin23, sin31, sin32, sin33;
let sinner1, sinner2, sinner3;
let yisang,faust,donquixote,ryoshu,meursault,honglu,heathcliff,ishmael,rodion,sinclair, outis, gregor;
let d1,d2,d3,d4,d5,d6,d7,d8,d9,d11,d12,d13;
let g1,g2,g3,g4,g5,g6,g7,g8,g9,g11,g12,g13;
let ng1,ng2,ng3,ng4,ng5,ng6,ng7,ng8,ng9,ng11,ng12,ng13;

function preload(){
    //Creates the base sinner images
  d1 = loadImage('Images/Sinners/1d.png');
  d2 = loadImage('Images/Sinners/2d.png');
  d3 = loadImage('Images/Sinners/3d.png');
  d4 = loadImage('Images/Sinners/4d.png');
  d5 = loadImage('Images/Sinners/5d.png');
  d6 = loadImage('Images/Sinners/6d.png');
  d7 = loadImage('Images/Sinners/7d.png');
  d8 = loadImage('Images/Sinners/8d.png');
  d9 = loadImage('Images/Sinners/9d.png');
  d11 = loadImage('Images/Sinners/11d.png');
  d12 = loadImage('Images/Sinners/12d.png');
  d13 = loadImage('Images/Sinners/13d.png');

  g1 = loadImage('Images/Sinners/1g.png');
  g2 = loadImage('Images/Sinners/2g.png');
  g3 = loadImage('Images/Sinners/3g.png');
  g4 = loadImage('Images/Sinners/4g.png');
  g5 = loadImage('Images/Sinners/5g.png');
  g6 = loadImage('Images/Sinners/6g.png');
  g7 = loadImage('Images/Sinners/7g.png');
  g8 = loadImage('Images/Sinners/8g.png');
  g9 = loadImage('Images/Sinners/9g.png');
  g11 = loadImage('Images/Sinners/11g.png');
  g12 = loadImage('Images/Sinners/12g.png');
  g13 = loadImage('Images/Sinners/13g.png');

  ng1 = loadImage('Images/Sinners/1ng.png');
  ng2 = loadImage('Images/Sinners/2ng.png');
  ng3 = loadImage('Images/Sinners/3ng.png');
  ng4 = loadImage('Images/Sinners/4ng.png');
  ng5 = loadImage('Images/Sinners/5ng.png');
  ng6 = loadImage('Images/Sinners/6ng.png');
  ng7 = loadImage('Images/Sinners/7ng.png');
  ng8 = loadImage('Images/Sinners/8ng.png');
  ng9 = loadImage('Images/Sinners/9ng.png');
  ng11 = loadImage('Images/Sinners/11ng.png');
  ng12 = loadImage('Images/Sinners/12ng.png');
  ng13 = loadImage('Images/Sinners/13ng.png');
  tablet = loadImage('Images/DanteTablet.png');

  yisang = 1;
  faust = 1;
  donquixote = 1;
  ryoshu = 1;
  meursault = 1;
  honglu = 1;
  heathcliff = 1;
  ishmael = 1;
  rodion = 1;
  sinclair = 1;
  outis = 1;
  gregor = 1;

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  table = loadTable('Data/Sinners.csv',',','header');
  
  ratio = 0;
  startTimer = -100;
  

  
  
}

function sinnerButtons(){
    //row 1
    switch (yisang){
        case 1: 
            image(ng1, 105 * ratio,105 * ratio, ng1.width * ratio / 3, ng1.height * ratio / 3);
            break;
        case 2: 
            image(g1, 105 * ratio,105 * ratio, g1.width * ratio / 3, g1.height * ratio / 3);
            break;
        case 3: 
            image(d1, 105 * ratio,105 * ratio, d1.width * ratio / 3, d1.height * ratio / 3);
            break;
    }
    switch (faust){
        case 1: 
            image(ng2, 248 * ratio,105 * ratio, ng2.width * ratio / 3, ng2.height * ratio / 3);
            break;
        case 2: 
            image(g2, 248 * ratio,105 * ratio, g2.width * ratio / 3, g2.height * ratio / 3);
            break;
        case 3: 
            image(d2, 248 * ratio,105 * ratio, d2.width * ratio / 3, d2.height * ratio / 3);
            break;
    }
    switch (donquixote){
        case 1: 
            image(ng3, 391 * ratio,105 * ratio, ng3.width * ratio / 3, ng3.height * ratio / 3);
            break;
        case 2: 
            image(g3, 391 * ratio,105 * ratio, g3.width * ratio / 3, g3.height * ratio / 3);
            break;
        case 3: 
            image(d3, 391 * ratio,105 * ratio, d3.width * ratio / 3, d3.height * ratio / 3);
            break;
    }

    //row 2
    switch (ryoshu){
        case 1: 
            image(ng4, 105 * ratio,290 * ratio, ng4.width * ratio / 3, ng4.height * ratio / 3);
            break;
        case 2: 
            image(g4, 105 * ratio,290 * ratio, g4.width * ratio / 3, g4.height * ratio / 3);
            break;
        case 3: 
            image(d4, 105 * ratio,290 * ratio, d4.width * ratio / 3, d4.height * ratio / 3);
            break;
    }
    switch (meursault){
        case 1: 
            image(ng5, 239 * ratio,275 * ratio, ng5.width * ratio / 3, ng5.height * ratio / 3);
            break;
        case 2: 
            image(g5, 239 * ratio,275 * ratio, g5.width * ratio / 3, g5.height * ratio / 3);
            break;
        case 3: 
            image(d5, 239 * ratio,275 * ratio, d5.width * ratio / 3, d5.height * ratio / 3);
            break;
    }
    switch (honglu){
        case 1: 
            image(ng6, 391 * ratio,275 * ratio, ng6.width * ratio / 3, ng6.height * ratio / 3);
            break;
        case 2: 
            image(g6, 391 * ratio,275 * ratio, g6.width * ratio / 3, g6.height * ratio / 3);
            break;
        case 3: 
            image(d6, 391 * ratio,275 * ratio, d6.width * ratio / 3, d6.height * ratio / 3);
            break;
    }

  //row 3

    switch (heathcliff){
        case 1: 
            image(ng7, 105 * ratio,475 * ratio, ng7.width * ratio / 3, ng7.height * ratio / 3);
            break;
        case 2: 
            image(g7, 105 * ratio,475 * ratio, g7.width * ratio / 3, g7.height * ratio / 3);
            break;
        case 3: 
            image(d7, 105 * ratio,475 * ratio, d7.width * ratio / 3, d7.height * ratio / 3);
            break;
    }
    switch (ishmael){
        case 1: 
            image(ng8, 243 * ratio,475 * ratio, ng8.width * ratio / 3, ng8.height * ratio / 3);
            break;
        case 2: 
            image(g8, 243 * ratio,475 * ratio, g8.width * ratio / 3, g8.height * ratio / 3);
            break;
        case 3: 
            image(d8, 243 * ratio,475 * ratio, d8.width * ratio / 3, d8.height * ratio / 3);
            break;
    }
    switch (rodion){
        case 1: 
            image(ng9, 391 * ratio,475 * ratio, ng9.width * ratio / 3, ng9.height * ratio / 3);
            break;
        case 2: 
            image(g9, 391 * ratio,475 * ratio, g9.width * ratio / 3, g9.height * ratio / 3);
            break;
        case 3: 
            image(d9, 391 * ratio,475 * ratio, d9.width * ratio / 3, d9.height * ratio / 3);
            break;
    }




  //row 4
  switch (sinclair){
        case 1: 
            image(ng11, 105 * ratio,660 * ratio, ng11.width * ratio / 3, ng11.height * ratio / 3);
            break;
        case 2: 
            image(g11, 105 * ratio,660 * ratio, g11.width * ratio / 3, g11.height * ratio / 3);
            break;
        case 3: 
            image(d11, 105 * ratio,660 * ratio, d11.width * ratio / 3, d11.height * ratio / 3);
            break;
    }
    switch (outis){
        case 1: 
            image(ng12, 246 * ratio,660 * ratio, ng12.width * ratio / 3, ng12.height * ratio / 3);
            break;
        case 2: 
            image(g12, 246 * ratio,660 * ratio, g12.width * ratio / 3, g12.height * ratio / 3);
            break;
        case 3: 
            image(d12, 246 * ratio,660 * ratio, d12.width * ratio / 3, d12.height * ratio / 3);
            break;
    }
    switch (gregor){
        case 1: 
            image(ng13, 391 * ratio,660 * ratio, ng13.width * ratio / 3, ng13.height * ratio / 3);
            break;
        case 2: 
            image(g13, 391 * ratio,660 * ratio, g13.width * ratio / 3, g13.height * ratio / 3);
            break;
        case 3: 
            image(d13, 391 * ratio,660 * ratio, d13.width * ratio / 3, d13.height * ratio / 3);
            break;
    }
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  if (startTimer < 51){
    startTimer++;
  }

  if(startTimer % 17 == 11){
    yisang = 2;
    faust = 2;
    donquixote = 2;
    ryoshu = 2;
    meursault = 2;
    honglu = 2;
    heathcliff = 2;
    ishmael = 2;
    rodion = 2;
    sinclair = 2;
    outis = 2;
    gregor = 2;
  } else if(startTimer % 17 == 1){
    yisang = 1;
    faust = 1;
    donquixote = 1;
    ryoshu = 1;
    meursault = 1;
    honglu = 1;
    heathcliff = 1;
    ishmael = 1;
    rodion = 1;
    sinclair = 1;
    outis = 1;
    gregor = 1;
  }



  background(20);
  ratio =  windowWidth / tablet.width  / 0.7
  image(tablet,1,1,windowWidth,windowHeight * ratio);
  sinnerButtons();
  
}