document.addEventListener("DOMContentLoaded", function () {
    const rowContainer = document.querySelector(".area-carousel");
    const positionContainer = document.createElement("div"); 
    positionContainer.classList.add("position-carousel", "d-lg-none", "d-flex", "justify-content-center", "mt-2");

    const cards = [
        { text: "", tam: "col-lg-4", Style: "noStyle" },
        { tam: "col-lg-5", Style: "card-item", title: "Titulo do projeto aqui: PORT", desc: "Breve descrição do projeto aqui, projeto tal, frito com linguagem JavaScript"  },
        { tam: "col-lg-5", Style: "card-item", title: "Titulo do projeto aqui: PORT", desc: "Breve descrição do projeto aqui, projeto tal, frito com linguagem JavaScript" },
        { tam: "col-lg-5", Style: "card-item", title: "Titulo do projeto aqui: PORT", desc: "Breve descrição do projeto aqui, projeto tal, frito com linguagem JavaScript" },
        { tam: "col-lg-5", Style: "card-item", title: "Titulo do projeto aqui: PORT", desc: "Breve descrição do projeto aqui, projeto tal, frito com linguagem JavaScript" },
        { tam: "col-lg-5", Style: "card-item", title: "Titulo do projeto aqui: PORT", desc: "Breve descrição do projeto aqui, projeto tal, frito com linguagem JavaScript" },
        { tam: "col-lg-5", Style: "card-item", title: "Titulo do projeto aqui: PORT", desc: "Breve descrição do projeto aqui, projeto tal, frito com linguagem JavaScript" },
        { text: "", tam: "col-lg-4", Style: "noStyle" }
    ];

    let visibleCards = []; 
    let indicators = [];

    cards.forEach((card, index) => {
        const div = document.createElement("div");
        div.classList.add("h-100", card.tam, card.Style, "d-flex", "flex-lg-row-reverse", "flex-column", "p-0");

        if (!div.classList.contains("noStyle")) {
            visibleCards.push(index); 

            const areaNull = document.createElement("div");
            areaNull.classList.add("bg-transparent", "h-100");

            const areaContent = document.createElement("div");
            areaContent.classList.add("width-mod-50", "h-100", "area-content-card-carousel");

            const titleCard = document.createElement("h5");
            titleCard.classList.add("w-75", "title-card-carousel", "m-2")
            titleCard.innerHTML = card.title;

            const descCard = document.createElement("p");
            descCard.classList.add("w-75", "desc-card-carousel", "m-2", "mt-3")
            descCard.innerHTML = card.desc;

            areaContent.appendChild(titleCard)
            areaContent.appendChild(descCard)
            div.appendChild(areaNull);
            div.appendChild(areaContent);

            
            const indicator = document.createElement("span");
            indicator.classList.add("indicator");
            indicator.dataset.index = visibleCards.length - 1; 
            positionContainer.appendChild(indicator);
            indicators.push(indicator);
        }

        rowContainer.appendChild(div);
    });

    
    rowContainer.parentNode.insertBefore(positionContainer, rowContainer.nextSibling);

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

        const allCards = Array.from(rowContainer.children);
        const filteredCards = allCards.filter(card => !card.classList.contains("noStyle")); 

        filteredCards.forEach((card, index) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const diff = Math.abs(containerCenter - cardCenter);

            if (diff < minDiff) {
                minDiff = diff;
                centerIndex = index;
            }
        });

        filteredCards.forEach((card, index) => {
            const areaContent = card.querySelector(".area-content-card-carousel"); 
            if (!areaContent) return; 

            areaContent.classList.remove("width-mod-50", "width-mod-75", "width-mod-100");

            if (index === centerIndex) {
                if (screenWidth > 992) {
                    areaContent.classList.add("width-mod-50");
                } else {
                    areaContent.classList.add("width-mod-100");
                }
                card.classList.add("center-card");
                card.classList.remove("bordered-card");
            } else {
                if (screenWidth > 992) {
                    areaContent.classList.add("width-mod-75");
                } else {
                    areaContent.classList.add("width-mod-100");
                }
                card.classList.add("bordered-card");
                card.classList.remove("center-card");
            }
        });

        
        indicators.forEach((indicator, index) => {
            if (index === centerIndex) {
                indicator.classList.add("active-indicator");
            } else {
                indicator.classList.remove("active-indicator");
            }
        });
    }

    let screenWidth = window.innerWidth;

    function widWin() {
        screenWidth = window.innerWidth;
        detectCenterCard();
    };

    rowContainer.addEventListener("scroll", () => {
        clearTimeout(rowContainer._scrollTimer);
        rowContainer._scrollTimer = setTimeout(detectCenterCard, 100);
    });

    widWin();
    window.addEventListener("resize", widWin);
});
