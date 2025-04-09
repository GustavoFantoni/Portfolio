const projetos = [
    {
        tecnologias: ["Java", "Bootstrap", "CSS", "HTML", "Javascript"],
        descricaoPrincipal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis elit, aliquet in tortor vel, scelerisque vestibulum orci. Vivamus sed semper tortor.",
        descricaoSecundaria: "Aenean condimentum euismod eros. Aliquam gravi, mauris nec tincidunt lacinia:",
        bullets: [
            "ipsum massa ultricies tortor, id vulputate diam nunc vehicula ipsum.",
            "ipsum massa ultricies tortor, id vulputate diam nunc vehicula ipsum."
        ],
        imagens: [
            "Images/bg-1.jpg",
            "Images/bg-2.jpg",
            "Images/bg-3.jpg",
            "Images/bg-3.jpg"
        ]
    },
    {
        tecnologias: ["Bootstrap", "CSS", "HTML", "Javascript"],
        descricaoPrincipal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Vivamus sed semper tortor.",
        descricaoSecundaria: "Aenean condimentum euismod eros. Aliquam gravi, mauris nec tincidunt lacinia:",
        bullets: [
            "ipsum massa ultricies tortor",
            "ipsum massa ultricies tortor, id vulputate diam nunc vehicula ipsum."
        ],
        imagens: [
            "Images/bg-2.jpg",
            "Images/bg-5.jpg",
            "Images/bg-1.jpg",
            "Images/bg-6.jpg"
        ]
    },
    {
        tecnologias: ["Bootstrap", "CSS", "HTML", "Javascript"],
        descricaoPrincipal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Vivamus sed semper tortor.",
        descricaoSecundaria: "Aenean condimentum euismod eros. Aliquam gravi, mauris nec tincidunt lacinia:",
        bullets: [
            "ipsum massa ultricies tortor",
            "ipsum massa ultricies tortor, id vulputate diam nunc vehicula ipsum."
        ],
        imagens: [
            "Images/bg-2.jpg",
            "Images/bg-5.jpg",
            "Images/bg-1.jpg",
            "Images/bg-6.jpg"
        ]
    }
    // outros projetos...
];



const containerProjetos = document.getElementById("container-projetos");

function createProjetos(listaProjetos) {
    containerProjetos.innerHTML = '';

    listaProjetos.forEach((projeto, index) => {
        const wrapperRow = document.createElement("div");
        wrapperRow.className = index % 2 == 1 ? "row mb-5 flex-row-reverse my-lg-5" : "row  my-lg-5";
        wrapperRow.classList.add("projeto-animado");
        wrapperRow.classList.add("invisivel"); // começa invisível


        // COLUNA LATERAL (descrição + tecnologias)
        const colTexto = document.createElement("div");
        colTexto.className = "col-lg-3 mt-5";

        const tecContainer = document.createElement("div");
        tecContainer.className = index % 2 == 1 ? "w-100 d-flex flex-wrap justify-content-end mt-3" : "w-100 d-flex flex-wrap justify-content-start mt-3";

        projeto.tecnologias.forEach(tec => {
            const tecDiv = document.createElement("div");
            tecDiv.className = "w-auto m-1 p-0";

            const btn = document.createElement("button");
            btn.className = "social-btn d-flex border-1 border-white rounded-5 py-lg-1 py-0 px-4 bg-transparent";
            btn.textContent = tec;

            tecDiv.appendChild(btn);
            tecContainer.appendChild(tecDiv);
        });

        const p = document.createElement("p");
        p.className = index % 2 == 1 ? "text-aling-right" :"mt-3";
        p.innerHTML = `
            ${projeto.descricaoPrincipal}<br><br>
            <span class="text-2-project">${projeto.descricaoSecundaria}</span><br><br>
            ${projeto.bullets.map(bullet => `• ${bullet}<br>`).join("")}
        `;

        colTexto.appendChild(tecContainer);
        colTexto.appendChild(p);

        // COLUNA DAS IMAGENS
        const colImagens = document.createElement("div");
        colImagens.className = "col-lg-8 col-12 d-flex";

        // coluna da esquerda (duas imagens)
        const colEsq = document.createElement("div");
        colEsq.className = "col-md-2 col-4 d-flex flex-column gap-3 mt-5";

        const divImg1 = document.createElement("div");
        divImg1.className = "position-relative";

        const img1 = document.createElement("img");
        img1.src = projeto.imagens[0];
        img1.className = "img-project rounded-lg-5 z-n1 rounded-4 col-12 img-1-projects";

        const mask = document.createElement("div");
        mask.className = "mask-link rounded-lg-5 rounded-4 z-2 d-flex justify-content-center align-items-center";

        const btnIcon = document.createElement("button");
        btnIcon.className = "btn btn-circle border-white z-3";

        const icon = document.createElement("i");
        icon.className = "bi bi-code-slash";

        btnIcon.appendChild(icon);
        mask.appendChild(btnIcon);

        divImg1.appendChild(img1);
        divImg1.appendChild(mask);

        const img2 = document.createElement("img");
        img2.src = projeto.imagens[1];
        img2.className = "img-project rounded-lg-5 rounded-4 col-12 img-2-projects";

        colEsq.appendChild(divImg1);
        colEsq.appendChild(img2);

        // coluna do meio (imagem grande)
        const colMeio = document.createElement("div");
        colMeio.className = "col-lg-6 col-8 mt-5";

        const img3 = document.createElement("img");
        img3.src = projeto.imagens[2];
        img3.className = "img-project col-12 rounded-lg-5 rounded-4 mx-4 img-3-projects";

        colMeio.appendChild(img3);

        // coluna da direita (imagem extra)
        const colDir = document.createElement("div");
        colDir.className = "col-lg-3 d-lg-flex d-none";

        const img4 = document.createElement("img");
        img4.src = projeto.imagens[3];
        img4.className = "img-project rounded-5 col-12 mx-5 img-4-projects";

        colDir.appendChild(img4);

        // montagem da estrutura
        colImagens.appendChild(colEsq);
        colImagens.appendChild(colMeio);
        colImagens.appendChild(colDir);

        wrapperRow.appendChild(colTexto);
        wrapperRow.appendChild(colImagens);

        containerProjetos.appendChild(wrapperRow);
    });
}



document.addEventListener("DOMContentLoaded", () => {
    createProjetos(projetos);
});
