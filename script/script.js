
const clear = document.getElementById("clear");
const grid = document.getElementById("grid");
const gridHeight = grid.clientHeight;

function setHoverState(square){

    square.addEventListener("mouseover", () => {
        square.classList.add("black-background");
    });

}

function getGridRow(){
    const slider = document.getElementById("slider");
    const sliderValue = slider.value;

    document.getElementById("slider-value").textContent = sliderValue;

    return sliderValue;
}

function createGrid(){

    const row = parseInt(getGridRow());
    const squareCount = row ** 2;

    for(let i = 0; i < squareCount; i++){
        let square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("style", `width: ${gridHeight / row}px; 
            height: ${gridHeight / row}px`);
        
        grid.appendChild(square);
    }

    const squares = document.getElementsByClassName("square");
    [...squares].forEach((square) => {
        setHoverState(square);
    });

    clear.addEventListener("click", () => {
        [...squares].forEach((square) => {
            square.classList.remove("black-background");
        });    
    });
}


createGrid();