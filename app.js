// *PÁGINA DE DESAFIOS*
// 
// Desafio: Sorteador de numeros
// Autor: Allan Gomes
// Curso: Lógica de programação: praticando com desafios
// Instituição: Alura

// DECLARAÇÃO DE VARIÁVEIS
let listaDeNumerosSorteados = [];
let quantidadeDeNumeros;
let valorMinimo;
let valorMaximo;
let estado = '';

// ATRIBUIÇÃO DE VARIÁVEIS
quantidadeDeNumeros = document.getElementById('quantidade');
valorMinimo = document.getElementById('de');
valorMaximo = document.getElementById('ate');
const inputQuantidade = document.getElementById('quantidade');
const inputMin = document.getElementById('de');
const inputMax = document.getElementById('ate');
const input = document.querySelector('input');

// DECLARAÇÃO DE FUNÇÕES
function exibirNaTela(ID, texto) {
    campo = document.getElementById(ID);
    campo.innerHTML = texto;

    return campo
}

function gerarNumerosAleatorios() {
    for (let i = 0; i < quantidadeDeNumeros; i++) {
        do {
            num = parseInt(Math.random() * valorMaximo + valorMinimo);
        } while (listaDeNumerosSorteados.includes(num));

        listaDeNumerosSorteados.push(num);
    }

    exibirNaTela('resultado', `Números sorteados: ${listaDeNumerosSorteados}`);
    estado = 'sorteado';
    return listaDeNumerosSorteados;
}

function resetarCampo(tag) {
    fieldToReset = document.querySelector(tag);
    fieldToReset.value = '';
}

function resetarCampoPorID(idDoElemento) {
    campoParaResetar = document.getElementById(idDoElemento);
    campoParaResetar.value = '';
}

function verificarResultado() {
    quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    valorMinimo = parseInt(document.getElementById('de').value);
    valorMaximo = parseInt(document.getElementById('ate').value);
    console.log(quantidadeDeNumeros);
    console.log(valorMinimo);
    console.log(valorMaximo);

    if (!isNaN(quantidadeDeNumeros) && !isNaN(valorMinimo) && !isNaN(valorMaximo)) {
        document.getElementById('quantidade').setAttribute('class', 'container__input');
        document.getElementById('de').setAttribute('class', 'container__input');
        document.getElementById('ate').setAttribute('class', 'container__input');

        if (parseInt(valorMaximo) > parseInt(valorMinimo)) {
            if (quantidadeDeNumeros <= ((valorMaximo - valorMinimo) + 1)) {
                gerarNumerosAleatorios();
                document.getElementById('btn-reiniciar').setAttribute('class', 'container__botao');
                document.getElementById('btn-sortear').setAttribute('class', 'container__botao-desabilitado');
            } else {
                console.log(quantidadeDeNumeros);
                console.log(((valorMaximo - valorMinimo) + 1));
                console.log(quantidadeDeNumeros >= ((valorMaximo - valorMinimo) + 1));
                exibirNaTela('resultado', `Por favor, insira uma quantidade menor que o range de números informados (${((valorMaximo - valorMinimo) + 1)})`);
                document.getElementById('quantidade').setAttribute('class', 'container__input-red');
                //resetarCampoPorID('quantidade');
            }
        } else {
            exibirNaTela('resultado', 'Por favor, inserir um valor máximo maior que o valor mínimo');
            document.getElementById('ate').setAttribute('class', 'container__input-red');
            //resetarCampoPorID('ate');
        }
    } else {
        exibirNaTela('resultado', `Por favor, insira um valor númerico em todos os campos`);
        if (isNaN(quantidadeDeNumeros)) {
            document.getElementById('quantidade').setAttribute('class', 'container__input-red');
        }
        if (isNaN(valorMinimo)) {
            document.getElementById('de').setAttribute('class', 'container__input-red');
        }
        if (isNaN(valorMaximo)) {
            document.getElementById('ate').setAttribute('class', 'container__input-red');
        }
    }
}

function resetarGame() {
    document.getElementById('quantidade').setAttribute('class', 'container__input');
    document.getElementById('de').setAttribute('class', 'container__input');
    document.getElementById('ate').setAttribute('class', 'container__input');
    resetarCampoPorID('quantidade');
    resetarCampoPorID('de');
    resetarCampoPorID('ate');
    exibirNaTela('resultado', 'Números sorteados: nenhum até agora');
    document.getElementById('btn-sortear').setAttribute('class', 'container__botao');
    document.getElementById('btn-reiniciar').setAttribute('class', 'container__botao-desabilitado');
    listaDeNumerosSorteados = [];
    estado = '';
}

function sortear() { // Função definida para o botão 'Sortear' (html) da página
    verificarResultado();
}

function reiniciar() { // Função definida para o botão 'Reiniciar' (html) da página
    resetarGame();
    estado = 'zerado';
}

// PROGRAMA PRINCIPAL
console.log(estado);
inputQuantidade.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
        if (estado != 'sorteado') {
            sortear();
        } else {
            alert('Aperte o botão "Reiniciar" para zerar o jogo e começar novamente.');
        }
    }
})

inputMin.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
        if (estado != 'sorteado') {
            sortear();
        } else {
            alert('Aperte o botão "Reiniciar" para zerar o jogo e começar novamente.');
        }
    }
})

inputMax.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
        if (estado != 'sorteado') {
            sortear();
        } else {
            alert('Aperte o botão "Reiniciar" para zerar o jogo e começar novamente.');
        }
    }
})