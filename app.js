let listaDeNumerosSorteados = [];
let numeroLimite= 10 ;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//exibe o texto e fala.
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    resposiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

//para faclitar criou uma função da msg
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'jogo do num secreto');
    exibirTextoNaTela('p', 'escolha o numero entre 1 e 10');
}

exibirMensagemInicial();

//verifica se o numero que foi escolhdo foi certo
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabens!! ');

        let palavraTentaivas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentaivas = `voce acertou o numero secreto com ${tentativas} ${palavraTentaivas}!!! `;

        exibirTextoNaTela('p', mensagemTentaivas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } 
    else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'o numero é menor');
        } 
        else {
            exibirTextoNaTela('p', 'o numero é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo(){
    chute=document.querySelector('input');
    chute.value='';
}

function gerarNumeroAleatorio() {
    let numeroEscolhido= parseInt(Math.random() * numeroLimite + 1);
    let qtdNumerosEscolhidos=listaDeNumerosSorteados.length;
    if(qtdNumerosEscolhidos== numeroLimite){
        listaDeNumerosSorteados=[];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function reiniciarJogo(){
    numeroSecreto=gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('desabled',true)
}
