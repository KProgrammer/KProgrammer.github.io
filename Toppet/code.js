const app_id = "UndlwaMHnxf9OeojE9KG18WBDUz9cf4HoiDHhZQB";
const js_key = "EAH5Mf9usnC5NssCOW6A0ErquwBX7q2wauGMI3tP";
const master_key = "NYTuBCBLHNW71CRiHrNZU00dcqIxMfOpieFTe00C"
let Answers;
let client;
let status;
let vm;
let keyGlobal = [];

function initializeStuff() {
    Parse.initialize(app_id, js_key);
    Parse.serverURL = "https://parseapi.back4app.com/";
    Answers = Parse.Object.extend("Answers");
}

function liveQueryInit() {
    client = new Parse.LiveQueryClient({
        applicationId: app_id,
        serverURL: 'wss://toppet.back4app.io',
        javascriptKey: js_key,
        masterKey: master_key
    });
    client.open();
}

async function getInitialData() {
    const query1 = new Parse.Query(Answers);
    results = await query1.find()
    for (let result of results) {
        keyGlobal.push({
            question: result.get('question'),
            answer: result.get('answer')
        });
    }

    let query = new Parse.Query(Answers);
    let subscription = client.subscribe(query);

    subscription.on('create', obj => {
        console.log('Object Created')
        vm.answer_key.push({
            question: obj.get('question'),
            answer: obj.get('answer')
        })
        console.log(vm.answer_key)
    });

}

initializeStuff();
liveQueryInit();
getInitialData().then(main);

function main() {
    vm = new Vue({
        el: "#app",
        data: {
            app_id: app_id,
            js_key: js_key,
            master_key: master_key,
            current_question: 0,
            current_answer: "",
            answer_key: keyGlobal
        },
        computed: {
            sorted_answer_key: function () {
                return this.answer_key.sort((a, b) => {
                    return a.question - b.question;
                })
            }
        },
        methods: {
            addAnswer() {
                const answers = new Answers();

                answers.save({
                    question: this.current_question,
                    answer: this.current_answer
                }).then(obj => {
                    console.log("Saved")
                }, error => {
                    console.log("tatti ho gaya")
                    console.log(error)
                })
            }
        }
    });
}