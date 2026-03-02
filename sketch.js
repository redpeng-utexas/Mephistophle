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
let wn, wm, wy;
let ln,lm,ly;
let sn,sm,sy;
let gn,gm,gy;
let gln, glm, gly;
let pn, pm, py;
let en, em, ey;
let chosen1, chosen2, chosen3;
let sins1, sins2, sins3;
let ds1, ds2, ds3, ds4, ds5, ds6, ds7, ds8, ds9;

let coords;
let target;

let sins;

let font;

function preload(){
  wn = loadImage('Images/Sins/WrathNo.png');
  wm = loadImage('Images/Sins/WrathMaybe.png');
  wy = loadImage('Images/Sins/WrathYes.png');

  ln = loadImage('Images/Sins/LustNo.png');
  lm = loadImage('Images/Sins/LustMaybe.png');
  ly = loadImage('Images/Sins/LustYes.png');

  sn = loadImage('Images/Sins/SlothNo.png');
  sm = loadImage('Images/Sins/SlothMaybe.png');
  sy = loadImage('Images/Sins/SlothYes.png');

  gn = loadImage('Images/Sins/GluttonyNo.png');
  gm = loadImage('Images/Sins/GluttonyMaybe.png');
  gy = loadImage('Images/Sins/GluttonyYes.png');

  gln = loadImage('Images/Sins/GloomNo.png');
  glm = loadImage('Images/Sins/GloomMaybe.png');
  gly = loadImage('Images/Sins/GloomYes.png');

  pn = loadImage('Images/Sins/PrideNo.png');
  pm = loadImage('Images/Sins/PrideMaybe.png');
  py = loadImage('Images/Sins/PrideYes.png');

  en = loadImage('Images/Sins/EnvyNo.png');
  em = loadImage('Images/Sins/EnvyMaybe.png');
  ey = loadImage('Images/Sins/EnvyYes.png');

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

  font = loadFont('Fonts/Mikodacs.otf'); /*font and text stuff*/


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
textFont(font);

  createCanvas(windowWidth, windowHeight);
  table = loadTable('Data/Sinners.csv',',','header');
  chosen1 = -1;
  chosen2 = -1;
  chosen3 = -1;
  
  ratio = 0;
  startTimer = -100;
  sins1 = table.getColumn(4);
  sins2 = table.getColumn(5);
  sins3 = table.getColumn(6);

  //target = parseInt(random() * 13);
  target = 2;

  stringray = Image[9];
  
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

function drawSins(){ //FIX
    /*if(sins1[chosen1] == sins1[target]){
        switch(sins1[chosen1]){
            case "wrath":
                ds1 = wy;
                break;
            case "lust":
                ds1 = ly;
                break;
            case "sloth":
                ds1 = sy;
                break;
            case "gluttony":
                ds1 = gy;
                break;
            case "gloom":
                ds1 = gly;
                break;
            case "pride":
                ds1 = py;
                break;
            case "envy":
                ds1 = ey;
                break;
        }
    } else if(sins1[chosen1] == sins2[target] || sins1[chosen1] == sins3[target]){
        switch(sins1[chosen1]){
            case "wrath":
                ds1 = wm;
                break;
            case "lust":
                ds1 = lm;
                break;
            case "sloth":
                ds1 = sm;
                break;
            case "gluttony":
                ds1 = gm;
                break;
            case "gloom":
                ds1 = glm;
                break;
            case "pride":
                ds1 = pm;
                break;
            case "envy":
                ds1 = em;
                break;
        }
    } else {
        switch(sins1[chosen1]){
            case "wrath":
                ds1 = wn;
                break;
            case "lust":
                ds1 = ln;
                break;
            case "sloth":
                ds1 = sn;
                break;
            case "gluttony":
                ds1 = gn;
                break;
            case "gloom":
                ds1 = gln;
                break;
            case "pride":
                ds1 = pn;
                break;
            case "envy":
                ds1 = en;
                break;
        }
    }

    if(sins2[chosen1] == sins2[target]){
        switch(sins2[chosen1]){
            case "wrath":
                ds2 = wy;
                break;
            case "lust":
                ds2 = ly;
                break;
            case "sloth":
                ds2 = sy;
                break;
            case "gluttony":
                ds2 = gy;
                break;
            case "gloom":
                ds2 = gly;
                break;
            case "pride":
                ds2 = py;
                break;
            case "envy":
                ds2 = ey;
                break;
        }
    } else if(sins2[chosen1] == sins1[target] || sins2[chosen1] == sins3[target]){
        switch(sins2[chosen1]){
            case "wrath":
                ds2 = wm;
                break;
            case "lust":
                ds2 = lm;
                break;
            case "sloth":
                ds2 = sm;
                break;
            case "gluttony":
                ds2 = gm;
                break;
            case "gloom":
                ds2 = glm;
                break;
            case "pride":
                ds2 = pm;
                break;
            case "envy":
                ds2 = em;
                break;
        }
    } else {
        switch(sins2[chosen1]){
            case "wrath":
                ds2 = wn;
                break;
            case "lust":
                ds2 = ln;
                break;
            case "sloth":
                ds2 = sn;
                break;
            case "gluttony":
                ds2 = gn;
                break;
            case "gloom":
                ds2 = gln;
                break;
            case "pride":
                ds2 = pn;
                break;
            case "envy":
                ds2 = en;
                break;
        }
    }

    if(sins3[chosen1] == sins3[target]){
        switch(sins3[chosen1]){
            case "wrath":
                ds3 = wy;
                break;
            case "lust":
                ds3 = ly;
                break;
            case "sloth":
                ds3 = sy;
                break;
            case "gluttony":
                ds3 = gy;
                break;
            case "gloom":
                ds3 = gly;
                break;
            case "pride":
                ds3 = py;
                break;
            case "envy":
                ds3 = ey;
                break;
        }
    } else if(sins3[chosen1] == sins2[target] || sins3[chosen1] == sins1[target]){
        switch(sins3[chosen1]){
            case "wrath":
                ds3 = wm;
                break;
            case "lust":
                ds3 = lm;
                break;
            case "sloth":
                ds3 = sm;
                break;
            case "gluttony":
                ds3 = gm;
                break;
            case "gloom":
                ds3 = glm;
                break;
            case "pride":
                ds3 = pm;
                break;
            case "envy":
                ds3 = em;
                break;
        }
    } else {
        switch(sins3[chosen1]){
            case "wrath":
                ds3 = wn;
                break;
            case "lust":
                ds3 = ln;
                break;
            case "sloth":
                ds3 = sn;
                break;
            case "gluttony":
                ds3 = gn;
                break;
            case "gloom":
                ds3 = gln;
                break;
            case "pride":
                ds3 = pn;
                break;
            case "envy":
                ds3 = en;
                break;
        }
    }*/

    switch(chosen1){
        case 0:
            image(ng1, 740*ratio, 170*ratio, ng1.width * ratio / 3, ng1.height * ratio / 3);
            break;
        case 1:
            image(ng2, 740*ratio, 170*ratio, ng2.width * ratio / 3, ng2.height * ratio / 3);
            break;
        case 2:
            image(ng3, 740*ratio, 170*ratio, ng1.width * ratio / 3, ng1.height * ratio / 3);
            break;
        case 3:
            image(ng4, 740*ratio, 170*ratio, ng2.width * ratio / 3, ng2.height * ratio / 3);
            break;
        case 4:
            image(ng5, 740*ratio, 170*ratio, ng1.width * ratio / 3, ng1.height * ratio / 3);
            break;
        case 5:
            image(ng6, 740*ratio, 170*ratio, ng2.width * ratio / 3, ng2.height * ratio / 3);
            break;
        case 6:
            image(ng7, 740*ratio, 170*ratio, ng1.width * ratio / 3, ng1.height * ratio / 3);
            break;
        case 7:
            image(ng8, 740*ratio, 170*ratio, ng2.width * ratio / 3, ng2.height * ratio / 3);
            break;
        case 8:
            image(ng9, 740*ratio, 170*ratio, ng1.width * ratio / 3, ng1.height * ratio / 3);
            break;
        case 9:
            image(ng11, 740*ratio, 170*ratio, ng2.width * ratio / 3, ng2.height * ratio / 3);
            break;
        case 10:
            image(ng12, 740*ratio, 170*ratio, ng1.width * ratio / 3, ng1.height * ratio / 3);
            break;
        case 11:
            image(ng13, 740*ratio, 170*ratio, ng2.width * ratio / 3, ng2.height * ratio / 3);
            break;
    }

    switch(chosen2){
        case 0:
            image(ng1, 740*ratio, 390*ratio, ng1.width * ratio / 3, ng1.height * ratio / 3);
            break;
        case 1:
            image(ng2, 740*ratio, 390*ratio, ng2.width * ratio / 3, ng2.height * ratio / 3);
            break;
        case 2:
            image(ng3, 740*ratio, 390*ratio, ng1.width * ratio / 3, ng1.height * ratio / 3);
            break;
        case 3:
            image(ng4, 740*ratio, 390*ratio, ng2.width * ratio / 3, ng2.height * ratio / 3);
            break;
        case 4:
            image(ng5, 740*ratio, 390*ratio, ng1.width * ratio / 3, ng1.height * ratio / 3);
            break;
        case 5:
            image(ng6, 740*ratio, 390*ratio, ng2.width * ratio / 3, ng2.height * ratio / 3);
            break;
        case 6:
            image(ng7, 740*ratio, 390*ratio, ng1.width * ratio / 3, ng1.height * ratio / 3);
            break;
        case 7:
            image(ng8, 740*ratio, 390*ratio, ng2.width * ratio / 3, ng2.height * ratio / 3);
            break;
        case 8:
            image(ng9, 740*ratio, 390*ratio, ng1.width * ratio / 3, ng1.height * ratio / 3);
            break;
        case 9:
            image(ng11, 740*ratio, 390*ratio, ng2.width * ratio / 3, ng2.height * ratio / 3);
            break;
        case 10:
            image(ng12, 740*ratio, 390*ratio, ng1.width * ratio / 3, ng1.height * ratio / 3);
            break;
        case 11:
            image(ng13, 740*ratio, 390*ratio, ng2.width * ratio / 3, ng2.height * ratio / 3);
            break;
    }

    switch(chosen3){
        case 0:
            image(ng1, 740*ratio, 610*ratio, ng1.width * ratio / 3, ng1.height * ratio / 3);
            break;
        case 1:
            image(ng2, 740*ratio, 610*ratio, ng2.width * ratio / 3, ng2.height * ratio / 3);
            break;
        case 2:
            image(ng3, 740*ratio, 610*ratio, ng1.width * ratio / 3, ng1.height * ratio / 3);
            break;
        case 3:
            image(ng4, 740*ratio, 610*ratio, ng2.width * ratio / 3, ng2.height * ratio / 3);
            break;
        case 4:
            image(ng5, 740*ratio, 610*ratio, ng1.width * ratio / 3, ng1.height * ratio / 3);
            break;
        case 5:
            image(ng6, 740*ratio, 610*ratio, ng2.width * ratio / 3, ng2.height * ratio / 3);
            break;
        case 6:
            image(ng7, 740*ratio, 610*ratio, ng1.width * ratio / 3, ng1.height * ratio / 3);
            break;
        case 7:
            image(ng8, 740*ratio, 610*ratio, ng2.width * ratio / 3, ng2.height * ratio / 3);
            break;
        case 8:
            image(ng9, 740*ratio, 610*ratio, ng1.width * ratio / 3, ng1.height * ratio / 3);
            break;
        case 9:
            image(ng11, 740*ratio, 610*ratio, ng2.width * ratio / 3, ng2.height * ratio / 3);
            break;
        case 10:
            image(ng12, 740*ratio, 610*ratio, ng1.width * ratio / 3, ng1.height * ratio / 3);
            break;
        case 11:
            image(ng13, 740*ratio, 610*ratio, ng2.width * ratio / 3, ng2.height * ratio / 3);
            break;
    }

    if(chosen1 >= 0){
        image(wm, 950 * ratio, 150 * ratio, wn.width * ratio / 1.5, wn.height * ratio / 1.5);
        image(em, 1180 * ratio, 150 * ratio, wn.width * ratio / 1.5, wn.height * ratio / 1.5);
        image(gn, 1410 * ratio, 150 * ratio, wn.width * ratio / 1.5, wn.height * ratio / 1.5);
    }
    if(chosen2 >= 0){
        image(pn, 950 * ratio, 365 * ratio, wn.width * ratio / 1.5, wn.height * ratio / 1.5);
        image(wm, 1180 * ratio, 365 * ratio, wn.width * ratio / 1.5, wn.height * ratio / 1.5);
        image(em, 1410 * ratio, 365 * ratio, wn.width * ratio / 1.5, wn.height * ratio / 1.5);
    }
    if(chosen3 >= 0){
        image(ey, 950 * ratio, 580 * ratio, wn.width * ratio / 1.5, wn.height * ratio / 1.5);
        image(ly, 1180 * ratio, 580 * ratio, wn.width * ratio / 1.5, wn.height * ratio / 1.5);
        image(wy, 1410 * ratio, 580 * ratio, wn.width * ratio / 1.5, wn.height * ratio / 1.5);
    }

    /*for(i = 0; i < 1; i++){
        if(chosen1 >= 0){image(ds1, 950 * ratio, 150 * ratio, wn.width * ratio / 1.5, wn.height * ratio / 1.5);}
        
    }*/

}

function checkClick(){
    if(mouseX > 105 * ratio && mouseX < 105 * ratio + ng1.width * ratio / 3 && mouseY > 105 * ratio && mouseY < 105 * ratio + ng1.height * ratio / 3 && mouseIsPressed && yisang < 3){
        yisang = 3;
        if(chosen1 < 0){chosen1 = 0;}
        else if(chosen2 > 0){chosen2 = 0;}
        else if(chosen3 < 0){chosen3 = 0;}
        
    } else if(mouseX > 248 * ratio && mouseX < 248 * ratio + ng2.width * ratio / 3 && mouseY > 105 * ratio && mouseY < 105 * ratio + ng2.height * ratio / 3 && mouseIsPressed && faust < 3){
        faust = 3;
        if(chosen1 < 0){chosen1 = 1;}
        else if(chosen2 < 0){chosen2 = 1;}
        else if(chosen3 < 0){chosen3 = 1;}
    } else if(mouseX > 391 * ratio && mouseX < 391 * ratio + ng2.width * ratio / 3 && mouseY > 105 * ratio && mouseY < 105 * ratio + ng2.height * ratio / 3 && mouseIsPressed && donquixote < 3){
        donquixote = 3;
        if(chosen1 < 0){chosen1 = 2;}
        else if(chosen2 < 0){chosen2 = 2;}
        else if(chosen3 < 0){chosen3 = 2;}
    }
    else if(mouseX > 105 * ratio && mouseX < 105 * ratio + ng1.width * ratio / 3 && mouseY > 290 * ratio && mouseY < 290 * ratio + ng1.height * ratio / 3 && mouseIsPressed && ryoshu < 3){
        ryoshu = 3;
        if(chosen1 < 0){chosen1 = 3;}
        else if(chosen2 < 0){chosen2 = 3;}
        else if(chosen3 < 0){chosen3 = 3;}
    } else if(mouseX > 248 * ratio && mouseX < 248 * ratio + ng2.width * ratio / 3 && mouseY > 290 * ratio && mouseY < 290 * ratio + ng2.height * ratio / 3 && mouseIsPressed && meursault < 3){
        meursault = 3;
        if(chosen1 <= 0){chosen1 = 4;}
        else if(chosen2 <= 0){chosen2 = 4;}
        else if(chosen3 <= 0){chosen3 = 4;}
    } else if(mouseX > 391 * ratio && mouseX < 391 * ratio + ng2.width * ratio / 3 && mouseY > 290 * ratio && mouseY < 290 * ratio + ng2.height * ratio / 3 && mouseIsPressed && honglu < 3){
        honglu = 3;
        if(chosen1 <= 0){chosen1 = 5;}
        else if(chosen2 <= 0){chosen2 = 5;}
        else if(chosen3 <= 0){chosen3 = 5;}
    }

    else if(mouseX > 105 * ratio && mouseX < 105 * ratio + ng1.width * ratio / 3 && mouseY > 475 * ratio && mouseY < 475 * ratio + ng1.height * ratio / 3 && mouseIsPressed && heathcliff < 3){
        heathcliff = 3;
        if(chosen1 < 0){chosen1 = 6;}
        else if(chosen2 > 0){chosen2 = 6;}
        else if(chosen3 < 0){chosen3 = 6;}
        
    } else if(mouseX > 248 * ratio && mouseX < 248 * ratio + ng2.width * ratio / 3 && mouseY > 475 * ratio && mouseY < 475 * ratio + ng2.height * ratio / 3 && mouseIsPressed && ishmael < 3){
        ishmael = 3;
        if(chosen1 < 0){chosen1 = 7;}
        else if(chosen2 < 0){chosen2 = 7;}
        else if(chosen3 < 0){chosen3 = 7;}
    } else if(mouseX > 391 * ratio && mouseX < 391 * ratio + ng2.width * ratio / 3 && mouseY > 475 * ratio && mouseY < 475 * ratio + ng2.height * ratio / 3 && mouseIsPressed && rodion < 3){
        rodion = 3;
        if(chosen1 < 0){chosen1 = 8;}
        else if(chosen2 < 0){chosen2 = 8;}
        else if(chosen3 < 0){chosen3 = 8;}
    }
    else if(mouseX > 105 * ratio && mouseX < 105 * ratio + ng1.width * ratio / 3 && mouseY > 660 * ratio && mouseY < 660 * ratio + ng1.height * ratio / 3 && mouseIsPressed && sinclair < 3){
        sinclair = 3;
        if(chosen1 < 0){chosen1 = 9;}
        else if(chosen2 < 0){chosen2 = 9;}
        else if(chosen3 < 0){chosen3 = 9;}
    } else if(mouseX > 248 * ratio && mouseX < 248 * ratio + ng2.width * ratio / 3 && mouseY > 660 * ratio && mouseY < 660 * ratio + ng2.height * ratio / 3 && mouseIsPressed && outis < 3){
        outis = 3;
        if(chosen1 <= 0){chosen1 = 10;}
        else if(chosen2 <= 0){chosen2 = 10;}
        else if(chosen3 <= 0){chosen3 = 10;}
    } else if(mouseX > 391 * ratio && mouseX < 391 * ratio + ng2.width * ratio / 3 && mouseY > 660 * ratio && mouseY < 660 * ratio + ng2.height * ratio / 3 && mouseIsPressed && gregor < 3){
        gregor = 3;
        if(chosen1 <= 0){chosen1 = 11;}
        else if(chosen2 <= 0){chosen2 = 11;}
        else if(chosen3 <= 0){chosen3 = 11;}
    }
}


function draw() {
  createCanvas(windowWidth, windowHeight);
  if (startTimer < 51){
    startTimer++;
  } else if(chosen3 < 0){checkClick();}

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
  
  drawSins();
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text("Mephistophle - Test Your Limbus Company Knowledge", windowWidth/2, 1000 * ratio);
  
}