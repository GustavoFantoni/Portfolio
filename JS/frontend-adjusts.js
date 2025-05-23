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
    
    function ajustaImagem() {
        document.querySelectorAll(".img-1-projects").forEach(img => {
            img.style.height = img.clientWidth + "px";
        });
    
        document.querySelectorAll(".mask-link").forEach(mask => {
            mask.style.height = mask.clientWidth + "px";
        });
    
        document.querySelectorAll(".img-2-projects").forEach(img => {
            img.style.height = img.clientWidth * 1.5 + "px";
        });
    
        document.querySelectorAll(".img-4-projects").forEach(img => {
            img.style.height = img.clientWidth * 2 + "px";
        });
    }
    
       

    ajustarBotoesProjetos();
    window.addEventListener("resize", () => {
        ajustarBotoesProjetos();
        ajustaImagem()
    });
    ajustaImagem();
});


