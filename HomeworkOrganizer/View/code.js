const APP_ID = "IXXOhniqhl6FHSQi4d0IZq5sX4iN2FxglShPuSlS";
const JS_KEY = "5nKA0gak0mwsYChJaR1InZSJ8vQrg0tOCBtIsJ7c";
const serverURL = 'https://parseapi.back4app.com/';
const ClassName = "HomeOrg";
let homeClass;
let query;
let data = [];

async function getResults() {
    return await query.find();
}

let vm = new Vue({
    el: '#subs',
    data: {
        Maths: [],
        Physics: [],
        Chem: [],
        MAT: [],
        Eng: [],
        Bio: [],
        SST: [],
        Hindi: [],
        Telugu: [],
        logInn: false,

    },
    methods: {
        initialize: function() {
            Parse.initialize(APP_ID, JS_KEY);
            Parse.serverURL = serverURL;
            homeClass = Parse.Object.extend(ClassName);
            query = new Parse.Query(homeClass);
        },
        queryIt: function(username) {
            getResults().then((result) => {
                for (let mitta of result) {
                    if (mitta.get("username") == username) {
                        if (mitta.get("sub") == "Maths") {
                            this.Maths.push(mitta.get('hw'));
                        } else if (mitta.get("sub") == "Physics") {
                            this.Physics.push(mitta.get('hw'));
                        } else if (mitta.get("sub") == "Chem") {
                            this.Chem.push(mitta.get('hw'));
                        } else if (mitta.get("sub") == "MAT") {
                            this.MAT.push(mitta.get('hw'));
                        } else if (mitta.get("sub") == "Eng") {
                            this.Eng.push(mitta.get('hw'));
                        } else if (mitta.get("sub") == "Bio") {
                            this.Bio.push(mitta.get('hw'));
                        } else if (mitta.get("sub") == "SST") {
                            this.SST.push(mitta.get('hw'));
                        } else if (mitta.get("sub") == "Hindi") {
                            this.Hindi.push(mitta.get('hw'));
                        } else if (mitta.get("sub") == "Telugu") {
                            this.Telugu.push(mitta.get('hw'));
                        }
                    }
                }
            })
        },
        signUp: async function(username, password) {
            let user = new Parse.User();
            user.set("username", username);
            user.set("password", password);
            try {
                await user.signUp();
                document.getElementById('errr').innerHTML = "Signed Up Succesfully"
            } catch (error) {
                console.log("Erragada Error");
                console.warn(error.message);
                document.getElementById('errr').innerHTML = "Signing Up Unsuccesfull"
            }

        },
        login: async function(username, password) {
            return await Parse.User.logIn(username, password);
        },
        Login: function() {
            let username = document.getElementById('Username').value;
            let password = document.getElementById('Password').value;
            this.login(username, password)
                .then((user) => {
                    this.logInn = true
                    this.queryIt(username);
                })
                .catch((err) => {
                    document.getElementById('errr').innerHTML = "Your Given Data is either invalid or wrong or, Your Internet Connection is Gone";
                })
        },
        SignUp: function() {
            let username = document.getElementById('Username').value;
            let password = document.getElementById('Password').value;
            this.signUp(username, password);
        }
    },
    created: function() {
        this.initialize();
    }

});
