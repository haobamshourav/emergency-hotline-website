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

// 2. Copy Button Click
var copyButtons = document.getElementsByClassName("copy-btn");
for (var i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", function () {
        var card = this.closest(".bg-white");
        var number = card.querySelector(".hotline-number").innerText;

        var textArea = document.createElement("textarea");
        textArea.value = number;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);

        alert("Copied: " + number);

        copyCount = copyCount + 1;
        updateNavbar();
    });
}

// 3. Call Button Click
var callButtons = document.getElementsByClassName("call-btn");
var historyContainer = document.getElementById("history-items");

for (var i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener("click", function () {
        var card = this.closest(".bg-white");
        var serviceName = card.querySelector("h3").innerText;
        var number = card.querySelector(".hotline-number").innerText;

        if (coinCount >= 20) {
            coinCount = coinCount - 20;
            updateNavbar();
            alert("Calling " + serviceName + " (" + number + ")");

            // Add to History
            var item = document.createElement("div");
            const timeInBD = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka' });
            item.innerHTML = `
                <div class="flex justify-between items-center py-2 border-b">
                    <div>
                        <p class="font-semibold">${serviceName}</p>
                        <p class="text-sm text-gray-500">${number}</p>
                    </div>
                    <div class="text-sm text-gray-500">
                        ${timeInBD}
                    </div>
                </div>
            `;
            historyContainer.appendChild(item);

        } else {
            alert("Not enough coins to make a call!");
        }
    });
}

// 4. Clear History Button
var clearHistoryBtn = document.getElementById("clear-history-btn");
clearHistoryBtn.addEventListener("click", function () {
    historyContainer.innerHTML = "";
});
