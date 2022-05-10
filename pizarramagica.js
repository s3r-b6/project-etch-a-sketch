function etchASketch() {
  let wrapper = document.querySelector("#wrapper");
  function createGrid(maxColumns, maxRows, ratio) {
    //estaba pasando el maxColumns y el maxRows como strings así que al sumar uno daba un dígito más....
    for (columns = 1; columns < parseInt(maxColumns) + 1; columns++) {
      for (row = 1; row < parseInt(maxRows) + 1; row++) {
        let grid = document.createElement("div");
        let size = 75 / ratio;
        grid.classList.add("grid");
        //propiedades css grid
        Object.assign(grid.style, {
          gridRowStart: row,
          gridRowEnd: row,
          gridColumnStart: columns,
          gridColumnEnd: columns,
          width: size + "vh",
          height: size + "vh",
        });
        wrapper.appendChild(grid);
      }
    }
    //colorear al pasar el ratón
    let hoveredGrid = document.querySelectorAll(".grid");
    hoveredGrid.forEach((el) => {
      el.addEventListener("mouseover", () => {
        el.classList.add("hover");
      });
    });
  }

  //inicialización por defecto
  createGrid(16, 16, 16);

  //restart
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
    let numRows = document.getElementById("adjust-row").value;
    let numCols = document.getElementById("adjust-col").value;
    let ratio = Math.min(numRows, numCols);
    console.log(numRows, numCols, ratio);
    if (numRows > 0 && numCols > 0 && numRows < 101 && numCols < 101) {
      while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.lastChild);
      }
      createGrid(numRows, numCols, ratio);
    } else {
      window.alert("Valor inválido! Rango aceptado [1-100]");
      document.querySelector("#adjust-pop").classList.remove("inv");
    }
  });
}
window.onload = etchASketch;
