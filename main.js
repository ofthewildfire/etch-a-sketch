let container = document.getElementById("app");

const colorsArr = [
  "#d188d1",
  "#cae22c",
  "#324cd0",
  "#9cd188",
  "#e116c9",
  "#83ea2f",
];

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.setAttribute("class", "grid");
  div.addEventListener("mouseenter", (e) => {
    let randomIndex = Math.floor(Math.random() * colorsArr.length);
    e.target.style.backgroundColor = colorsArr[randomIndex];
  });
  container.appendChild(div);
}
