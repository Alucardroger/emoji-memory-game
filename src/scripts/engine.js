let trys = 0;
const emojis = [
    "🚲", "🚲", "🥵", "🥵", "🤡", "🤡", "🐾", "🐾",
    "😎", "😎", "😻", "😻", "👽", "👽", "🦄", "🦄"
];
let openCards = [];

let shuffleEmojis = emojis.sort(() => Math.random() - 0.5);

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.textContent = shuffleEmojis[i]; // Assigning emoji directly to textContent
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

// Show all cards for 2 seconds when the game starts
revealAllCards();
setTimeout(hideAllCards, 2000);

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    trys++;
    if (openCards[0].textContent === openCards[1].textContent) { // Checking textContent for emoji match
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Congratulations! You won! And it only took " + trys + " tries");
    }
}

function revealAllCards() {
    let allCards = document.querySelectorAll(".item");
    allCards.forEach(card => {
        card.classList.add("boxOpen");
    });
}

function hideAllCards() {
    let allCards = document.querySelectorAll(".item");
    allCards.forEach(card => {
        card.classList.remove("boxOpen");
    });
}
