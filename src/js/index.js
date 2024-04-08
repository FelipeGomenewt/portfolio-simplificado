/*
objetivo 1 - quando o usuario clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

    passo 1 - pegar o botão mostrar mais no js pra poder verificar quando o usuario clicar em cima dele

    passo 2 - identificar o clique no botao

    passo 3 - adicionar a classe ativo nos projetos escondidos

objetivo 2 - esconder o botão de mostrar mais
    passo 1 - pegar o botão e esconder ele
*/

// objetivo 1 - quando o usuario clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

// passo 1 - pegar o botão mostrar mais no js pra poder verificar quando o usuario clicar em cima dele

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisprojetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisprojetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    });
}
