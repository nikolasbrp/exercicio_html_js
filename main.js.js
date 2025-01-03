const form = document.getElementById('form-campos');
const numeroA = document.getElementById('campo-a');
const numeroB = document.getElementById('campo-b');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const valorA = parseInt(numeroA.value);
    const valorB = parseInt(numeroB.value);

    if (valorB > valorA) {
        mensagem.innerHTML = `Número <b>${valorB}</b> é maior que número <b>${valorA}</b>. Formulário válido!`;
        mensagem.style.color = "green";
    } else {
        mensagem.innerHTML = "O valor de <b>B</b> deve ser maior que o valor de <b>A</b>. Tente novamente!";
        mensagem.style.color = "red";
    }
});
