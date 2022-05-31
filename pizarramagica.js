function etchASketch() {
  let wrapper = document.querySelector("#wrapper");
  function createGrid(maxColumns, maxRows, ratio) {
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
    document.querySelectorAll(".grid").forEach((el) => {
      el.addEventListener("mouseover", () => {
        //imagino que no es una solución muy elegante pero no he dado con otra cosa
        function color() {
          if (el.classList.contains("n1")) {
            el.classList.remove("n1");
            el.classList.add("n2");
          } else if (el.classList.contains("n2")) {
            el.classList.remove("n2");
            el.classList.add("n3");
          } else if (el.classList.contains("n3")) {
            el.classList.remove("n3");
            el.classList.add("n4");
          } else {
            el.classList.add("n1");
          }
        }
        color();
      });
    });
  }

  //inicialización por defecto
  createGrid(16, 16, 16);

  //restart
  document.querySelector(".restart").addEventListener("click", () => {
    let unhover = document.querySelectorAll(".grid");
    [].forEach.call(unhover, function (el) {
      el.classList.remove("n1", "n2", "n3", "n4");
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
