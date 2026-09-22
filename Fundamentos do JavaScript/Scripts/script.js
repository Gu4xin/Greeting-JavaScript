const areaTexto = document.querySelector("#caixaTexto");
const botao = document.querySelector("#botao-enviar");
const mensagem = document.querySelector("#mensagem");

const areaTextoIdade = document.querySelector("#caixaTexto-idade");
const botaoIdade = document.querySelector("#botao-enviar-idade");
const mensagemIdade = document.querySelector("#mensagem-idade");


botao.addEventListener("click", function() {
    console.log(areaTexto.value);
        mensagem.textContent = "olá, " + areaTexto.value + "!";
});

botaoIdade.addEventListener("click", function() {
    console.log(areaTextoIdade.value);
    mensagemIdade.textContent = "Você tem " + areaTextoIdade.value + " anos de idade!";
});