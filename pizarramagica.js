function etchASketch() {
  let wrapper = document.querySelector("#wrapper");
  if (screen.height / screen.width < 16 / 9) {
    for (columns = 1; columns < 17; columns++) {
      for (row = 1; row < 17; row++) {
        let gridrow = document.createElement("div");
        gridrow.classList.add("grid", "row");
        Object.assign(gridrow.style, {
          gridRowStart: row,
          gridRowEnd: row,
          gridColumnStart: columns,
          gridColumnEnd: columns,
        });
        wrapper.appendChild(gridrow);
      }
    }
  } else if (screen.height / screen.width >= 16 / 9) {
    for (columns = 1; columns < 27; columns++) {
      for (row = 1; row < 17; row++) {
        let gridrow = document.createElement("div");
        gridrow.classList.add("grid", "row");
        Object.assign(gridrow.style, {
          gridRowStart: row,
          gridRowEnd: row,
          gridColumnStart: columns,
          gridColumnEnd: columns,
        });
        wrapper.appendChild(gridrow);
      }
    }
  }

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
}
window.onload = etchASketch;
