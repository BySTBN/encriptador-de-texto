function encriptarTexto (){
    var textoIngresado = document.querySelector("#text-area").value;
    var textoEncriptado = textoIngresado.replace(/a/gi,"ai").replace(/e/gi, "enter").replace(/i/gi,"imes").replace(/o/gi,"ober").replace(/u/gi, "ufat");
    document.querySelector("#mensaje-encriptado").value = textoEncriptado;
    document.querySelector("#text-area").value;
}

var boton1 = document.querySelector("btn-encriptar");
boton1.onclick = encriptarTexto;