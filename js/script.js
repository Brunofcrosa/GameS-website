const menuBtn = document.getElementById('botao-dropdown');
const menu = document.getElementById('menu');
const form = document.getElementById('enviar-formulario');
const confirmation = document.getElementById('confirmar-mensagem');

menuBtn.addEventListener('click', function () {

    if (menu.style.display === 'none' || menu.style.display === '') {

        menu.style.display = 'block';
    } else {

        menu.style.display = 'none';
    }
});

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    confirmation.style.display = 'block';

    form.reset();
});
