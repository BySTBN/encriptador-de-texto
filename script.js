function encriptar() {
    var texto = document.querySelector(".text-area").value;
    textoEncriptado = texto.replace(/a/g, 'ai')
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
    document.querySelector(".mensaje-encriptado").value = textoEncriptado;
    document.querySelector(".text-area");
    alert("mensaje encriptado");
}

var botonEncriptar = document.querySelector(".btn-encriptar");
botonEncriptar.onclick = encriptar;

function desencriptar(){
    var texto = document.querySelector(".text-area").value;
    textoEncriptado = texto.replace(/ai/g, 'a')
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
    document.querySelector(".mensaje-encriptado").value = textoEncriptado;
    document.querySelector(".text-area");
    alert("mensaje desencriptado");
}

var botonDesencriptar = document.querySelector(".btn-desencriptar");
botonDesencriptar.onclick = desencriptar;

function copiar(){
    var  texto = document.querySelector(".mensaje-encriptado").value;
    mensajeCopiado = texto;
    navigator.clipboard.writeText(mensajeCopiado);
    alert("mensaje copiado");
}

var botonCopiar = document.querySelector(".copiar");
botonCopiar.onclick = copiar;