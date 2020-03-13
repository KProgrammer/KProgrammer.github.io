let date = new Date('April 16, 2020 16:30:00');
let ms, s, min, h, day;

function draw(){
    let todate = Date.now();
    let msdate = Date.parse(date);
    let k = msdate - todate;
    if(k >= 0){
        ms = k % 1000;
        k = (k - ms)/1000;
        s = k % 60;
        k = (k-s)/60;
        min = k % 60;
        k = (k - min)/60;
        h = k % 24;
        k = (k - h)/24;
        d = k;    
    
        document.getElementById('main').innerHTML = `${d}d ${h}h ${min}m ${s}s ${ms}ms`;
    }else {
        document.getElementById('main').innerHTML = "Freedom Attained, Enjoy!";
    }
}