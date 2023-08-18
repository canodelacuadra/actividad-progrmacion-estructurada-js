document.addEventListener('DOMContentLoaded', function () {
    // Generar número aleatorio entre 1 y 100
    var numeroSecreto = Math.floor(Math.random() * 100) + 1;
    var intentos = 0;

    var numeroInput = document.getElementById('numeroInput');
    var adivinarBtn = document.getElementById('adivinarBtn');
    var mensaje = document.getElementById('mensaje');

    adivinarBtn.addEventListener('click', function () {
        var intento = parseInt(numeroInput.value);

        if (isNaN(intento) || intento < 1 || intento > 100) {
            mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
        } else {
            intentos++;

            if (intento === numeroSecreto) {
                mensaje.textContent = `¡Felicidades! ¡Adivinaste el número en ${intentos} intentos!`;
                adivinarBtn.disabled = true;
            } else if (intento < numeroSecreto) {
                mensaje.textContent = 'El número es mayor. Intenta de nuevo.';
            } else {
                mensaje.textContent = 'El número es menor. Intenta de nuevo.';
            }
        }
    });
});
