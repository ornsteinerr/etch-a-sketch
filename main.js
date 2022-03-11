/* Variables */
let numDivs;
let isGridActive = false;
const gridWidth = 1000;

/* Event listeners */

// Submit number of squares button listener
const numSquareSet = document.querySelector('#numSquareSet');
numSquareSet.addEventListener('click', initiateDivs);


/* Functions */

function initiateDivs(numDivs){

    if (isGridActive === true){
        clearSquares();
    }

    numDivs = document.getElementById('numSquareInput').value;
    console.log(`numDivs: ${numDivs}`);
    const grid = document.querySelector('.grid');

    // Set grid size
    grid.style.width = gridWidth + 'px';;
    grid.style.height = gridWidth + 'px';;

    // Generate squares
    for (let i = 0; i < Math.pow(numDivs, 2); i++){
        const squareDiv = document.createElement('div');
        // Add styling to square
        squareDiv.style.minWidth = (gridWidth / numDivs) + "px";
        console.log(gridWidth / numDivs);
        squareDiv.style.minHeight = (gridWidth / numDivs) + "px";
        squareDiv.classList.add('square');
        // Add square
        grid.appendChild(squareDiv);
    }

    // Add listeners for mouseover to change color
    const squareDivAll = document.querySelectorAll('.square');
    squareDivAll.forEach((square) => {
        square.addEventListener('mouseover', changeColor);
        })

    // Set grid active to true
    isGridActive = true;

}

function changeColor(){
    // Highlight mouseover square
    this.style.backgroundColor = 'yellow';
    // Remove highlight after 500 ms
    setTimeout(() => this.style.backgroundColor = "", 500);
}

function clearSquares(){
    console.log('triggered');
    const squareDivAll = document.querySelectorAll('.square');
    squareDivAll.forEach((square)=>{
        square.remove();
    })
}

/* Slider dynamic display */

// const numSquareInput = document.getElementById('#numSquareInput');
// console.log(numSquareInput.value);
// const numSquares = document.getElementById('#numSquares');
// numSquares.innerHtml = numSquareInput.value;

// numSquareInput.oninput = function (){
//     numSquares.innerHtml = this.value;
// }

const numSquareInput = document.getElementById('numSquareInput');
numDivs = document.getElementById('numSquareInput').value;
const numSquares = document.getElementById('numSquares');
console.log (numDivs);
numSquareInput.addEventListener("input", function(){
    numDivs = document.getElementById('numSquareInput').value;
    numSquares.textContent = numDivs;
})