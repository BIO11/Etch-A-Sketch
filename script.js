let newDiv;
let board = document.querySelector(".board");
let rows = 16;
let cols = 16;

// creates the 16 row containers
let divRowContainers = [];
for (let i = 0; i < rows; i++) {
    newDiv = document.createElement('div');
    newDiv.classList.add("row-container");
    board.appendChild(newDiv);
    divRowContainers.push(newDiv);
}

// adds the 16 divs in each container
divRowContainers.forEach(function(rowContainer) {
    for (let i = 0; i < cols; i++) {
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

const resetButton = document.querySelector(".reset");
resetButton.addEventListener('click', () => {
    hoverDivs.forEach(function(hoverDiv) {
        hoverDiv.style.backgroundColor = "white";
    })
})