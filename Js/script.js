// we need to print 5  random numbers on the screen.
// after these numbers will be printed a 30 seconds timer will start.
//after 30 seconds these numbers will disappear.
// the user will be prompted to put the numbers he remember

/* 
random numbers function

let numArray = [here we will put our 5 numbers];
let userNumbers = [here we will save the numbers prompted by the user];
let rightNumbers = [here we will store the right numbers prompted by the user];

while ( numArray.lenght < 5) {
    generate number 
    if not in array .push
    we call the function to print our boxes with the random number
    we append the box to our container
}
return
*/

// we take our button
const playBtn = document.getElementById('playBtn');
console.log(playBtn,'giochiamo');
const randomNumbers = gnrNum(1,50);
console.log(randomNumbers);
let userNumbers = [];
console.log(userNumbers,'userNumbers');
let rightNumbers = [];
console.log(rightNumbers,'rightNumbers');
let boxContainer = document.getElementById('boxContainer');
console.log(boxContainer);
drawBox();

// this button will start the game:
 
playBtn.addEventListener('click', function() {
    gnrNum(1,50);
    setTimeout (function() {
    drawBox.classList.add('invisible')
    }, 30000)
}); 

// this function generates our 5 randomNumbers:
function gnrNum(min, max){
    //console.log('Sono in gnrNum')
    let numArray = [];
    while (numArray.length < 5) {
        let casualNum = getRndInteger (min, max);
        // console.log(casualNum)
    if (!numArray.includes(casualNum)) {
        numArray.push(casualNum);
    }
    }
    // here we print our boxes into our div:
    for (let i = 0; i < 5; i++) {
        drawBox(numArray[i]);
    };
    return numArray;
};


// time function:
function Time() {
    let time = new Date();
    let seconds = time.getSeconds();
    console.log(seconds);
};

// this function will create our boxes with the numbers
function drawBox (){
    const elBox = document.createElement('div');
    return drawBox;
}

// Number randomizer function:
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };