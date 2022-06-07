let questionsHTML = [
    {
        "id": "1",
        "category": "HTML",
        "question": "Wofür steht HTML?",
        "answers": {
            "A": "Antwort 1",
            "B": "Antwort 2",
            "C": "HTML steht für Hypertext Markup Language.",
            "D": "Antwort 4"
        },
        "right_answer": "C"
    },
    {
        "id": "2",
        "category": "HTML",
        "question": "Wofür steht HTML?",
        "answers": {
            "A": "Antwort 1",
            "B": "Antwort 2",
            "C": "HTML steht für Hypertext Markup Language.",
            "D": "Antwort 4"
        },
        "right_answer": "C"
    },
    {
        "id": "3",
        "category": "HTML",
        "question": "Wofür steht HTML?",
        "answers": {
            "A": "Antwort 1",
            "B": "Antwort 2",
            "C": "HTML steht für Hypertext Markup Language.",
            "D": "Antwort 4"
        },
        "right_answer": "C"
    },
    {
        "id": "4",
        "category": "HTML",
        "question": "Wofür steht HTML?",
        "answers": {
            "A": "Antwort 1",
            "B": "Antwort 2",
            "C": "HTML steht für Hypertext Markup Language.",
            "D": "Antwort 4"
        },
        "right_answer": "C"
    },
    {
        "id": "5",
        "category": "HTML",
        "question": "Wofür steht HTML?",
        "answers": {
            "A": "Antwort 1",
            "B": "Antwort 2",
            "C": "HTML steht für Hypertext Markup Language.",
            "D": "Antwort 4"
        },
        "right_answer": "C"
    },
    {
        "id": "6",
        "category": "HTML",
        "question": "Wofür steht HTML?",
        "answers": {
            "A": "Antwort 1",
            "B": "Antwort 2",
            "C": "HTML steht für Hypertext Markup Language.",
            "D": "Antwort 4"
        },
        "right_answer": "C"
    },
    {
        "id": "7",
        "category": "HTML",
        "question": "Wofür steht HTML?",
        "answers": {
            "A": "Antwort 1",
            "B": "Antwort 2",
            "C": "HTML steht für Hypertext Markup Language.",
            "D": "Antwort 4"
        },
        "right_answer": "C"
    },
    {
        "id": "8",
        "category": "HTML",
        "question": "Wofür steht HTML?",
        "answers": {
            "A": "Antwort 1",
            "B": "Antwort 2",
            "C": "HTML steht für Hypertext Markup Language.",
            "D": "Antwort 4"
        },
        "right_answer": "C"
    },
    {
        "id": "9",
        "category": "HTML",
        "question": "Wofür steht HTML?",
        "answers": {
            "A": "Antwort 1",
            "B": "Antwort 2",
            "C": "HTML steht für Hypertext Markup Language.",
            "D": "Antwort 4"
        },
        "right_answer": "C"
    },
    {
        "id": "10",
        "category": "HTML",
        "question": "Wofür steht HTML?",
        "answers": {
            "A": "Antwort 1",
            "B": "Antwort 2",
            "C": "HTML steht für Hypertext Markup Language.",
            "D": "Antwort 4"
        },
        "right_answer": "C"
    }
]

function init(i) {
    //startScreen();
    //endScreen();
    renderMainCard(i);
}

function startScreen() {
    let startScreen = document.getElementById("start_screen");
    startScreen.innerHTML = "";

    startScreen.innerHTML = /*html*/ `
        <h1>Herzlich Willkommen!</h1>
        <span>Quiz starteten ...</span>
        <button id="start_btn" class="btn btn-primary btn-lg" role="button">
        Jetzt starten
        </button>
    `;
}

function renderMainCard(i) {
    let mainCard = document.getElementById("mainCard");
    mainCard.innerHTML = ""; 

    //for (let i = 0; i < questionsHTML.length; i++) {
    //    const quest = questionsHTML[i];
        mainCard.innerHTML = /*html*/ `
            <div id="question" class="jumbotron" >
                <h2>Frage <span id="qno"></span></h2>
                <div class="mb-4">Was macht man mit einer Programmiersprache?</div>
            </div>
            <div class="row answer">
                <div class="card">
                <div class="card-body">Antwort 1.</div>
                </div>
                <div class="card">
                <div class="card-body">Antwort 2.</div>
                </div>
                <div class="card">
                <div class="card-body">Antwort 3.</div>
                </div>
                <div class="card">
                <div class="card-body">Antwort 4.</div>
                </div>
                <div class="bottomCard">
                <div class="counter">
                    <span><b>1</b> von <b>5</b> Fragen</span>
                </div>
                <div class="nextQuestion">
                    <button class="btn btn-primary">nächste Frage</button>
                </div>
            </div>
        `;
    //}
}

function endScreen() {
    let endScreen = document.getElementById("over");
    endScreen.innerHTML = "";

    endScreen.innerHTML = /*html*/ `
        <h1>Das Quiz ist vorbei!</h1>
        Dein Punktestand ist: <span id="endpoints">0</span> von
        <span id="possiblepoints">0</span>
        <button class="restart btn btn-primary btn-lg" role="button">
            Nochmal starten
        </button>
    `;
}

// function startAgain() {

// }