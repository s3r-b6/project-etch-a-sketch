function etchASketch() {
  let wrapper = document.querySelector("#wrapper");
  function createGrid(maxColumns, maxRows) {
    for (columns = 1; columns < maxColumns + 1; columns++) {
      for (row = 1; row < maxRows + 1; row++) {
        let gridrow = document.createElement("div");
        gridrow.classList.add("grid", "row");
        Object.assign(gridrow.style, {
          gridRowStart: row,
          gridRowEnd: row,
          gridColumnStart: columns,
          gridColumnEnd: columns,
          /*width: calc(75vh/maxRows),
          height: calc(75vh/maxRows),*/
        });
        wrapper.appendChild(gridrow);
      }
    }
  }
  //inicialización por defecto
  createGrid(16, 16);

  let hoveredGrid = document.querySelectorAll(".grid");
  [].forEach.call(hoveredGrid, function (el) {
    el.addEventListener("mouseover", () => {
      el.classList.add("hover");
    });
  });

  let restartButton = document.querySelector(".restart");
  restartButton.addEventListener("click", () => {
    let unhover = document.querySelectorAll(".hover");
    [].forEach.call(unhover, function (el) {
      el.classList.remove("hover");
    });
  });

  //ajuste
  document.querySelector(".adjust").addEventListener("click", () => {
    document.querySelector("#adjust-pop").classList.remove("inv");
  });

  document.querySelector("#submit-inp").addEventListener("click", () => {
    document.querySelector("#adjust-pop").classList.add("inv");
  });

  document.querySelector("#submit-inp").addEventListener("click", () => {
    let numRows = document.getElementById("adjust-row").value;
    let numCols = document.getElementById("adjust-col").value;
    console.log(numRows, numCols);
    if (numRows > 0 && numCols > 0 && numRows < 101 && numCols < 101) {
      while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.lastChild);
      }
      createGrid(numRows, numCols);
    } else {
      prompt("Valor inválido! Rango aceptado [1-100]");
    }
  });
}
window.onload = etchASketch;

/*
<input id="name" type="text">
<button onclick="go()">Go</button>
And a simple script to go with it that is called when the button is clicked:

function go() {
    var text = document.getElementById("name").value;
    alert("The user typed '" + text + "'");
}

*/
