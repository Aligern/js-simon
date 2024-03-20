// we need to print 5  random numbers on the screen.
// after these numbers will be printed a 30 seconds timer will start.
//after 30 seconds these numbers will disappear.
// the user will be prompted to put the numbers he remember

/* 
random numbers function

let numArray = [here we will put our 5 numbers];
let userNumbers = [here we will save the numbers prompted by the user];
let rightNumbers = [here we will store the right numbers prompted by the user];

*/

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


// this button will start the game:
playBtn.addEventListener('click', function() {
    console.log('giochiamo');
    boxContainer2.classList.add('d-none');
    let nuovaArray = gnrNum(1,100);
    drawBox(nuovaArray);
});

resultButton.addEventListener('click', function(){
    console.log('risultato');
});

// this function generates our 5 randomNumbers:
function gnrNum(min, max){
    let numArray = [];
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
    // here we set
    setTimeout (function() {
    elBox.classList.add('invisible')
    boxContainer2.classList.remove('d-none');
    }, 5000)
}};


// Number randomizer function:
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

// still need to do: 
/*
A prompt from the user will be required after the timeout,
the machine will print to the user a message wich will ask to put the numbers he remembers
after the user 'click' on our "result" btn the machine will do a verification between the
first numbers we printed and those the user will put in.
if the check is correct the machine will print an "Hai vinto!" message and the game will end.
if the check is not correct the machine will print a different message: "hai sbagliato!" then end the game.
*/