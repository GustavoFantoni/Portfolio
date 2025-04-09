const container = document.getElementById("container-cards") // Local onde os cards ficam
const idade = calcularIdade();
const semestre = calcularSemestre(); 

const list1 = [
    {"titulo": "Infos Pessoais", "descricao": `Me chamo Gustavo Fantoni do Rosário, tenho ${idade} anos, moro em Gaspar - SC.`, "button": false},
    {"titulo": "Formação", "descricao": `Atualmente estou no ${semestre}° semestre, no curso de Sistemas de Informação, na UNIFEBE.`, "button": false},
    {"titulo": "Projetos acadêmicos", "descricao": "Um projeto muito marcante, foi o SandBox amanhã, realizado com o CIB (Centro de Inovação de Blumenau).", "button": true},
]
const list2 = [
    {"titulo": "Havan Labs", "descricao": `Estagiário durante 1 ano, como full-stack em Genexus 18.`, "button": false},
    {"titulo": "Ferramentas", "descricao": `Durante o estágio, o foco era GX18, porém desenvolvi algumas APIs em C#, para uso interno.`, "button": false},
    {"titulo": "Projeto 1 Concluído", "descricao": "Aplicação NPS, desenvolvimento 100% web.", "button": false},
    {"titulo": "Projeto 2 Concluído", "descricao": "API e Dashboard para o CDH, desenvolvimento da APi em c#, e dashboard em React.", "button": false}
]
const list3 = [
    {"titulo": "Genexus 18", "descricao": `Experiência de 1 ano, focado em aplicações web e mobile.`, "button": true},
    {"titulo": "HTML, CSS e Bootstrap", "descricao": "Conhecimento amplo e facilidade de domínio entre essas ferramentas.", "button": false},
    {"titulo": "JAVA e C#", "descricao": "Constante aprendizado, atualmente priorizando JAVA, porém, já desenvolvi em C#.", "button": false},
    {"titulo": "Javascript", "descricao": "Conhecimento moderado, utilizado apenas em projetos pessoais, ou objetos externos para o GX18.", "button": true}
]

const listas = [
    list1,
    list2,
    list3
];

function calcularSemestre() {
    const dataAtual = new Date();
    const dataInicio = new Date(2023, 1 - 1);

    const diffAnos = dataAtual.getFullYear() - dataInicio.getFullYear();
    const diffMeses = dataAtual.getMonth() - dataInicio.getMonth();

    const totalMeses = diffAnos * 12 + diffMeses;
    const semestreAtual = Math.floor(totalMeses / 6) + 1;

    return semestreAtual;
}

function calcularIdade() {
    const dataAtual = new Date();
    const dataNasc = new Date(2005, 5, 7); 

    let idade = dataAtual.getFullYear() - dataNasc.getFullYear();
    const mesAtual = dataAtual.getMonth();
    const diaAtual = dataAtual.getDate();

    const mesNasc = dataNasc.getMonth();
    const diaNasc = dataNasc.getDate();

    if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
        idade--;
    }

    return idade;
}


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

    container.innerHTML = '';
    createCards(listas[id - 1]);
}



function createCards(array){
    array.forEach((card, index ) => {
        // 3 elementos necessários para o card
        const divCard = document.createElement("div");
        divCard.className = `card-about card-anim-${index} position-relative rounded-4 p-3 border-white border-1 m-lg-4 m-2 col-lg-5 col-md-8 col-11`;

        const h3Title = document.createElement("h3");
        h3Title.className = "title-about";
        h3Title.textContent = card.titulo;

        const pText = document.createElement("p");
        pText.className = "desc-about";
        pText.textContent = card.descricao

        divCard.appendChild(h3Title)
        divCard.appendChild(pText)

        // Botão interno do card
        if (card.button) {

            const buttonsContainer = document.createElement('div');
            buttonsContainer.id = 'buttonsContainer';
            buttonsContainer.className = 'd-flex';

            const btnMais = document.createElement('button');
            btnMais.className = 'btn btn-light px-5 w-auto border-0 rounded-5 background-detail-color btn-about';
            btnMais.textContent = 'Mais...';

            const btnIcon = document.createElement('button');
            btnIcon.className = 'btn mx-1 background-detail-color btn-circle-about';

            const icon = document.createElement('i');
            icon.className = 'bi bi-arrow-right';

            btnIcon.appendChild(icon);
            buttonsContainer.appendChild(btnMais);
            buttonsContainer.appendChild(btnIcon);

            divCard.appendChild(buttonsContainer);            
        }

        container.appendChild(divCard)
    });
}


document.addEventListener("DOMContentLoaded",  () => {
    createCards(list1)
});