const campoTexto = document.querySelector("#texto-encriptado");
const campoMensaje = document.querySelector("#mensaje-encriptado");


const matrizCode = [
    ["e", "enter"], //índice 0
    ["i", "imes"], //índice 1
    ["a", "ai"], //índice 2
    ["o", "ober"], //índice 3
    ["u", "ufat"], //índice 4
];

//Encriptar

function btnEncriptar() {
    const texto = encriptar(campoTexto.value);
    campoMensaje.value = texto;
    campoTexto.value = ""; 
}

function encriptar(fraseEncriptada) {
    for (let i = 0; i < matrizCode.length; i++) {
        if (fraseEncriptada.includes(matrizCode[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
                matrizCode[i][0],
                matrizCode[i][1]

            )
        }
    }
    return fraseEncriptada;
}

//Desencriptar

function btnDesencriptar() {
    const texto = desencriptar(campoTexto.value);
    campoMensaje.value = texto;
}

function desencriptar(fraseDesencriptada) {
    for (let i = 0; i < matrizCode.length; i++) {
        if (fraseDesencriptada.includes(matrizCode[i][1])) {
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matrizCode[i][1],
                matrizCode[i][0]

            )
        }
    }
    return fraseDesencriptada;
}

