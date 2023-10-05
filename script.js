window.addEventListener('load', init);

// Globals


//avaliable leavels

const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

//to change leavels
const currentLevel = levels.easy;



let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon",
    "mango",
    "nectarine",
    "orange",
    "peach",
    "quince",
    "raspberry",
    "strawberry",
    "tangerine",
    "watermelon",
    "carrot",
    "broccoli",
    "spinach",
    "potato",
    "tomato",
    "cucumber",
    "onion",
    "garlic",
    "pepper",
    "lettuce",
    "cabbage",
    "pumpkin",
    "zucchini",
    "eggplant",
    "avocado",
    "blueberry",
    "blackberry",
    "cranberry",
    "grapefruit",
    "lime",
    "pear",
    "pineapple",
    "plum",
    "apricot",
    "coconut",
    "pomegranate",
    "watercress",
    "celery",
    "asparagus",
    "cantaloupe",
    "clementine",
    "guava",
    "kiwifruit",
    "papaya",
    "rhubarb",
    "squash",
    "tamarind",
    "turnip",
    "radish",
    "peanut",
    "walnut",
    "almond",
    "cashew",
    "chestnut",
    "hazelnut",
    "macadamia",
    "pecan",
    "pistachio",
    "walnut",
    "javascript",
    "c",
    "java",
    "python",
    "html",
    "css",
    "ruby",
    "php",
    "c++",
    "swift",
    "kotlin",
    "rust",
    "perl",
    "country",
    "city",
    "state",
    "continent",
    "ocean",
    "mountain",
    "river",
    "lake",
    "island",
    "desert",
    "forest",
    "beach"
  ];
  
// initialize game

function init(){
    //show numbers in sec in UI
    seconds.innerHTML = currentLevel;


    //load a word from array
    showWord(words);

    //start matching on word input
    wordInput.addEventListener('input', statMatch);

    //call countdown wvwry second
    setInterval(countdown, 1000);

    //check game status
    setInterval(checkStatus, 50);
}

//start match
function statMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    //if score in -1, display 0
    if(score === -1){
    scoreDisplay.innerHTML = 0;
    }
    else{
    scoreDisplay.innerHTML = score;
    }
}

//match current word to wordInput
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'correct!!!';
        return true
    }
    else{
        message.innerHTML = '';
        return false;
    }
}
//pick a random word

function showWord(words){
    //genarate a random array index
    const ranIndex = Math.floor(Math.random() * words.length);

    //output random word
    currentWord.innerHTML = words[ranIndex];
}

//countdown timer

function countdown(){
    //make sure time is not out

    if(time > 0){
        //decrement
        time--;
    }
    else if(time === 0){
        //game over
        isPlaying = false;
    }

    //show time

    timeDisplay.innerHTML = time;

}

//check status

function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}