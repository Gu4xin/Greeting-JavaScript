const botao = document.getElementById("botao-enviar");
let mensagem = document.getElementById("mensagem");

console.log("Estou funcionando no cmd");

botao.addEventListener("click", function() {
    mensagem.textContent = "Olá, estou funcionando!"
})