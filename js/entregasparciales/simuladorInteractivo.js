/*--------- Funciones-----------------------*/


function subTotalVentas(precio, cantidad) {
    const valor = precio * cantidad;
    return valor;
}



/*--------- Variables-----------------------*/
const huboVentas = "SI";
const noHuboVentas = "NO";
let precio = null
let cantidad = null
let vendio = (prompt("Posee ventas en el día? Ingrese SI o NO"))


while (vendio == huboVentas) {
    precio = Number(prompt("Ingrese precio del producto vendido"));
    cantidad = Number(prompt("Ingrese cantidad vendida"));
   

    nuevaVenta = (prompt("Desea ingresar más ventas? SI o ESC"))

    if (nuevaVenta == "ESC") {
        subTotalVentas = valor;
        alert("La ganancia por ventas es:" + " " + subTotalVentas);
    }else {
        precio = Number(prompt("Ingrese precio del producto vendido"));
        cantidad = Number(prompt("Ingrese cantidad vendida"));
        subTotalVentas = precio*cantidad;
        alert("La ganancia por ventas es:" + " " + subTotalVentas);
    }
    break;
}



