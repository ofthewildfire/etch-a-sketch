const container = document.getElementById("app");
let arrayOfDivs = [];

// Loop and create a div for each.
for (let index = 0; index < 256; index++) {
  arrayOfDivs.push(`<div class="grid"></div>`);
}

// Ahh, this made me happy. It works
arrayOfDivs.forEach((el) => {
  container.innerHTML += el;
});

container.addEventListener("mouseenter", (e) => {
  console.log(e.target);
});
