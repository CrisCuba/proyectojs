function vender(precio, cantidad) {

}

class Producto {
    constructor(id, producto, precio, cantidad) {
        this.id = id;
        this.producto = producto;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    venta() {
        this.precio * this.cantidad;
    }
}

let ingresoProducto = [];
let darCorte = prompt ("Ingrese el id del producto de lo contrario ESC");
do{
    if (darCorte == "ESC"){
        break;
    }else {
        id = darCorte;
        let producto = prompt ("Ingrese el nombre del Producto");
        let precio = prompt ("Ingrese Precio del Producto");
        let cantidad = prompt ("Ingrese cantidad vendida");
        ingresoProducto.push (new Producto(producto, precio, cantidad));
    }
}

while (darCorte =! "ESC") 

alert ("Vamos con esas ventas!");

let div = document.getElementById("cardVentas");
let parrafo = document.getElementById("ventaTotal");

document.write(div.innerHTML);
document.write(parrafo.innerHTML);