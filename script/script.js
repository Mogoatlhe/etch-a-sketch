
let grid = document.getElementById("grid");
let backgroundColor = "black";
let tempColour = backgroundColor;
let buildValue = 0;

const gridWidth = grid.clientWidth;
const clear = document.getElementById("clear");
const slider = document.getElementById("slider");
const eraser = document.getElementById("eraser");
const randomColour = document.getElementById("random-colour");
const buildColourbtn = document.getElementById("build-colour");


slider.addEventListener("input", () => {
    
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
        eraser.textContent = "black pen";
    }else if(backgroundColor === "white"){
        backgroundColor = "black";
        eraser.textContent = "eraser"
    }

    tempColour = backgroundColor;
    
});

randomColour.addEventListener("click", () => {
    backgroundColor = null;
});

buildColourbtn.addEventListener("click", () => {
    backgroundColor = "build";
})

function setBuildColour(rgbValue){

    if(parseInt(rgbValue) === 0){
        buildValue = rgbValue;
        return;
    }
    
    if(rgbValue === 255){
        buildValue = 229;
    }else if(rgbValue >= 229){
        buildValue = 204;
    }else if (rgbValue >= 204){
        buildValue = 178;
    }else if (rgbValue >= 178){
        buildValue = 153;
    }else if (rgbValue >= 153){
        buildValue = 127
    }else if (rgbValue >= 127){
        buildValue = 102;
    }else if (rgbValue >= 102){
        buildValue = 76;
    }else if(rgbValue >= 76){
        buildValue = 50;
    }else if (rgbValue >= 50){
        buildValue = 25;
    }else if(rgbValue >= 25){
        buildValue = 0;
    }
}

function getBackgroundColor(colour){

    if(colour === "" || colour === "white"){
        return 255;
    }

    if(colour === "black"){
        return 0;
    }

    return parseInt(colour.slice(4, colour.indexOf(',')));

}


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
        }else if(backgroundColor == "build"){
            let rgbValue = getBackgroundColor(square.style["background-color"]);

            setBuildColour(rgbValue);
            
            square.style["background-color"] = `rgb(${buildValue}, ${buildValue}, ${buildValue})`;
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

    // creates grid squares
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
            square.style["background-color"] = "white";
        });    
    });
}

createGrid();