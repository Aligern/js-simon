// we need to print 5 numbers on the screen.
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
const buttonGenerate = document.getElementById('playBtn');

const randomNumbers = gnrNum(1,50);

let userNumbers = [];

let rightNumbers = [];

console.log(randomNumbers);

let boxContainer = document.getElementById('boxContainer');

drawBox();

// buttonGenerate.addEventListener( 'click', function() ) {

// };


// this function generates our 5 randomNumbers:
function gnrNum(min, max){
    //console.log('Sono in gnrNum')
    let numArray = [];
    while (numArray.length < 5) {
        let randomNum = getRndInteger (min, max);
        // console.log(randomNum)
    if (!numArray.includes(randomNum)) {
        numArray.push(randomNum);
    }
    }
    
//    // appendo al contenitore il box

//    // timer here
    
    return numArray;
};



// this function will create our boxes with the numbers
function drawBox (){
    const elBox = document.createElement('div');
    boxContainer.appendChild(elBox);
    elBox.classList.add('classi qui');
    //return the created box
};


// Number randomizer function:
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };