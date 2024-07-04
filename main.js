let container = document.getElementById("app");

let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");

let active;

option1.addEventListener("click", (e) => (active = e.target.value));
option2.addEventListener("click", (e) => (active = e.target.value));
option3.addEventListener("click", (e) => (active = e.target.value));

const colorsArr = [
  "#d188d1",
  "#cae22c",
  "#324cd0",
  "#9cd188",
  "#e116c9",
  "#83ea2f",
];

// Clear active color button to revert to rainbow

const clear = document.getElementById("clear");
clear.addEventListener("click", (e) => (active = ""));

// Clear entire etch-a-sketch
const resetPanel = document.getElementById("clear-sketch");
resetPanel.addEventListener("click", (_) => {
  container.querySelectorAll("div").forEach((e) => {
    e.style.backgroundColor = "black";
  });
});

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.setAttribute("class", "grid");
  div.addEventListener("mouseenter", (e) => {
    let randomIndex = Math.floor(Math.random() * colorsArr.length);
    if (active) {
      e.target.style.backgroundColor = active;
    } else {
      e.target.style.backgroundColor = colorsArr[randomIndex];
    }
  });
  container.appendChild(div);
}
