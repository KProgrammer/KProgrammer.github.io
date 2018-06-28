const JS_KEY = '0LDDHm1tuXXlqjXBvil3HHiL2cvaHCT85bgGEqyq';
const APP_ID = 'TFzPZxJJXkr2P4KpqXOU7xusFAxpV3lhmOwvz4tx';
Parse.initialize(APP_ID, JS_KEY);
Parse.serverURL = "https://parseapi.back4app.com/";
const M = (document.getElementById('M'));
const P = (document.getElementById('P'));
const C = (document.getElementById('C'));
const CR = (document.getElementById('CR'));
const HR = (document.getElementById('HR'));
const name = (document.getElementById('name'));
const SubmitBtn = document.getElementById('submit');
let CMT = Parse.Object.extend("CMT");

function submitfn() {
    valm = Number(M.value);
    valp = Number(P.value);
    valc = Number(C.value);
    Cr = Number(CR.value);
    Hr = Number(HR.value);    
    valname = name.value;

    let result = new CMT();
    result.set("Maths", valm);
    result.set("Physics", valp);
    result.set("Chemistry", valc);
    result.set("Name", valname);
    result.set("Total", valm+valp+valc);
    result.set("ClassRank", Cr);
    result.set("HydRank", Hr);
    

    result.save(null, {
        success: function(res){
            console.log("SUCCESSFULLY SAVED");            
        },
        error: function(respnse, error){
            console.error("Yerragaddda Error: " + error.message);
            
        }
    })
    
    
    
    
}

