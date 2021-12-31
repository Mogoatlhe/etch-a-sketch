
const container = document.getElementById("container");
const containerHeight = container.clientHeight;
const containerWidth = container.clientWidth;

let row = 64;

function createGrid(row){

    const squareCount = row ** 2;

    for(let i = 0; i < squareCount; i++){
        let square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("style", `width: ${containerHeight / row}px; 
            height: ${containerHeight / row}px`);
        
        container.appendChild(square);
    }

}

createGrid(row);