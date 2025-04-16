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