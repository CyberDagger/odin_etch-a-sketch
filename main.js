const container = document.querySelector("#container");

const CONTAINER_WIDTH = 512;

function drawGrid(squaresPerSide) {
    let size = Math.floor(CONTAINER_WIDTH / squaresPerSide);
    let numberCells = squaresPerSide ** 2;
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.style.height = size + "px";
    newCell.style.width = size + "px";
    for (let i = 0; i < numberCells; i++) {
        container.appendChild(newCell.cloneNode(true));
    }
    const cellList = document.querySelectorAll(".cell");
    cellList.forEach(
        (cell) => {
            cell.addEventListener("mouseover", (e) => {
                e.target.style.background = "black";
            });
        }
    );
}

drawGrid(16);