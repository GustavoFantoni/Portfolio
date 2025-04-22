function alterarIcons(tam) {
    const divPai = document.querySelector("div.area-nav");
    const icons = document.querySelectorAll("i.item-nav");

    icons.forEach(icon => {
        icon.style.fontSize = tam;
        icon.classList.remove("corPequena", "corGrande");
        icon.classList.add(tam === "12px" ? "corPequena" : "corGrande");

    });
}

