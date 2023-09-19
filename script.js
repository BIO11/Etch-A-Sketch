let newDiv;

// creates the 16 row containers
let divRowContainers = [];
for (let i = 0; i < 16; i++) {
    newDiv = document.createElement('div');
    newDiv.classList.add("row-container");
    document.body.appendChild(newDiv);
    divRowContainers.push(newDiv);
}

// adds the 16 divs in each container
divRowContainers.forEach(function(rowContainer) {
    for (let i = 0; i < 16; i++) {
        newDiv = document.createElement('div');
        newDiv.classList.add("hover-div");
        rowContainer.appendChild(newDiv);
    }
})

let hoverDivs = document.querySelectorAll(".hover-div");

hoverDivs.forEach(function(hoverDiv) {
    hoverDiv.addEventListener('mouseover', (e) => {
        hoverDiv.style.backgroundColor = "yellow";
    })
})