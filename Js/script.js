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

// we take our button
const playBtn = document.getElementById('playBtn');
console.log(playBtn,'giochiamo');
let userNumbers = [];
console.log(userNumbers,'userNumbers');
let rightNumbers = [];
console.log(rightNumbers,'rightNumbers');
let boxContainer = document.getElementById('boxContainer');
console.log(boxContainer);

// this button will start the game:
playBtn.addEventListener('click', function() {
    let nuovaArray = gnrNum(1,50);
    drawBox(nuovaArray);
});

// this function generates our 5 randomNumbers:
function gnrNum(min, max){
    let numArray = [];
    while (numArray.length < 5) {
        let casualNum = getRndInteger (min, max);
        // console.log(casualNum)
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
    }, 30000)
}};

// Number randomizer function:
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};