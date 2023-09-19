let newDiv;

const gridButton = document.querySelector(".change-grid-size");

// removes board div and creates another one
gridButton.addEventListener('click', () => {
    const board = document.querySelector(".board");
    document.body.removeChild(board);
    squares = prompt("How many squares per side?");
    createGrid(squares);
})

// function sets up board, called at the start and whenever grid size changes
function createGrid(squares) {
    let board = document.createElement("div");
    board.classList.add("board");
    document.body.insertBefore(board, resetButton);

    // creates the row containers
    let divRowContainers = [];
    for (let i = 0; i < squares; i++) {
        newDiv = document.createElement('div');
        newDiv.classList.add("row-container");
        board.appendChild(newDiv);
        divRowContainers.push(newDiv);
    }

    // adds the divs in each container
    divRowContainers.forEach(function(rowContainer) {
        for (let i = 0; i < squares; i++) {
            newDiv = document.createElement('div');
            newDiv.classList.add("hover-div");
            rowContainer.appendChild(newDiv);
        }
    })

    let hoverDivs = document.querySelectorAll(".hover-div");

    hoverDivs.forEach(function(hoverDiv) {
        hoverDiv.addEventListener('mouseover', (e) => {
            hoverDiv.style.backgroundColor = "brown";
        })
    })
        
}

const resetButton = document.querySelector(".reset");
resetButton.addEventListener('click', () => {
    hoverDivs.forEach(function(hoverDiv) {
        hoverDiv.style.backgroundColor = "white";
    })
})

createGrid(16); //default # of squares is 16