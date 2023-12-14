var button = document.getElementById("button");
var nombreInput = document.getElementById("nombreInput");
var apellido1Input = document.getElementById("apellido1Input");
var apellido2Input = document.getElementById("apellido2Input");
var resultadoDiv = document.getElementById("resultado");


function action(event) {
    event.preventDefault();
    
    let nombre = nombreInput.value;
    let apellido1 = apellido1Input.value;
    let apellido2 = apellido2Input.value;

    let nuevoElemento = document.createElement("h2");
    nuevoElemento.textContent = nombre;
    resultadoDiv.appendChild(nuevoElemento);
}

button.addEventListener("click", action); 
