// we need to print 5  random numbers on the screen.
// after these numbers will be printed a 30 seconds timer will start.
//after 30 seconds these numbers will disappear.
// the user will be prompted to put the numbers he remember

// we take our buttons
const playBtn = document.getElementById('playBtn');
const resultButton = document.getElementById('result');
// here we have our variables:
let userNumbers = [];
console.log(userNumbers,'userNumbers');
let rightNumbers = [];
console.log(rightNumbers,'rightNumbers');
let boxContainer = document.getElementById('boxContainer');
console.log(boxContainer);
let boxContainer2 = document.getElementById('boxContainer2');
console.log(boxContainer2);
let numArray = [];

// this button will start the game:
playBtn.addEventListener('click', function() {
    boxContainer2.classList.add('d-none');
    console.log('giochiamo');
    let nuovaArray = gnrNum(1,100);
    drawBox(nuovaArray);
    playBtn.disabled = true;
});

// this is our result button:
resultButton.addEventListener('click', function(){
    console.log('risultato');
    let userInput1 = parseInt(document.getElementById('numberInput1').value);
    let userInput2 = parseInt(document.getElementById('numberInput2').value);
    let userInput3 = parseInt(document.getElementById('numberInput3').value);
    let userInput4 = parseInt(document.getElementById('numberInput4').value);
    let userInput5 = parseInt(document.getElementById('numberInput5').value);
    // we put our values into an array:
    userNumbers = [userInput1,userInput2,userInput3,userInput4,userInput5];
    console.log(userNumbers);
    // we compare the two arrays:
    let correct = true ;
    for (let i = 0; i < 5; i++) {
        if(userNumbers[i] !== numArray[i]) {
            correct = false;
        }
    } 
    if (correct) {
        boxContainer2.innerHTML = '<h2>HAI VINTO!</h2>';
        console.log("hai vinto!");
    } else {
        boxContainer2.innerHTML = '<h2>HAI PERSO!</h2>';
        console.log("hai sbagliato!");
    }
    playBtn.disabled = false;
});

// this function generates our 5 randomNumbers:
function gnrNum(min, max){
    while (numArray.length < 5) {
        let casualNum = getRndInteger (min, max);
        console.log(casualNum);
    if (!numArray.includes(casualNum)) {
        numArray.push(casualNum);
    }
    }
    return numArray;
};

// this function will create our boxes with the numbers
function drawBox (array){
    boxContainer.innerHTML = '';
    for (let i = 0; i < 5; i++) {
    const elBox = document.createElement('div');
    elBox.classList.add('box');
    elBox.textContent = array[i];
    boxContainer.appendChild(elBox);
    // here we set the timeout and what the machine will have to do after the timeout ends
    setTimeout (function() {
    elBox.classList.add('d-none');
    boxContainer2.classList.remove('d-none');
    }, 30000)
}};


// Number randomizer function:
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};