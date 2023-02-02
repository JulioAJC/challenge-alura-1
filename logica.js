const mensaje = document.querySelector(".mensaje");
const resultado = document.querySelector(".mensaje-resultado");

const botonEncriptar = document.querySelector(".boton-encriptar");
const botonDesencriptar = document.querySelector(".boton-desencriptar");
const botonCopiar = document.querySelector(".boton-copiar");


function encriptar(){
    let mensajeEntrada = mensaje.value;
    let mensajeEncriptado = mensajeEntrada.replace(/e/g,"enter")
    .replace(/i/g,"imes")
    .replace(/a/g,"ai") 
    .replace(/o/g,"ober")
    .replace(/u/g,"ufat")
    resultado.value = mensajeEncriptado;
    resultado.style.backgroundImage = "none";
    return
}

function desencriptar(){
    let mensajeEntrada = mensaje.value;
    let mensajeDesencriptado = mensajeEntrada.replace(/enter/g,"e")
    .replace(/imes/g,"i")
    .replace(/ai/g,"a") 
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u")
    resultado.value = mensajeDesencriptado; 
    resultado.style.backgroundImage = "none";
    return
}

function copiar(){
    
    resultado.select();
    document.execCommand('copy');
}



botonCopiar.addEventListener("click", copiar);
botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);

