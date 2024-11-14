
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
        alert(`O número ${de} é maior que o número ${ate}. Não será possível sortear!`);
        return;
    }

    if ((ate - de + 1) < quantidade) {
        alert(`Não há como sortear ${quantidade} números no intervalo de ${de} e ${ate}.`)
        return;
    }

    let sorteados = [];
    let numero;
    
    for (let i = 0; i < quantidade; i++ ) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
            alert('Tentando obter número inédito');
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return parseInt(Math.random() * max + min);
}

function alterarStatusBotao() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');

    if (botaoReiniciar.classList.contains('container__botao-desabilitado'))  {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    sorteados = [];
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    alterarStatusBotao();
}
