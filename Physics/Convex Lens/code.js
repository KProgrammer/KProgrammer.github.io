let height = 800;
let width = 800;

let n1 = 1;
let n2 = 1.3;

let R = 100;
let f;
let u = -300;
let v;
let ho = 100;
let hi;

let front = true;

let nSlider, rSlider;

function setup(){
    createCanvas(width, height);
    nSlider = createSlider(130, 250);
    nSlider.position(100, 100);
    rSlider = createSlider(100, 500);
    rSlider.position(600, 100);
}

function draw(){
    background(255)  ;
    fill(0);
    strokeWeight(2)  ;
    line(0, height/2, width, height/2)
    textSize(30);
    text('mu:', 25, 112);
    text('R:', 550, 112);
    fill(255);
    n2 = (nSlider.value())/100;
    R = rSlider.value();

    arc(width/2, height/2, 30, 300, 0,0);
    
    f = (R * n1)/(2 * (n2 - n1));
    v = 1/((1/f)+(1/u));
    hi = (v/u)*ho;

    strokeWeight(4);
    line(width/2 + u, height/2, width/2 + u, height/2 - ho);
    stroke(169, 0, 0)
    line(width/2 + v, height/2, width/2 + v, height/2 - hi);
    stroke(0);

    strokeWeight(1);
    line(width/2 + u, height/2 - ho, width/2 + v, height/2 - hi);
    line(width/2 + u, height/2 - ho, width/2, height/2 - ho);
    line(width/2, height/2 - ho, width/2 + v, height/2 - hi)

    if(u >= 0){
        front = false;
    }
    if(u <= -400){
        front = true;
    }

    if(front){
        u++;
    } else {
        u--;
    }
    
}