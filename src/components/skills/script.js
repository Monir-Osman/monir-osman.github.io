const table = document.querySelector(".skills__table");

const height = table.clientHeight;
const width = table.clientWidth;

table.addEventListener("mousemove", handleMove);

function handleMove(e) {
  console.log(e);

  const xVal = e.layerX;
  const yVal = e.layerY;

  const yRotation = 20 * ((xVal - width / 2) / width);
  const xRotation = -20 * ((yVal - height / 2) / height);

  const string =
    "perspective(500px) scale(1.1) rotateX(" + xRotation + "deg) rotateY(" + yRotation + "deg)";

  table.style.transform = string;
}

table.addEventListener("mouseout", function () {
  table.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
});

table.addEventListener("mousedown", function () {
  table.style.transform = "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
});

table.addEventListener("mouseup", function () {
  table.style.transform = "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
});
