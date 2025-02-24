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
let inputQuantidade = document.getElementById('quantidade');
let inputMin = document.getElementById('de');
let inputMax = document.getElementById('ate');
let tamanhoDaLista = listaDeNumerosSorteados.length;

// DECLARAÇÃO DE FUNÇÕES
function exibirNaTela(ID, texto) {
    campo = document.getElementById(ID);
    campo.innerHTML = texto;

    return campo
}

function singularOuPlural(comparador, valorComparado, palavraNoPlural, palavraNoSingular) {
    comparativo = comparador > valorComparado ? palavraNoPlural : palavraNoSingular;
    return comparativo
}

function gerarNumerosAleatorios() {
    for (let i = 0; i < quantidadeDeNumeros; i++) {
        do {
            num = parseInt(Math.random() * (valorMaximo - valorMinimo + 1) + valorMinimo);
        } while (listaDeNumerosSorteados.includes(num));

        listaDeNumerosSorteados.push(num);
    }

    tamanhoDaLista = listaDeNumerosSorteados.length
    exibirNaTela('resultado', `<label class="texto__paragrafo"><b>${singularOuPlural(tamanhoDaLista, 1, 'Números sorteados', 'Número sorteado')}:</b> <i>${listaDeNumerosSorteados}</i></label>`);

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
        inputQuantidade = document.getElementById('quantidade');
        inputMin = document.getElementById('de');
        inputMax = document.getElementById('ate');

        if (parseInt(valorMaximo) > parseInt(valorMinimo)) {
            if (quantidadeDeNumeros <= ((valorMaximo - valorMinimo) + 1)) {
                gerarNumerosAleatorios();
                document.getElementById('btn-reiniciar').setAttribute('class', 'container__botao');
                document.getElementById('btn-sortear').setAttribute('class', 'container__botao-desabilitado');
            } else {
                console.log(quantidadeDeNumeros);
                console.log(((valorMaximo - valorMinimo) + 1));
                console.log(quantidadeDeNumeros >= ((valorMaximo - valorMinimo) + 1));
                exibirNaTela('resultado', `<label class="texto__paragrafo-red"><i>Por favor, insira uma quantidade menor que o range de números informados (${((valorMaximo - valorMinimo) + 1)})</i></label>`);
                document.getElementById('quantidade').setAttribute('class', 'container__input-red');
                //resetarCampoPorID('quantidade');
            }
        } else {
            exibirNaTela('resultado', '<label class="texto__paragrafo-red"><i>Por favor, inserir um valor máximo maior que o valor mínimo</i></label>');
            document.getElementById('ate').setAttribute('class', 'container__input-red');
            //resetarCampoPorID('ate');
        }
    } else {
        exibirNaTela('resultado', `<label class="texto__paragrafo-red"><i>Por favor, insira um valor númerico em todos os campos</i></label>`);
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
    alert('O jogo está sendo reiniciado.');
    exibirNaTela('resultado', '<label class="texto__paragrafo"><b>Números sorteados:</b> <i>nenhum até agora</i></label>');
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
inputQuantidade = document.getElementById('quantidade');
inputMin = document.getElementById('de');
inputMax = document.getElementById('ate');

inputQuantidade.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
        console.log(estado);
        if (estado != 'sorteado') {
            sortear();
        } else {
            reiniciar();
        }
    }
})

inputMin.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
        console.log(estado);
        if (estado != 'sorteado') {
            sortear();
        } else {
            reiniciar();
        }
    }
})

inputMax.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
        console.log(estado);
        if (estado != 'sorteado') {
            sortear();
        } else {
            reiniciar();
        }
    }
})