const botao = document.querySelector("#botao-enviar");
let mensagem = document.querySelector("#mensagem");

const botaoIdade = document.querySelector("#botao-enviar-idade");
let mensagemIdade = document.querySelector("#mensagem-idade");

console.log("Estou funcionando!");

botao.addEventListener("click", function() {
    mensagem.textContent = "eu funciono";
});

botaoIdade.addEventListener("click", function() {
    mensagemIdade.textContent = "eu também funciono";
});