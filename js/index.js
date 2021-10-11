class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    calcularTotalVendido(){
        let totalVendido = this.precio * this.cantidad;
        return totalVendido;
    }
}
