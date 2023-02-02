
function encriptar(){
    let mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje.replace(/e/g,"enter")
    .replace(/i/g,"imes")
    .replace(/a/g,"ai") 
    .replace(/o/g,"ober")
    .replace(/u/g,"ufat")
    inputResultado.value = mensajeEncriptado;
}

function desencriptar(){
    let mensaje = inputMensaje.value
    var mensajeDesencriptado = mensaje.replace(/enter/g,"e")
    .replace(/imes/g,"i")
    .replace(/ai/g,"a") 
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u")
    inputResultado.value = mensajeDesencriptado; 
}

var inputMensaje = document.querySelector("#mensaje")
var inputResultado = document.querySelector("#resultado")

var botonEncriptar = document.querySelector("#boton-encriptar")
var botonDesencriptar = document.querySelector("#boton-desencriptar")
var botonCopiar = document.querySelector("#copiar")

textarea.focus()
botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);


