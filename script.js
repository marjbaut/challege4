// QUESTION ARRAY [ question, option, correct answer]
var Questions = [
    {
        number: 1,
        question: 'What is the  80 % 2:',
        options: ['9', '0', '12'],
        correctAnswer: '0'
    },
    {
        number: 2,
        question: 'What is the 90 / 9 ',
        options: ['3', '50', '9'],
        correctAnswer: '10'
    },
    {
        number: 3,
        question: 'What is the  8 * 4:',
        options: ['12', '32', '84'],
        correctAnswer: '12'
    }
];
//TIME BOX
var timerBox = document.querySelector('.timerBox');
var timeLeft = document.querySelector('.timeLeft')
//Intro Box
var introBox = document.querySelector(".intro");
var startButton = document.querySelector('.startQuiz');
//Quiz question Box
var quizBox = document.querySelector('.quizContainer');
var que_text = document.querySelector('.que_text');
var option_list = document.querySelector(".option-list");
var quest_result = document.querySelector('.q-result');
//Result Box
var resultBox = document.querySelector('.resultBox');
var newData =  document.getElementById('userName').value;

var score = document.querySelector('.score');

startButton.addEventListener('click', function () {
    showTimer(sec);
    showQuestions(que_count);
});

var sec = 60;
var que_count = 0;
var que_numb = 1;
var userScore = 0;
var counter;
var counterLine;
var widthValue;
var timer;
var arr = [];
function showQuestions(index) {

    const que_text = document.querySelector('.que_text');

    var que_tag = '<span>' + Questions[index].number + '.  ' + Questions[index].question + "</span>";

    var option_tag =
        '<div class="option"><span>' + Questions[index].options[0] + '</span></div>' +
        '<div class="option"><span>' + Questions[index].options[1] + '</span></div>' +
        '<div class="option"><span>' + Questions[index].options[2] + '</span></div>';
    que_text.innerHTML = que_tag;

    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");

    for (i = 0; i < option.length; i++) {
        console.log("forloop option");
        console.log(option[i].textContent);
        option[i].setAttribute('onclick', "optionSelected(this)");
    }
}
function optionSelected(answer) {
    console.log(answer);
    console.log(answer.textContent);
    console.log(Questions[que_count].correctAnswer);
    if (answer.textContent == Questions[que_count].correctAnswer) {
        console.log('answer correct');
    } else {
        //deduct time 
        showTimer(getSec() - 5);
        console.log('WRONG!time was deducted');
    }
    que_count++;
    if (que_count > 2) {
        console.log('test if over, show result box')
         showResultBox();
        getSec();
    } else {
        showQuestions(que_count);
    }
}

function showResultBox() {
    resultBox;
    score.innerHTML =  getSec();

};

var saveButton = document.getElementById('save');
var viewButton = document.getElementById('view');

saveButton.addEventListener('click',function save(newData){
localStorage.setItem('data', newData);
    localStorage.setItem('data', score);
    console.log("you clicked save");
    // // get old data
    // var oldData = localStorage.getItem('data');
    // // oldData.push(newData);
    // // save the old + new data to local storage
    
    console.log (localStorage.setItem('data', newData));
    console.log (score.value);
});
viewButton.addEventListener('click', function view(){
 if(localStorage.getItem('data') !=null){
       var outputlist=  document.getElementsByClassName('.output').innerHTML = localStorage.getItem('data');
    }
});

function showTimer(sec) {
    timer = setInterval(function () {
        timeLeft.innerHTML = sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }

    }, 1000)
};
function getSec(){
    clearInterval(timer);
    var remainSec = timeLeft.textContent;
    console.log("Timer now: "+ remainSec);
    return remainSec;
};