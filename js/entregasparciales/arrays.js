class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

    const ingreso = [];
    let corteBucle = "";
    do {
    
        let nombre = prompt("Ingrese nombre de producto");
        let precio = prompt("Precio de producto");
        let cantidad = prompt("Cantidad de producto");
    
        const producto = new Producto(nombre, precio, cantidad);
        ingreso.push(producto);  
        
        corteBucle = prompt("Desea ingresar más datos? sino presione ESC");
    } while (corteBucle != "ESC");

    for(const producto of ingreso) {
        document.write("<h2>Producto Ingresado</h2>")
        document.write("<ul>");
        document.write("<li>Nombre: " + producto.nombre + "</li>");
        document.write("<li>Precio: " + producto.precio + "</li>");
        document.write("<li>Cantidad: " + producto.cantidad + "</li>");
        document.write("</ul>");
    }