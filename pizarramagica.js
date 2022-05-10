function etchASketch() {
  let wrapper = document.querySelector("#wrapper");
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
}
window.onload = etchASketch;
