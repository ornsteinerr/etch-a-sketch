/* Variables */
let numDivs;
let isGridActive = false;
let mode = "rainbow";
const GRID_WIDTH = 1000;


/* Initiate grid by the size set by the user*/ 

const numSquareSetButton = document.querySelector('#numSquareSetButton');
numSquareSetButton.addEventListener('click', initiateDivs); 

function initiateDivs(numDivs){

    // Clear grid for any past sketches
    if (isGridActive === true){
        clearSquares();
    }

    numDivs = document.getElementById('numSquareInput').value;
    const grid = document.querySelector('.grid');

    // Set grid size
    grid.style.width = GRID_WIDTH + 'px';;
    grid.style.height = GRID_WIDTH + 'px';;

    // Generate squares
    for (let i = 0; i < Math.pow(numDivs, 2); i++){
        const squareDiv = document.createElement('div');
        // Add min width and height to square
        squareDiv.style.minWidth = (GRID_WIDTH / numDivs) + "px";
        squareDiv.style.minHeight = (GRID_WIDTH / numDivs) + "px";
        squareDiv.classList.add('square');
        // Disable dragging
        squareDiv.ondragstart = () => {
            return false;
        }
        // Add square
        grid.appendChild(squareDiv);
    }

    // Add listeners for mouseover to manipulate colors
    const squareDivAll = document.querySelectorAll('.square');
    squareDivAll.forEach((square) => {
        square.addEventListener('mouseover', changeColor);
        square.addEventListener('click', changeColor);
        })
    
    // Disable dragging
    grid.ondragstart = () => {
        return false;
    }
    
    // Set grid active to true
    isGridActive = true;

    // Add clear button
    const tools = document.querySelector("#tools");
    tools.classList.remove("hidden");

}

function changeColor(e){
    // Prevent coloring when mouseover and mouse is not held down
    if (e.type === 'mouseover' && !mouseDown){
        return;
    }
    switch (mode){
        case "rainbow":
            this.style.backgroundColor = '#' + getRandomColor();
            return;
        case "erase":
            this.style.backgroundColor = "";
            return;
        case "color":
            let selectedColor = document.getElementById("colorPicker").value;
            this.style.backgroundColor = selectedColor;
            return;
    }
}

function getRandomColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function clearSquares(){
    const squareDivAll = document.querySelectorAll('.square');
    squareDivAll.forEach((square)=>{
        square.remove();
    })
}

/* User sets the coloring mode */ 

// Mode listeners
const modeButton = document.querySelectorAll('.mode');
modeButton.forEach((button) => {
    button.addEventListener('click', setMode);
})


function setMode(){
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach((button) => {
        button.classList.remove('active');
    })
    this.classList.toggle('active');
    mode = this.name;
}


/* User clears the grid */

const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", clearColors);

function clearColors(){
    const squareDivAll = document.querySelectorAll('.square');
    squareDivAll.forEach((square)=>{
        square.style.backgroundColor = '';
    })
}

/* Slider */

const numSquareInput = document.getElementById('numSquareInput');
const numSquares = document.getElementById('numSquares');
numSquareInput.addEventListener("input", function(){
    // Update slider value
    numDivs = document.getElementById('numSquareInput').value;
    numSquares.textContent = `${numDivs} x ${numDivs}`;
})

/* Supporting listeners*/

// Listener for mouseholds
const body = document.querySelector('body');
let mouseDown = false;
body.addEventListener('mousedown', function(){
    mouseDown = true;
 })
body.addEventListener('mouseup', function(){
     mouseDown = false;
 })

// Color picker listener
const colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener('change', function(){
    // Automatically select color mode if a color is picked
    colorButton.click();
})
