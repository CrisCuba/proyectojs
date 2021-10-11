// ------OBJETO - Alta de nuevos productos dentro de página "productos.html"

class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    /*calcularTotalVendido(){
        let totalVendido = this.precio * this.cantidad;
        return totalVendido;
    }*/

    verProducto(){
        alert("Producto: " + this.nombre + "\n" + "Precio: " + this.precio + "\n" + "Cantidad: " + this.cantidad);
    }
}

// ------Declaración de variables relacionadas al objeto"


let validacion = true;
let nombreProducto;
let precioProducto;
let cantidadProducto;

// ------Función de validación al no ingresar datos por prompt"

function noIngresaDato(caracter){
    if(caracter == ""){
        return true;
    }else{
        return false;
    }
}

// ------Ciclo de validaciones al ingresar datos de productos"

while (validacion){
    nombreProducto = prompt("Ingrese el nombre del producto");
    if(noIngresaDato(nombreProducto)){
        alert("Debe ingresar un nombre");
    }else{
        validacion=false
    }
}

validacion = true

while (validacion){
    precioProducto = Number(prompt("Ingrese el precio del producto"));
    if(noIngresaDato(precioProducto)){
        alert("Debe ingresar un precio");
    }else{
        validacion=false
    }
}

validacion = true

while (validacion){
    cantidadProducto = Number(prompt("Ingrese la cantidad vendida"));
    if(noIngresaDato(cantidadProducto)){
        alert("Debe ingresar una cantidad");
    }else{
        validacion=false
    }
}

// ------Incoporación de nuevos productos, teniendo en cuenta la estructura del objeto declarado"

let altaProducto = new Producto(nombreProducto, precioProducto, cantidadProducto);

altaProducto.verProducto();
