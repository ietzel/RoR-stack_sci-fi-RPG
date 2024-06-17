var organisms = [[],[], [], [], [],[],[],[],[], []];
organisms[0][0] = new create_organisms("", "", 10, 10, 10, 10);
for(var j = 0; j < 1; j++) {
    organisms[1][j] = new create_organisms("", "", 10, 10, 10, 10);  
}

function damage(stat, mental, target, ranged) {
    accuracystat = getModOfStat(stat);
    dexpenalty = 0;
    crouch_mod = 0;
    t_crouch_mod = 0;
    t_cover_mod = 0;
    knowledgeable = false;
    frightened_mod = 0;
    if(mental >= 30) {
        knowledgeable = true;
    }
    if(target.mental<=mental) {
        frightened_mod = floor((target.mental-mental)/-10)-1;
    }
    if(this.crouching <= -1) {
        crouch_mod = -2;
    }
    if(target.crouching == -1) {
        crouch_mod = -2;
    } else if(target.crouching == -2) {
        crouch_mod = -2;
        cover_mod = -2;
    }
    if((this.sped+this.ment+frightened_mod)>=(this.ofns*2)) {
        if((this.ment>target.ment) && (this.sped>target.ment)) {
            dexpenalty = target.sped;
        }
    } else {
        if(this.ofns+frightened_mod>target.ment) {
            dexpenalty = target.sped;
        }
    }
    if(!ranged) {
        if(getDist(this.x, this.y, this.z, target.x, target.y, target.z) <= 8*1.5) {
            if((accuracystat-crouch_mod+frightened_mod+10) >= (getModOfStat(target.sped)-dexpenalty+t_crouch_mod)) {
                if(((accuracystat*2)+frightened_mod) >= getModOfStat(target.dfse)) {
                    characters = splice([indexOf(target), 1]);
                }
            } else {
                if(((accuracystat-cover_mod)+frightened_mod) >= (getModOfStat(target.sped)-dexpenalty+t_crouch_mod)) {
                    if((accuracystat+frightened_mod) >= getModOfStat(target.dfse)) {
                        characters = splice([indexOf(target), 1]);
                    }
                }
            }
        }
    } else if(getDist(this.x, this.y, this.z, target.x, target.y, target.z) <= 8*6) {
        if((accuracystat-crouch_mod+frightened_mod+10) >= (getModOfStat(target.sped)-dexpenalty+(t_crouch_mod*-1))) {
            if(((accuracystat*2)+frightened_mod) >= getModOfStat(target.dfse)) {
                characters = splice([indexOf(target), 1]);
            }
        } else {
            if((accuracystat-+frightened_modcover_mod) >= (getModOfStat(target.sped)-dexpenalty+(t_crouch_mod*-1))) {
                if((accuracystat+frightened_mod) >= getModOfStat(target.dfse)) {
                    characters = splice([indexOf(target), 1]);
                }
            }
        }
    }
}

let size = 8;
let depth = 512;
let overlap = 256;
let treeLine = -64;
let water = 8;
let x_coor = 0;
let y_coor = -256;
let z_coor = -512;
let rez1 = 0.01;
let terrRange = 100; 
let seed = millis()*10000;

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
    	x_coor -= 50;
    } else if (keyCode === RIGHT_ARROW) {
    	x_coor += 50;
    } else if (keyCode === DOWN_ARROW) {
    	z_coor -= 50;
    	characters[0][0].crouching = true;
    } else if (keyCode === UP_ARROW) {
    	z_coor += 50;
    	characters[0][0].crouching = false;
    }
}

function setup() {
    let canv = createCanvas(1024, 512, WEBGL);
    canv.mousePressed(setup);
    cam = createCamera();
    //noLoop();
    colorMode(HSB,360,100,100,100);
    //rez1 = 0.01;
    //terrRange = 100;
    //seed = millis() * 10000; //to vary noise
    draw();
}

function draw() {
    cam.camera(0,-256,-512,0,0,0,0,1,0); //x_coor,y_coor,z_coor

    background(220,100,100);
    for (x = -width/2-256; x < width/2+256; x+=8) {
    for (z=-512/2-256; z <512/2+256; z+=8) {
        y = (noise(x*0.01+(millis() * 10000), z*x*0.01+(millis() * 10000))-0.5)*100*2;
        stroke(0);
        g = noise(x * x*0.01+(millis() * 10000)+20000,z*x*0.01+(millis() * 10000)+20000)-0.5;
        fill(125+125*g,95+90*g,60+60*g,100) //grass color
        if (y<-64) {
        fill (200,20,40); //stone color
        }
        if (y>8) {
        fill(240,100,60,100); //water color
        y = 8;
        noStroke();
        }
        push();
        translate(x,y,z);
        box(8); //grass or water
        translate(0,8*3,0);
        fill (200,20,40); //stone color
        box(8,8*5,8); //stone block
        let treeChance = (noise(x * x*0.01+(millis() * 10000)+10000,z*x*0.01+(millis() * 10000)+10000)-0.5)*90;
        if (((noise(x * x*0.01+(millis() * 10000)+10000,z*x*0.01+(millis() * 10000)+10000)-0.5)*90) > 9.5 && y>-64 && y<8) {
        translate(0,-8*5,0);
        fill(0,75,30); //trunk color
        cylinder(8/2,8*3);
        translate(-8,-8,-8);
        fill(120,80,30); //leaves
        //sphere(8*2);
        // fill in tree:
        for (i=0;i<2;i++){
            for (j=0;j<3;j++){
            for (k=0;k<3;k++){
                box(8);
                translate(0,0,8)
            }
            translate(8,0,-8*3)
            } 
            translate(-8*3,-8,0)
        }
        translate(8,0,8);
        box(8) //cap on tree
        }
        pop();
    }
    }
}