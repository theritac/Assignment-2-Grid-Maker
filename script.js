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
//Cells didn't previously exist
if (numRows == 0) {
    let row = grid.insertRow(-1);
    row.setAttribute("row", numRows+1);
    let cell = row.insertCell();
    cell.setAttribute("row", numRows+1);
    cell.setAttribute("col", numCols+1);
    numRows++;
} else { //Rows existed, now add a cell at the end of each row
    for (let i=0;i<numRows;i++) {
        let row = grid.rows[i];
        let cell = row.insertCell();
        cell.setAttribute("row", i+1);
        cell.setAttribute("col", numCols+1);
    }
}

//Increase counter
numCols++;
}

// Remove a row
function removeR() {
    //Rows currently exist
    if (numRows > 0) {
        grid.deleteRow(-1);
        numRows--;

        // Reset numCols since no more cells at all 
        if (numRows == 0) {
            numCols = 0;
        }
    } 

    //Table has no rows
    else
        alert("No rows to remove!");
}

// Remove a column
function removeC() {
    // Check if there are any columns to remove
    if (numRows > 0) {
        for (let i = 0; i < numRows; i++) {
            let row = grid.rows[i];
            // Check if there are cells in the row
            if (numCols > 0) {
                // Remove the last cell in each row
                row.deleteCell(-1);
            }
        }

        // Removed column, decrement numCols variable
        numCols--;
        // Reset numRows since no more cells at all 
        if (numCols === 0) {
            for (let i = 0; i < numRows; i++) {
                grid.deleteRow(-1);
            }
            numRows = 0;
        }
    } else {
        // No columns to remove
        alert("No columns to remove!");
    }
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

// Clear all cells' colors
function clearAllColored(){
    for (let i=0;i<all_cells.length;i++) {
        let cell = all_cells[i];
        cell.style.backgroundColor = "";
    }
}

// Clear the table
function clearTable() {
    if (numRows === 0) {
        alert("Nothing to clear!");
    }

    while (numRows > 0) {
        grid.deleteRow(-1);
        numRows--;
    }

    numRows = 0;
    //Also have to set numCols because only numRows decremented in the loop
    numCols = 0;
}

// Fill only the clicked cell
function fillClickedCell(row, col) {
    //colorSelected === "SELECT" is for if the user switches from a color back to the select option
    //!colorSelected is for if the user never changed color in the first place aka undefined
    if (colorSelected === "SELECT" || !colorSelected) {
        alert("Select a color first!");
    } else {
        //Cell with the row and col data attributes
        let cell = document.querySelector(`td[row="${row}"][col="${col}"]`);
        cell.style.backgroundColor = colorSelected;
    }
}

// Fill all uncolored cells
function fillU(){
    //colorSelected === "SELECT" is for if the user switches from a color back to the select option
    //!colorSelected is for if the user never changed color in the first place aka undefined
    if (colorSelected === "SELECT" || !colorSelected) {
        alert("Select a color first!");
    } else {
        for (let i=0;i<all_cells.length;i++) {
            let cell = all_cells[i];
            if (cell.style.backgroundColor === "") {
                cell.style.backgroundColor = colorSelected;
            }
        }
    }
}