let width = 800;
let height = 600;

let ho = 60;
let f = 50;
let u = 51;
let v;
let mir_pos = 150;
let hi;
let uSlider, hSlider;
let btn;
let au = false;
let front = true;

function auto(){
    au = !au;
    uSlider.value(u);
}

function setup(){
    createCanvas(width, height)
    btn = createButton('AUTO');
    btn.position(450, 100);
    btn.size(50, 25)
    btn.mousePressed(auto);
    uSlider = createSlider(0, 500 )
    uSlider.position(100, 100)
    hSlider = createSlider(10, 100);
    hSlider.position(300, 100)
}

function draw(){
    background(255)
    textSize(30)    
    fill(0)
    text('u:', 50, 112)
    text('h:', 250, 112)
    if(!au){
        u = uSlider.value();
        
    }
    ho = hSlider.value();
    line(0, height/2, width, height/2);
    noFill();
    arc(mir_pos + 2 * f, height/2, 4*f, 4*f,  PI/2, 1.5 * PI )
    line(mir_pos + u, height/2, mir_pos + u, (height/2)-ho)
    strokeWeight(6);
    point(mir_pos + f, height/2)
    point(mir_pos + 2*f, height/2)    
    strokeWeight(1);
    v = 1/((1/f)-(1/u));
    hi = (-ho * v / u)
    stroke(125, 0, 0)
    strokeWeight(2);
    line(mir_pos + v, height/2, mir_pos + v, (height/2)-hi)
    stroke(0);
    strokeWeight(1);
    if(au){
        if(u == 500){
            front = false;
        }
        if(u == 0){
            front = true;
        }
        if(front){
            u++;
        } else {
            u--;
        }
    }
    
}