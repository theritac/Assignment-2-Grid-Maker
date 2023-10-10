// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
const grid = document.getElementById("grid");
const all_cells = grid.getElementsByTagName("td");

// Add a row
function addR() {
    let row = grid.insertRow(-1);
    row.setAttribute("row", numRows+1);

    //No current cells exist, just create one cell
    if (numCols == 0) {
        let cell = row.insertCell(-1);
        cell.setAttribute("row", numRows+1);
        cell.setAttribute("col", numCols+1);
        numCols++;
    } else { //Some columns exist, create however many cells are in each row in a new row
        for (let i=0;i<numCols;i++) {
            let cell = row.insertCell();
            cell.setAttribute("row", numRows+1);
            cell.setAttribute("col", i+1);
        }
    }
    
    //Inrease counter
    numRows++;
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}