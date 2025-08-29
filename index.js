// Navbar Counters
var heartsEl = document.getElementById("hearts");
var coinsEl = document.getElementById("coins");
var copiesEl = document.getElementById("copies");

// Values from navbar
var heartCount = parseInt(heartsEl.innerText);
var coinCount = parseInt(coinsEl.innerText);
var copyCount = parseInt(copiesEl.innerText);

// Update Navbar Function
function updateNavbar() {
    heartsEl.innerText = heartCount;
    coinsEl.innerText = coinCount;
    copiesEl.innerText = copyCount;
}

// 1. Heart Icon Click
var heartIcons = document.getElementsByClassName("heart-icon");
for (var i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener("click", function () {
        // toggle icon style
        this.classList.toggle("fa-regular");
        this.classList.toggle("fa-solid");

        if (this.classList.contains("fa-solid")) {
            this.style.color = "red";
            heartCount = heartCount + 1;
        } else {
            this.style.color = "";
            heartCount = heartCount - 1;
        }
        updateNavbar();
    });
}

