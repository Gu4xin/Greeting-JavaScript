const botao = document.querySelector(".botao-enviar");
let mensagem = document.querySelector(".mensagem");

console.log("Estou funcionando no cmd")

botao.addEventListener("click", function() {
    mensagem.textContent = "Olá, estou funcionando!"
})