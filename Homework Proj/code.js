APP_ID = 'IXXOhniqhl6FHSQi4d0IZq5sX4iN2FxglShPuSlS';
JS_KEY = '5nKA0gak0mwsYChJaR1InZSJ8vQrg0tOCBtIsJ7c';

Parse.initialize(this.APP_ID, this.JS_KEY);
Parse.serverURL = "https://parseapi.back4app.com/";
let Math = [];
let Physics = [];
let Homeworks = Parse.Object.extend("HomeWorks");
let query = new Parse.Query(Homeworks);
let subject;
let Homework;
query.find({
    success: function(results){            
        let res = [];
        for(let i = 0; i < results.length; i++){
            let obj = results[i];
            subject = obj.get("Subject")
            Homework = obj.get("Homework")
            if(subject=="Maths"){
                Math.push(Homework);  
            }else if(subject=="Physics"){
                Physics.push(Homework);
            }              
        }
        
        
    },
    error: function(error){            
        console.error(error.message);       
        return [];             
    }
});


let vm = new Vue({
    el: "#main",
    data: {        
        Math: [],
        Physics: [],
        Chemistry: [],
        MAT: [],
        English: [],
        Biology: [],
        SST: [],
        Hindi: [],
        Telugu: [],
        Comp: []
    },   
    
    updated() {        
        this.Math = Math;
        this.Physics = Physics;
        console.log(this.Math);
    }
});
function changeData(){
    vm.$data.Math = [];
    
}