document.addEventListener("DOMContentLoaded", function () {

    // Área inicial
    const buttonsContainer = document.getElementById("buttonsContainer");
    const textContainer = document.getElementById("textContainer");


    function ajustarBotoesProjetos() {
        if (window.innerWidth < 992) {
            if (!document.getElementById("buttonsInserted")) {
                let newButtons = buttonsContainer.cloneNode(true);
                newButtons.id = "buttonsInserted";

                newButtons.classList.remove("d-lg-flex", "d-none");
                newButtons.classList.add("d-flex", "align-items-center", "mt-3");

                textContainer.insertAdjacentElement("afterend", newButtons);
            }
        } else {
            let existingButtons = document.getElementById("buttonsInserted");
            if (existingButtons) {
                existingButtons.remove();
            }
        }
    }
    
       

    ajustarBotoesProjetos();
    window.addEventListener("resize", ajustarBotoesProjetos);

});


function mudaEstiloBotao(id) {
    const btnAtual = document.querySelector(`button#btn-about-${id}`);

    const classe = "background-detail-color";
    if (btnAtual.classList.contains("border-white")) {
        btnAtual.classList.remove("border-white");
        btnAtual.classList.add(classe);

        for (let i = 1; i <= 3; i++) { 
            const outroBtn = document.querySelector(`button#btn-about-${i}`);
            if (outroBtn && outroBtn.classList.contains(classe) && i != id) {
                outroBtn.classList.remove(classe);
                outroBtn.classList.add("border-white");
            }
        }
    }
}
