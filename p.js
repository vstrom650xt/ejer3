const button = document.querySelector("button");

function action() {
    var nombreInput = document.getElementById("nombreInput");
    var apellido1Input = document.getElementById("apellido1Input");
    var apellido2Input = document.getElementById("apellido2Input");

    var nombre = nombreInput.value;
    var apellido1 = apellido1Input.value;
    var apellido2 = apellido2Input.value;

    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = nombre + " " + apellido1 + " " + apellido2 + " vas a palmar ";
}
button.addEventListener("click", action)