// Initialize 16x16 grid of square divs

initiateDivs(16);

function initiateDivs(numDivs){
    const grid = document.querySelector('.grid');

    // Set grid size
    const gridWidth = 1000;
    grid.style.width = gridWidth + 'px';;
    grid.style.height = gridWidth + 'px';;

    // Generate squares
    for (let i = 0; i < numDivs; i++){
        const squareDiv = document.createElement('div');
        // Add styling to square
        squareDiv.style.minWidth = (gridWidth / 4 - 10) + "px";
        console.log(gridWidth / 4 / 10);
        squareDiv.style.minHeight = (gridWidth / 4 - 10) + "px";
        squareDiv.classList.add('square');
        // Add square
        grid.appendChild(squareDiv);
    }

    const squareDivAll = document.querySelectorAll('.square');
    squareDivAll.forEach((square) => {
        square.addEventListener('mouseover', changeColor);
        })
}

function changeColor(){
    // Highlight mouseover square
    this.style.backgroundColor = 'yellow';
    // Remove highlight after 500 ms
    setTimeout(() => this.style.backgroundColor = "", 500);
}