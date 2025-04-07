/* <div class="card-about rounded-4 p-3 border-white border-1 m-lg-4 m-2 col-lg-5 col-md-8 col-11" id="card-01">
<h3 class="title-about">Titulo Card</h3>
<p class="desc-about">Descrição do card aqui. Descrição do card aqui. Descrição do card aqui.</p>

<div id="buttonsContainer" class="d-flex ">
    <button class="btn btn-light px-5  w-auto border-0 rounded-5 background-detail-color btn-about">Mais...</button>
    <button class="btn mx-1 background-detail-color btn-circle-about">
        <i class="bi bi-arrow-right"></i>
    </button>
</div>
</div>



<div class="card-about rounded-4 p-3 border-white border-1 m-lg-4 m-2 col-lg-5 col-md-8 col-11" id="card-02">
<h3 class="title-about">Titulo Card</h3>
<p class="desc-about">Descrição do card aqui. Descrição do card aqui. Descrição do card aqui.</p>
</div> */

const idade = calcularIdade();
console.log(idade)
const semestre = calcularSemestre(); 


const list1 = [
    {"titulo": "Infos Pessoais", "descricao": `Me chamo Gustavo Fantoni do Rosário, tenho ${idade} anos, moro em Gaspar - SC.`, "button": false},
    {"titulo": "Formação", "descricao": `Atualmente estou no ${semestre}° semestre, no curso de Sistemas de Informação, na UNIFEBE.`, "button": false},
    {"titulo": "Projetos acadêmicos", "descricao": "Um projeto muito marcante, foi o SandBox amanhã, realizado com o CIB (Centro de Inovação de Blumenau).", "button": true},
]
const list2 = [
    {"titulo": "Havan Labs", "descricao": `Estagiário durante 1 ano, como full-stack em Genexus 18`, "button": false},
    {"titulo": "Ferramentas", "descricao": `Durante o estágio, o foco era GX18, porém desenvolvi algumas APIs em C#, para uso interno.`, "button": false},
    {"titulo": "Projeto 1 Concluído", "descricao": "Aplicação NPS, desenvolvimento 100% web.", "button": false},
    {"titulo": "Projeto 2 Concluído", "descricao": "API e Dashboard para o CDH, desenvolvimento da APi em c#, e dashboard em React.", "button": false}
]
const list3 = [
    {"titulo": "Genexus 18", "descricao": `Experiência de 1 ano, focado em aplicações web e mobile.`, "button": false},
    {"titulo": "HTML, CSS e Bootstrap", "descricao": "Conhecimento amplo e facilidade de domínio entre essas ferramentas.", "button": false},
    {"titulo": "JAVA e C#", "descricao": "Constante aprendizado, atualmente priorizando JAVA, porém, já desenvolvi em C#.", "button": false},
    {"titulo": "Javascript", "descricao": "Conhecimento moderado, utilizado apenas em projetos pessoais, ou objetos externos para o GX18.", "button": true}
]



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




