const button = document.querySelector("button");

function action(){
    var input = document.getElementById("input");
     var valor = input.value
    const element = document.createTextNode( valor + " vas a palmar "); 
    console.log(valor)

};
button.addEventListener("click", action)