(function () {
    "use strict";
    console.log('fired');

    let burger = document.querySelector("#button");
    let burgerCon = document.querySelector("#burger-con");

    function hamburgerMenu() {
        burger.classList.toggle("expanded");
        burgerCon.classList.toggle("slide-toggle");
    };

    burger.addEventListener("click", hamburgerMenu, false);
})();


const buttons = document.querySelectorAll(".size-buttons li");

buttons.forEach(button => {
  button.addEventListener("click", function (e) {
    const product = e.currentTarget.parentElement.dataset.target;
    const size = e.currentTarget.dataset.size;

    const img = document.getElementById(`${product}-img`);
    

    const base = size === "group" 
      ? `${product}-group` 
      : `${product}-${size}`;

    img.src = `images/${base}-440.jpg`;
    img.srcset = `
      images/${base}-1320.jpg 1320w,
      images/${base}-870.jpg 870w,
      images/${base}-440.jpg 440w`;
  });
});

const exploreButton = document.querySelector("#explore");
const pineappleSection = document.querySelector("#pineapple-product");

exploreButton.addEventListener("click", () => {
  pineappleSection.classList.remove("hidden");
  exploreButton.style.display = "none"; 
});