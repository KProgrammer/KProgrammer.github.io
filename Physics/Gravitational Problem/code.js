let dt = 0.001;
let m = 10000;
let G = 10000;
let d = 500;
let F, a;
let v = 0;
let t= 0;
let x1 = 0;
let x2 = 500;

function setup(){
    createCanvas(500, 500)
    background(0)
}

function draw(){
    //background(0)
    F = (G*m*m)/(d*d);
    a = (F/m)
    v += a*dt;
    x1 += v*dt;
    x2-=v*dt;
    d-=2*v*dt;
    stroke(255) 
    strokeWeight(8)
    point(t*574, 500-d)
    /*stroke(255, 0, 0)
    point(t*574, 500+(0.568*t - 500 + 437*t*t))*/
    console.log(t*574, d)
    //point(t*574, 500-v)
    if(abs(x1 - x2) < 10){
        console.log(t);
        noLoop()
    }
    t+=dt

}
