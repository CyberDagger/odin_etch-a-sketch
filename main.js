const container = document.querySelector("#container");

const CONTAINER_WIDTH = 512;

function drawGrid(squaresPerSide) {
    let size = Math.floor(CONTAINER_WIDTH / squaresPerSide);
    let numberCells = squaresPerSide ** 2;
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.height = size + "px";
    cell.style.width = size + "px";
    for (let i = 0; i < numberCells; i++) {
        container.appendChild(cell.cloneNode(true));
    }
}

drawGrid(16);