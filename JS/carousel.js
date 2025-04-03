document.addEventListener("DOMContentLoaded", function () {
    const rowContainer = document.querySelector(".area-carousel");

    const cards = [
        { text: "",  tam: "col-lg-4", Style: "noStyle" },
        { text: "text 1",  tam: "col-lg-5", Style: "card-item" },
        { text: "text 2",  tam: "col-lg-5", Style: "card-item" },
        { text: "text 3",  tam: "col-lg-5", Style: "card-item" },
        { text: "text 4",  tam: "col-lg-5", Style: "card-item" },
        { text: "text 5", tam: "col-lg-5", Style: "card-item" },
        { text: "text 6",  tam: "col-lg-5", Style: "card-item" },
        { text: "",  tam: "col-lg-4",  Style: "noStyle" }
    ];

    cards.forEach((card) => {
        const div = document.createElement("div");
        div.classList.add("h-100", card.tam, card.Style);
        div.innerHTML = `<p class="text-center text-white">${card.text}</p>`;
        rowContainer.appendChild(div);
    });

    const btnAnterior = document.getElementById("anterior");
    const btnProximo = document.getElementById("proximo");

    function getCardWidth() {
        const firstCard = rowContainer.querySelector(".card-item");
        return firstCard ? firstCard.offsetWidth + 10 : 200;
    }

    btnAnterior.addEventListener("click", function () {
        rowContainer.scrollBy({ left: -getCardWidth(), behavior: "smooth" });
    });

    btnProximo.addEventListener("click", function () {
        rowContainer.scrollBy({ left: getCardWidth(), behavior: "smooth" });
    });

    function detectCenterCard() {
        let centerIndex = null;
        let minDiff = Infinity;
        const containerRect = rowContainer.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        const cards = Array.from(rowContainer.children).filter(card => card instanceof HTMLElement);

        cards.forEach((card, index) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const diff = Math.abs(containerCenter - cardCenter);

            if (diff < minDiff) {
                minDiff = diff;
                centerIndex = index;
            }
        });

        cards.forEach((card, index) => {
            if (card.classList.contains("noStyle")) return;
            if (index === centerIndex) {
                card.classList.add("center-card");
                card.classList.remove("bordered-card");
            } else {
                card.classList.add("bordered-card");
                card.classList.remove("center-card");
            }
        });
    }

    rowContainer.addEventListener("scroll", () => {
        clearTimeout(rowContainer._scrollTimer);
        rowContainer._scrollTimer = setTimeout(detectCenterCard, 100);
    });

    detectCenterCard();
});
