function cambiar(elemento) {
    let a = elemento.value;
    elemento.value = a.toUpperCase();
}

function validar() {
    dato = document.getElementById("dato").value;
    resultado = document.getElementById("resultado");
    if (dato == "") {
        resultado.innerText = "No existe cadena de caracteres para evaluar";
    } else {
        if (esNumero(dato)) {
            resultado.innerText = ("La cadena de caracteres es NUMÉRICA: " + parseFloat(dato).toFixed(2));
        } else {
            resultado.innerText = ("La cadena de caracteres NO es NUMÉRICA");
        }
    }
}
function esNumero(dato) {
    /*Definición de los valores aceptados*/
    var valoresAceptados = /^[0-9]+$/;
    if (dato.indexOf(".") === -1) {
        if (dato.match(valoresAceptados)) {
            return true;
        } else {
            return false;
        }
    } else {
        //dividir la expresión por el punto en un array
        var particion = dato.split(".");
        //evaluamos la primera parte de la división (parte entera)
        if (particion[0].match(valoresAceptados) || particion[0] == "") {
            if (particion[1].match(valoresAceptados)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}
