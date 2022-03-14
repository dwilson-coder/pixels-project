// Imports values and set global variables //
// *** Page elements *** //
var canvas = document.getElementById("pixelCanvas");
var color = document.getElementById("colorPicker");
var sizePicker = document.getElementById("sizePicker");

// *** Canvas size and color *** //
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");

// ****** //

//Create the grid and listed for mouse events
function makeGrid(height, width) {
  for (let y = 0; y < height; y++) {
    let row = canvas.insertRow(y);
    for (let x = 0; x < width; x++) {
      let cell = row.insertCell(x);
      cell.addEventListener("mousedown", function (clickCell) {
        cell.style.backgroundColor = color.value;
        cell.addEventListener("contextmenu", function (clickCell) {
          clickCell.preventDefault();
          cell.style.backgroundColor = "white";
        });
      });
    }
  }
}

//function that uses the size picker submit to call makeGrid() funtion
sizePicker.addEventListener("submit", function (clickCell) {
  clickCell.preventDefault();
  while (canvas.hasChildNodes()) {
    canvas.removeChild(canvas.lastChild);
  }
  makeGrid(height.value, width.value);
});
