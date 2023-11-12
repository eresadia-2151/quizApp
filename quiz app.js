const questions = [
    {
        question: "Who is making the web standards? ",
        answers: [
            { text: "Mozilla", correct: false},
            { text: "Microsoft", correct: false},
            { text: "The World Wide Web Consortiom", correct: true},
            { text: "All of the above", correct: false},
        ]
    },
    {
        question: "  Which of the following is the correct way of creating an hyperlink in HTML?  ",
        answers: [
            { text: "<a>www.geeksforgeeks.org <Geeksforgeeks /a>", correct: false},
            { text: "<a href=“www.geeksforgeeks.org” Geeksforgeeks /a>", correct: false},
            { text: "<a href= “www.geeksforgeeks.org”>Geeksforgeeks</a>", correct: true},
            { text: "<a link=“www.geeksforgeeks.org” Geeksforgeeks> </a>", correct: false},
        ]
    },
    {
        question: "Which of the following HTML Elements is used for making any text bold ?",
        answers: [
            { text: "b", correct: true},
            { text: "'<p>'", correct: false},
            { text: "'<i>'", correct: false},
            { text: "'<li>'", correct: false},
        ]
    },
    { question: "How is document type initialized in HTML5.?",
    answers: [
        { text: "</DOCTYPE HTML>", correct: false},
        { text: "</DOCTYPE>", correct: false},
        { text: "<!DOCTYPE HTML>", correct: true},
        { text: "</DOCTYPE html>", correct: false},
    ]
    },
    {question: "What does HTML stands for?",
    answers: [
        { text: "Hyperlinks and Text Markup Language", correct: false},
        { text: "Home Tool Markup Language", correct: false},
        { text: "Hypertext Machine language.", correct: false},
        { text: "Hyper Text Markup Language", correct: true},
    ]
    },
    {question: "Which of the following characters indicate closing of a tag? ",
    answers: [
        { text: ".", correct: false},
        { text: "/", correct: true},
        { text: "//.", correct: false},
        { text: "!", correct: false},
    ]
    },
    {question: "What is the purpose of using div tags in HTML?",
    answers: [
        { text: "For creating Different styles.", correct: false},
        { text: "For adding headings", correct: false},
        { text: " For creating different sections..", correct: true},
        { text: "For adding titles", correct: false},
    ]
    },
    {
        question: "Which of the following tags is used to add a line-break in HTML?",
    answers: [
        { text: "<br>", correct: true},
        { text: "<br>", correct: false},
        { text: " </break>", correct: false},
        { text: "</br>", correct: false},
    ]
    },
    {
        question: "Which of the following is the correct way to add background color in HTML?",
        answers: [
            { text: "<body color = “green”>", correct: false},
            { text: "<body bg-color = “green”>", correct: false},
            { text: " <body style = “background-color=green”>", correct: false},
            { text: "<body style = “background-color: green;”>", correct: true},
        ]
    },
    {
        question: "Which of the following elements can be used in HTML to create a table?",
        answers: [
            { text: "<table> , <tbody> , <trow", correct: false},
            { text: " <table> , <tb> , <trow>", correct: false},
            { text: " <table> , <tbody> , <tr>", correct: true},
            { text: "All of the above", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " +  currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("Incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
    button.disabled = true;
});
nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = 'you scored $(score) out of ${question.length}!';
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";


}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }

}



nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();

