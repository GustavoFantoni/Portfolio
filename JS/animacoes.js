// animacoes.js

document.addEventListener("DOMContentLoaded", () => {
    const elementosAnimar = document.querySelectorAll(".projeto-animado");

    let observer;

    function createObserver() {
        if (observer) {
            observer.disconnect();
        }

        const thresholdValue = window.innerWidth >= 700 ? 0.7 : 0.3;

        observer = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("aparecer");
                    entrada.target.classList.remove("invisivel");
                } else {
                    entrada.target.classList.remove("aparecer");
                    entrada.target.classList.add("invisivel");
                }
            });
        }, {
            threshold: thresholdValue
        });

        elementosAnimar.forEach(el => observer.observe(el));
    }

    createObserver();

    window.addEventListener("resize", () => {
        createObserver();
    });
});
