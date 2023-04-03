const quizDB =[{
    Question: "Q1: What is the full form of HTML?",
    a:"Hello To My Hand",
    b:"Hey Text Markup Language",
    c:"HyperText Markup Language",
    d:"Hypertext Markup Language",
ans:"ans4"
},
{
    Question: "Q2: What is the full form of CSS?",
    a:"Cascading Style Sheets",
    b:"Cascading Style Sheep",
    c:"Cartoon Style Sheets",
    d:"Cascading Super Sheets",
ans:"ans1"
},
{
    Question: "Q3: What is the full form of HTTP?",
    a:"Hypertext Transfer Product",
    b:"Hypertext Text Protocol",
    c:"Hey Tranfer Protocol",
    d:"Hypertext Transfer Protocol",
ans:"ans4"
},
{
    Question: "Q4: What is the full form of JS?",
    a:"Javascript",
    b:"JavaSuper",
    c:"JustScript",
    d:"JordenShoes",
ans:"ans1"
},
];
var question =document.querySelector(".question")
var option1 =document.querySelector("#option1")
var option2 =document.querySelector("#option2")
var option3 =document.querySelector("#option3")
var option4 =document.querySelector("#option4")
var submit =document.querySelector("#submit")
var answers =document.querySelectorAll(".answer")

const showScore =document.querySelector("#showScore")

let questionCount=0;
let score=0;

const loadQuestion=()=>{
const questionList =quizDB[questionCount];
question.innerText = questionList.Question;
option1.innerText =questionList.a;
option2.innerText =questionList.b;
option3.innerText =questionList.c;
option4.innerText =questionList.d;
}

loadQuestion();

const getans = () =>{
    let answer;
    answers.forEach((curAns) => {
        if(curAns.checked){
answer =curAns.id;
        }
    });
    return answer;

};

const deselectAll=()=>{
    answers.forEach((curElem)=>{
        curElem.checked=false;
    })
}

submit.addEventListener('click',()=>{
    const checkedAnswer =getans();
console.log(checkedAnswer)
if(checkedAnswer===quizDB[questionCount].ans){
score++;
}
questionCount++;
deselectAll();
if(questionCount <quizDB.length){
    loadQuestion();
}else{
    showScore.innerHTML =`
    <h3> You scored ${score}/${quizDB.length} ✌</h3>
    <button class='btn' onclick='location.reload()' >Play Again</button>
    `;
    showScore.classList.remove('scoreArea')
}

})