
let grid = document.getElementById("grid");
let backgroundColor = "black";
let tempColour = backgroundColor;

const gridWidth = grid.clientWidth;
const clear = document.getElementById("clear");
const slider = document.getElementById("slider");
const eraser = document.getElementById("eraser");
const randomColour = document.getElementById("random-colour");


slider.addEventListener("mouseup", () => {
    
    // const squares = document.getElementsByClassName("square");

    // [...squares].forEach((square) => {
    //     grid.removeChild(square);
    // });
    
    resetGrid();

    createGrid();

    document.activeElement.blur();
});


eraser.addEventListener("click", () =>{

    eraser.classList.toggle("eraser-active");

    backgroundColor = tempColour;

    if(backgroundColor === "black"){
        backgroundColor = "white";
        eraser.textContent = "back to black";
    }else if(backgroundColor === "white"){
        backgroundColor = "black";
        eraser.textContent = "eraser"
    }

    tempColour = backgroundColor;
    
});

randomColour.addEventListener("click", () => {
    backgroundColor = null;

    
});


function resetGrid(){

    const additionalFeatures = document.getElementById("additional-features");
    const container = document.getElementById("container");
    
    grid = container.removeChild(grid);
    grid = document.createElement("div");
    grid.setAttribute("id", "grid");

    container.insertBefore(grid, additionalFeatures);

}

function getRandom(){
    return Math.floor(Math.random() * 255);
}

function setHoverState(square){

    square.addEventListener("mouseover", () => {
        
        if(backgroundColor === "white" || backgroundColor === "black"){
            square.style["background-color"] = backgroundColor;
        }else{
            // rgb values
            r = getRandom();
            g = getRandom();
            b = getRandom();

            square.style["background-color"] = `rgb(${r}, ${g}, ${b})`;
        }
    });

}

function getGridRow(){
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
        square.setAttribute("style", `width: ${gridWidth / row}px; 
            height: ${gridWidth / row}px`);
        
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