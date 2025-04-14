const container = document.querySelector("#container");
const btnReset = document.querySelector("#reset");

const CONTAINER_WIDTH = 512;

function drawGrid(squaresPerSide) {
    let size = CONTAINER_WIDTH / squaresPerSide;
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
                let randColor = Math.floor(Math.random() * 16777215);
                let hex = randColor.toString(16);
                e.target.style.background = "#" + hex;
                let opacity = Number(e.target.style.opacity);
                if (opacity < 1) {
                    opacity += 0.1;
                }
                e.target.style.opacity = opacity;
            });
        }
    );
}

btnReset.addEventListener("click", () => {
    let squaresPerSide = prompt("How many cells per side?", 16);
    if (squaresPerSide % 1 != 0) {
        alert("Please insert a whole number.");
        return;
    }
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    squaresPerSide = parseInt(squaresPerSide);
    drawGrid(squaresPerSide);
});

drawGrid(16);